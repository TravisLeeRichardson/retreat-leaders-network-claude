import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error("Missing Supabase environment variables");
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Helper: Get current session
export async function getSession() {
  const {
    data: { session },
    error,
  } = await supabase.auth.getSession();
  return { session, error };
}

// Helper: Get current user
export async function getCurrentUser() {
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();
  return { user, error };
}

// Helper: create/refresh this user's public.user_profiles row from their
// auth user_metadata. Upsert (not insert) so it's safe to call repeatedly —
// this is what self-heals accounts whose profile row never got created
// (e.g. an earlier signup that hit a DB error after the auth account was
// already made, orphaning it). Never throws: profile sync is best-effort
// and must not block sign-in/sign-up, since auth.users is the real source
// of truth and user_metadata already carries name/role as a fallback.
async function ensureUserProfile(user) {
  if (!user) return;
  const { name, role } = user.user_metadata || {};
  const { error } = await supabase
    .from("user_profiles")
    .upsert({ id: user.id, email: user.email, name: name || null, role: role || null }, { onConflict: "id" });
  if (error) console.error("ensureUserProfile failed (non-fatal):", error.message);
}

// Helper: Sign up
export async function signUp(email, password, name, role) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    // Stored in auth.users.user_metadata so the header can show a name
    // right after signup, without a separate profile fetch.
    options: { data: { name, role } },
  });

  if (error) return { data: null, error };

  // Best-effort profile row — if this fails (RLS hiccup, table migration
  // not yet applied, etc.) the auth account still stands and signIn()'s
  // ensureUserProfile call will retry it on next login instead of the user
  // being stranded with a signup error despite a real account existing.
  if (data.user) await ensureUserProfile(data.user);

  return { data, error: null };
}

// Helper: Sign in
export async function signIn(email, password) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  if (data?.user) await ensureUserProfile(data.user);
  return { data, error };
}

// Helper: Sign out
export async function signOut() {
  const { error } = await supabase.auth.signOut();
  return { error };
}

// Helper: Request a password reset email. Supabase emails the user a link
// back to redirectTo (the app root) carrying a recovery token; the SDK
// turns that into a PASSWORD_RECOVERY auth event we listen for in
// useAppState to route them to the reset-password screen.
export async function requestPasswordReset(email) {
  const { error } = await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: typeof window !== "undefined" ? window.location.origin : undefined,
  });
  return { error };
}

// Helper: Set a new password. Only works while a recovery session (from the
// emailed link) or a normal logged-in session is active.
export async function updatePassword(newPassword) {
  const { data, error } = await supabase.auth.updateUser({ password: newPassword });
  return { data, error };
}

// Queries: Retreats
export async function fetchPublishedRetreats(filters = {}) {
  let query = supabase
    .from("retreats")
    .select(
      `
      *,
      retreat_needs (*),
      retreat_elements (*),
      retreat_schedule (*),
      organizer:user_profiles!retreats_organizer_id_fkey (name, avatar_url)
    `
    )
    .eq("status", "published");

  if (filters.location) {
    query = query.ilike("location", `%${filters.location}%`);
  }
  if (filters.category) {
    query = query.eq("category", filters.category);
  }
  if (filters.minPrice !== undefined) {
    query = query.gte("price", filters.minPrice);
  }
  if (filters.maxPrice !== undefined) {
    query = query.lte("price", filters.maxPrice);
  }

  const { data, error } = await query;
  return { data, error };
}

export async function fetchRetreatById(id) {
  const { data, error } = await supabase
    .from("retreats")
    .select(
      `
      *,
      retreat_needs (*),
      retreat_elements (*),
      retreat_schedule (*),
      organizer:user_profiles!retreats_organizer_id_fkey (id, name, avatar_url, bio)
    `
    )
    .eq("id", id)
    .single();

  return { data, error };
}

export async function fetchUserRetreats(userId) {
  const { data, error } = await supabase
    .from("retreats")
    .select(
      `
      *,
      retreat_needs (*),
      applications (id, status)
    `
    )
    .eq("organizer_id", userId);

  return { data, error };
}

// Queries: Leaders
export async function fetchAllLeaders() {
  const { data, error } = await supabase
    .from("leaders")
    .select(
      `
      *,
      user:user_profiles!leaders_user_id_fkey (id, name, avatar_url)
    `
    );

  return { data, error };
}

export async function fetchLeaderById(id) {
  const { data, error } = await supabase
    .from("leaders")
    .select(
      `
      *,
      user:user_profiles!leaders_user_id_fkey (name, avatar_url, bio, location)
    `
    )
    .eq("id", id)
    .single();

  return { data, error };
}

export async function fetchLeaderProfile(userId) {
  const { data, error } = await supabase
    .from("leaders")
    .select("*")
    .eq("user_id", userId)
    .single();

  return { data, error };
}

// Queries: Applications
export async function fetchUserApplications(userId) {
  const { data, error } = await supabase
    .from("applications")
    .select(
      `
      *,
      retreat:retreats (name, location, start_date)
    `
    )
    .eq("applicant_id", userId);

  return { data, error };
}

export async function fetchRetreatApplications(retreatId) {
  const { data, error } = await supabase
    .from("applications")
    .select(
      `
      *,
      applicant:user_profiles (name, avatar_url)
    `
    )
    .eq("retreat_id", retreatId);

  return { data, error };
}

// Mutations: Retreats
export async function createRetreat(retreat) {
  const { data, error } = await supabase.from("retreats").insert({
    ...retreat,
    organizer_id: (await getCurrentUser()).user.id,
  });

  return { data, error };
}

export async function updateRetreat(id, updates) {
  const { data, error } = await supabase.from("retreats").update(updates).eq("id", id);

  return { data, error };
}

// Mutations: Leaders
export async function updateLeaderProfile(userId, profile) {
  const { data: existing } = await fetchLeaderProfile(userId);

  if (existing) {
    const { data, error } = await supabase
      .from("leaders")
      .update(profile)
      .eq("user_id", userId);
    return { data, error };
  } else {
    const { data, error } = await supabase.from("leaders").insert({
      ...profile,
      user_id: userId,
    });
    return { data, error };
  }
}

// Mutations: Applications
export async function submitApplication(retreatId, applicationData) {
  const { user } = await getCurrentUser();

  const { data, error } = await supabase.from("applications").insert({
    ...applicationData,
    retreat_id: retreatId,
    applicant_id: user.id,
  });

  return { data, error };
}

export async function updateApplicationStatus(applicationId, status) {
  const { data, error } = await supabase
    .from("applications")
    .update({ status })
    .eq("id", applicationId);

  return { data, error };
}

// Mutations: Retreat needs
export async function updateRetreatNeed(needId, updates) {
  const { data, error } = await supabase.from("retreat_needs").update(updates).eq("id", needId);

  return { data, error };
}
