"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import {
  A,
  INK,
  MUTE,
  RETREATS,
  LEADERS,
  ELEMENTS,
  DAYS,
  APPLICANTS,
  NEEDS,
  NEED_FALLBACK,
  ROLE_MODEL,
  BADGE_LEGEND,
  TIERS,
  TYPES,
  LADDER,
  LADDER_NOTE,
  STAGES,
  summarize,
} from "./data";
import { supabase, signOut as supabaseSignOut } from "./supabase";

const INITIAL_STATE = {
  screen: "landing",
  authUser: null, // real Supabase auth user — the source of truth for isAuthed
  pending: null,
  retreatId: "cr",
  leaderId: "travis",
  dayIndex: 0,
  step: 1,
  query: "",
  loc: "",
  when: "",
  cat: "",
  price: "",
  dur: "",
  seeking: false,
  dirFilter: "All",
  needCat: "Any need",
  types: ["Wellness", "Longevity", "Personal development"],
  counts: { Wellness: 1, Longevity: 1, "Personal development": 2 },
  form: {
    name: "",
    location: "",
    start: "",
    end: "",
    duration: "",
    desc: "",
    who: "",
    unique: "",
    category: "Wellness & longevity",
    participants: "",
    priceIn: "",
    reqs: "",
  },
  apply: { role: "Functional medicine / longevity", why: "", teach: "", exp: "", links: "" },
  applyDone: false,
  decided: {},
  slotTab: "longevity",
  toast: "",
};

/**
 * Application state + derived "vals" — a client-side port of the design
 * canvas's `Component` class (state + renderVals()) into a React hook.
 * Screens read from the returned `v` object exactly the way the original
 * template read from `{{ }}` bindings.
 */
export function useAppState() {
  const [s, setS] = useState(INITIAL_STATE);
  const toastTimer = useRef(null);

  const patch = useCallback((partial) => {
    setS((prev) => ({ ...prev, ...partial }));
  }, []);

  // Real Supabase session is the single source of truth for auth — synced
  // on mount and kept live on every sign-in/sign-out/token-refresh event.
  useEffect(() => {
    let mounted = true;
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (mounted) setS((prev) => ({ ...prev, authUser: session?.user || null }));
    });
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, session) => {
      setS((prev) => ({
        ...prev,
        authUser: session?.user || null,
        // Supabase turns the emailed reset link into this event once the
        // recovery session is live — send them straight to the reset form.
        screen: event === "PASSWORD_RECOVERY" ? "reset" : prev.screen,
      }));
    });
    return () => {
      mounted = false;
      subscription?.unsubscribe();
    };
  }, []);

  const go = useCallback((screen) => {
    setS((prev) => ({ ...prev, screen, toast: "" }));
    if (typeof window !== "undefined") window.scrollTo(0, 0);
  }, []);

  const flash = useCallback((msg) => {
    setS((prev) => ({ ...prev, toast: msg }));
    clearTimeout(toastTimer.current);
    toastTimer.current = setTimeout(() => setS((prev) => ({ ...prev, toast: "" })), 2800);
  }, []);

  const gate = useCallback(
    (screen) => {
      if (s.authUser) go(screen);
      else {
        patch({ pending: screen });
        go("login");
      }
    },
    [s.authUser, go, patch]
  );

  const logout = useCallback(async () => {
    await supabaseSignOut();
    // onAuthStateChange fires SIGNED_OUT and clears authUser for us.
    go("landing");
    flash("Logged out");
  }, [go, flash]);

  const retreat = RETREATS[s.retreatId] || RETREATS.cr;
  const leader = LEADERS[s.leaderId] || LEADERS.travis;
  const day = DAYS[s.dayIndex];

  const list = Object.values(RETREATS).filter((r) => {
    if (s.query) {
      const q = s.query.toLowerCase();
      if (!(r.name + " " + r.location + " " + r.host + " " + r.category + " " + r.blurb).toLowerCase().includes(q))
        return false;
    }
    if (s.loc && r.country !== s.loc) return false;
    if (s.when && r.year !== s.when) return false;
    if (s.cat && r.category !== s.cat) return false;
    if (s.price && r.priceBand !== s.price) return false;
    if (s.dur && r.durBand !== s.dur) return false;
    if (s.seeking && r.openSlots.startsWith("0")) return false;
    if (s.needCat && s.needCat !== "Any need" && !summarize(r.id).openCats.includes(s.needCat)) return false;
    return true;
  });

  const openRetreat = (id) => () => {
    patch({ retreatId: id, dayIndex: 0 });
    go("retreat");
  };
  const openLeader = (id) => () => {
    patch({ leaderId: id });
    go("leader");
  };

  const cardFor = (r) => {
    const sum = summarize(r.id);
    return {
      id: r.id,
      slot: r.slot,
      hostSlot: r.hostSlot,
      name: r.name,
      badge: r.badge,
      category: r.category,
      meta: r.location + " · " + r.dates + " · " + r.duration,
      blurb: r.blurb,
      host: r.host,
      price: r.price,
      needsStrip: sum.strip,
      readiness: sum.readiness,
      pct: sum.pct,
      openBadges: sum.openBadges,
      lockedBadges: sum.lockedBadges,
      open: openRetreat(r.id),
      save: () => flash("Saved " + r.short + " to your list"),
    };
  };

  const seekingOpen = Object.values(RETREATS).filter((r) => !r.openSlots.startsWith("0"));

  const crSlots = [
    { role: "Functional medicine / longevity expert", detail: "Clinical depth — protocol, testing, and a teaching session", status: "1 open" },
    { role: "Wellness practitioner", detail: "Daily practice, bodywork or breath", status: "1 open" },
    { role: "Leadership / personal development expert", detail: "Filled by Travis Richardson", status: "Filled" },
  ];

  const roleState = {
    "Functional medicine / longevity": "1 open",
    "Wellness practitioner": "1 open",
    "Leadership / personal development": "Filled",
  };
  const roleOptions = Object.keys(roleState).map((label) => {
    const on = s.apply.role === label;
    return {
      label,
      state: roleState[label],
      pick: () => patch({ apply: { ...s.apply, role: label } }),
      bd: on ? A : "#e8ded2",
      bg: on ? "#f9f0e8" : "#fffdfa",
      dot: on ? A : "#c9ab93",
      dotFill: on ? A : "transparent",
    };
  });

  const totalSlots = s.types.reduce((n, t) => n + (s.counts[t] || 1), 0);
  const accepted = Object.values(s.decided).filter((v) => v === "Accepted").length;

  const v = {
    isGuest: !s.authUser,
    isAuthed: !!s.authUser,
    userLabel: s.authUser?.user_metadata?.name || s.authUser?.email || "",
    logout,
    toast: s.toast,

    onLanding: s.screen === "landing",
    onExplore: s.screen === "explore",
    onRetreat: s.screen === "retreat",
    onLeaders: s.screen === "leaders",
    onLeader: s.screen === "leader",
    onCreate: s.screen === "create",
    onApply: s.screen === "apply",
    onDash: s.screen === "dash",
    onApps: s.screen === "apps",
    onLogin: s.screen === "login",
    onReset: s.screen === "reset",
    onCohort: s.screen === "cohort",
    onRoles: s.screen === "roles",

    needFilters: ["Any need", "Leaders", "Venue", "Photographer", "Videographer", "Private chef", "Transportation"].map(
      (label) => {
        const on = (s.needCat || "Any need") === label;
        return { label, pick: () => patch({ needCat: label }), bd: on ? A : "#e8ded2", bg: on ? A : "transparent", fg: on ? "#fefaf4" : "#5f524a" };
      }
    ),
    roleModel: ROLE_MODEL.map((r) => ({
      ...r,
      cats: r.cats.map((label) => ({ label })),
      browse: () => go(r.key === "prod" || r.key === "exp" ? "leaders" : "explore"),
    })),
    badgeLegend: BADGE_LEGEND,
    navRoles: () => go("roles"),
    boardReadiness: summarize(retreat.id).readiness,
    boardPct: summarize(retreat.id).pct,

    navLanding: () => go("landing"),
    navExplore: () => go("explore"),
    navLeaders: () => go("leaders"),
    navCreate: () => gate("create"),
    navHow: () => go("roles"),
    navCohort: () => go("cohort"),
    navLogin: () => go("login"),
    navDash: () => gate("dash"),
    navApps: () => go("apps"),
    navProfile: () => {
      patch({ leaderId: "maya" });
      go("leader");
    },
    openCostaRica: openRetreat("cr"),

    featured: seekingOpen.slice(0, 3).map(cardFor),
    retreats: list.map(cardFor),
    resultCount: list.length,
    seekingCount: seekingOpen.length,
    query: s.query,
    loc: s.loc,
    when: s.when,
    cat: s.cat,
    price: s.price,
    dur: s.dur,
    setQuery: (e) => patch({ query: e.target.value }),
    setLoc: (e) => patch({ loc: e.target.value }),
    setWhen: (e) => patch({ when: e.target.value }),
    setCat: (e) => patch({ cat: e.target.value }),
    setPrice: (e) => patch({ price: e.target.value }),
    setDur: (e) => patch({ dur: e.target.value }),
    toggleSeeking: () => patch({ seeking: !s.seeking }),
    seekingBg: s.seeking ? A : "transparent",
    seekingFg: s.seeking ? "#fefaf4" : A,

    retreat,
    elements: ELEMENTS.map((e, i) => ({ ...e, slot: "el-" + i })),
    days: DAYS.map((d, i) => ({
      label: d.label.split(" · ")[0],
      title: d.title,
      pick: () => patch({ dayIndex: i }),
      bd: i === s.dayIndex ? A : "#e8ded2",
      bg: i === s.dayIndex ? "#f9f0e8" : "#fffdfa",
    })),
    day,
    audience: [
      "Founders & entrepreneurs",
      "Coaches & consultants",
      "Speakers & authors",
      "Leaders & healers",
      "Anyone who needs a reset",
    ].map((label) => ({ label })),
    crew: [
      { name: "Travis Richardson", role: "Host & leadership lead", slot: "crew-1", open: openLeader("travis") },
      { name: "Priya Raman", role: "Confirmed · strategy", slot: "crew-2", open: openLeader("priya") },
      { name: "Open slot", role: "Longevity expert", slot: "crew-3", open: () => flash("This slot is still open — 2 applicants waiting") },
      { name: "Open slot", role: "Wellness practitioner", slot: "crew-4", open: () => flash("This slot is still open — 2 applicants waiting") },
    ],
    slots: crSlots,
    included: [
      "Villa accommodations, double occupancy",
      "Lunches, dinners and private chef meals",
      "All in-country group transportation",
      "Every planned experience and excursion",
      "Your talk filmed on location",
      "Featured placement in the network",
    ].map((label) => ({ label })),
    needs: (NEEDS[retreat.id] || NEED_FALLBACK).map((n) => {
      const locked = n.state === "Locked";
      const open = n.state === "Open";
      const none = n.state === "Not needed";
      return {
        label: n.label,
        detail: n.detail,
        state: n.state,
        who: n.who,
        bd: locked ? "#cfd8c4" : open ? "#d9bda6" : "#e8ded2",
        bg: locked ? "#f2f5ee" : open ? "#f9f0e8" : "#fffdfa",
        fg: locked ? "#5c6b4a" : none ? MUTE : A,
        mark: locked ? "✓" : none ? "—" : "?",
        act: () => flash(locked ? n.label + " locked — " + n.who : none ? n.label + " is not needed on this retreat" : n.label + " · " + n.who),
      };
    }),
    seatCredit: {
      headline: "Bring 1 more guest for a free seat",
      detail: "Your seat is covered in thirds: 1 guest covers a third, 2 covers two-thirds, 3 covers it entirely.",
      brought: "2 of 3 guests confirmed",
      pct: "66%",
      value: "You have earned $5,331 of $7,997",
    },
    tier: TIERS[leader.id] || { name: "Newcomer", note: "", verified: false, video: false },
    tierVerified: (TIERS[leader.id] || {}).verified ? "Identity & retreats verified" : "Verification pending",
    tierVideo: (TIERS[leader.id] || {}).video ? "Video intro on file" : "No video yet",
    viewHost: openLeader(retreat.hostId),
    startApply: () => {
      patch({ applyDone: false });
      gate("apply");
    },
    save: () => flash("Saved " + retreat.short + " to your list"),

    dirFilters: ["All", "Wellness", "Longevity", "Medicine", "Leadership", "Available now"].map((label) => {
      const on = s.dirFilter === label;
      return { label, pick: () => patch({ dirFilter: label }), bd: on ? A : "#e8ded2", bg: on ? A : "transparent", fg: on ? "#fefaf4" : "#5f524a" };
    }),
    directory: Object.values(LEADERS).map((l) => {
      const t = TIERS[l.id] || {};
      return {
        slot: l.slot,
        name: l.name,
        title: l.title,
        location: l.location,
        stage: l.stage,
        status: l.status,
        t1: l.t1,
        t2: l.t2,
        open: openLeader(l.id),
        tierName: t.name,
        tierNote: t.note,
        tierBd: t.verified ? "#cfd8c4" : "#e8ded2",
        tierBg: t.verified ? "#f2f5ee" : "#f7f0e7",
        tierFg: t.verified ? "#5c6b4a" : MUTE,
        videoBadge: t.video ? "Video intro" : "No video",
      };
    }),

    leader,
    ladder: LADDER.map((label, i) => ({
      label,
      note: LADDER_NOTE[i],
      bar: i <= leader.ladderIndex ? A : "#eee4d8",
      fg: i <= leader.ladderIndex ? INK : MUTE,
    })),
    topics: leader.topics.map((label) => ({ label })),
    credentials: leader.credentials.map((label) => ({ label })),
    pastRetreats: leader.past,
    stats: leader.stats,
    availability: leader.availability.map((a) => ({ window: a.window, state: a.state, fg: a.state === "Open" ? A : "#a3948a" })),
    leaderIsApplicant: leader.applicant && !!s.authUser,
    invite: () => flash("Invitation sent to " + leader.name),
    request: () => flash("Request sent — " + leader.name + " will reply in the network"),
    message: () => flash("Message thread opened with " + leader.name),
    acceptFromProfile: () => {
      patch({ decided: { ...s.decided, [leader.id]: "Accepted" } });
      flash(leader.name + " accepted — 3 of 4 slots filled");
      go("apps");
    },

    step: s.step,
    step1: s.step === 1,
    step2: s.step === 2,
    step3: s.step === 3,
    step4: s.step === 4,
    step5: s.step === 5,
    notLastStep: s.step < 5,
    steps: ["Basics", "Description", "Details", "Leaders", "Publish"].map((label, i) => ({
      label,
      pick: () => patch({ step: i + 1 }),
      bar: i + 1 <= s.step ? A : "#eee4d8",
      fg: i + 1 <= s.step ? INK : MUTE,
    })),
    next: () => {
      patch({ step: Math.min(5, s.step + 1) });
      if (typeof window !== "undefined") window.scrollTo(0, 0);
    },
    back: () => {
      if (s.step === 1) go("landing");
      else {
        patch({ step: s.step - 1 });
        if (typeof window !== "undefined") window.scrollTo(0, 0);
      }
    },
    saveDraft: () => flash("Draft saved"),
    f: s.form,
    setName: (e) => patch({ form: { ...s.form, name: e.target.value } }),
    setLocation: (e) => patch({ form: { ...s.form, location: e.target.value } }),
    setStart: (e) => patch({ form: { ...s.form, start: e.target.value } }),
    setEnd: (e) => patch({ form: { ...s.form, end: e.target.value } }),
    setDuration: (e) => patch({ form: { ...s.form, duration: e.target.value } }),
    setDesc: (e) => patch({ form: { ...s.form, desc: e.target.value } }),
    setWho: (e) => patch({ form: { ...s.form, who: e.target.value } }),
    setUnique: (e) => patch({ form: { ...s.form, unique: e.target.value } }),
    setCategory: (e) => patch({ form: { ...s.form, category: e.target.value } }),
    setParticipants: (e) => patch({ form: { ...s.form, participants: e.target.value } }),
    setPriceIn: (e) => patch({ form: { ...s.form, priceIn: e.target.value } }),
    setReqs: (e) => patch({ form: { ...s.form, reqs: e.target.value } }),
    typeChips: TYPES.map((label) => {
      const on = s.types.includes(label);
      return {
        label,
        bd: on ? A : "#e8ded2",
        bg: on ? A : "#fffdfa",
        fg: on ? "#fefaf4" : "#5f524a",
        toggle: () => {
          const types = on ? s.types.filter((t) => t !== label) : [...s.types, label];
          const counts = { ...s.counts };
          if (!on && !counts[label]) counts[label] = 1;
          patch({ types, counts });
        },
      };
    }),
    typeCounts: s.types.map((label) => ({
      label,
      count: s.counts[label] || 1,
      inc: () => patch({ counts: { ...s.counts, [label]: Math.min(9, (s.counts[label] || 1) + 1) } }),
      dec: () => patch({ counts: { ...s.counts, [label]: Math.max(1, (s.counts[label] || 1) - 1) } }),
    })),
    noTypes: s.types.length === 0,
    totalSlots,
    previewName: s.form.name || "Costa Rica Wellness & Longevity Retreat",
    previewMeta:
      (s.form.location || "Jaco & La Fortuna, Costa Rica") +
      " · " +
      (s.form.start || "Nov 1, 2027") +
      " – " +
      (s.form.end || "Nov 9, 2027") +
      " · " +
      (s.form.duration || "9 days"),
    previewDesc: s.form.desc || "An immersive retreat combining longevity, wellness, nature, and transformational experiences.",
    previewPrice: s.form.priceIn || "$7,997",
    previewParticipants: s.form.participants || "14",
    previewSlots: s.types.map((label) => ({ label, count: s.counts[label] || 1 })),
    publish: () => {
      flash("Retreat published — leaders can now apply");
      go("dash");
    },

    a: s.apply,
    roleOptions,
    applyDone: s.applyDone,
    applyOpen: !s.applyDone,
    setWhy: (e) => patch({ apply: { ...s.apply, why: e.target.value } }),
    setTeach: (e) => patch({ apply: { ...s.apply, teach: e.target.value } }),
    setExp: (e) => patch({ apply: { ...s.apply, exp: e.target.value } }),
    setLinks: (e) => patch({ apply: { ...s.apply, links: e.target.value } }),
    submitApply: () => {
      patch({ applyDone: true });
      if (typeof window !== "undefined") window.scrollTo(0, 0);
    },
    backToRetreat: () => go("retreat"),

    dashGreeting: "Three retreats · " + (7 - accepted) + " applications waiting on you",
    dashStats: [
      { value: "3", label: "Retreats", bd: "#e8ded2", bg: "#fffdfa", fg: INK },
      { value: String(7 - accepted), label: "New applications", bd: "#d9bda6", bg: "#f9f0e8", fg: A },
      { value: String(5 - accepted), label: "Leader slots to fill", bd: "#e8ded2", bg: "#fffdfa", fg: INK },
      { value: "11", label: "Participants booked", bd: "#e8ded2", bg: "#fffdfa", fg: INK },
    ],
    myRetreats: [
      {
        slot: "my-cr",
        name: "Costa Rica Wellness & Longevity",
        status: "Live",
        statusBg: "#e8ebe2",
        statusFg: "#5c6b4a",
        meta: "Jaco & La Fortuna · Nov 1–9, 2027 · 9 days",
        leaders: 2 + accepted + " of 4 leaders confirmed",
        pct: ((2 + accepted) / 4) * 100 + "%",
        apps: 7 - accepted + " applications",
        appsNote: "4 unread",
        participants: "11 participants",
        participantsNote: "of 14 seats",
        cta: "Review " + (7 - accepted),
        review: () => go("apps"),
        manage: () => flash("Retreat editor — not in this prototype"),
      },
      {
        slot: "my-ash",
        name: "Asheville Co-Created Retreat",
        status: "Draft",
        statusBg: "#f0e7db",
        statusFg: "#7d6a5f",
        meta: "Asheville, NC · Apr 3–11, 2028 · 9 days",
        leaders: "0 of 4 co-creators",
        pct: "0%",
        apps: "Not published",
        appsNote: "awaiting cohort",
        participants: "0 participants",
        participantsNote: "of 16 seats",
        cta: "Continue setup",
        review: () => go("create"),
        manage: () => flash("Retreat editor — not in this prototype"),
      },
      {
        slot: "my-jp",
        name: "Live Your List Japan",
        status: "Leading",
        statusBg: "#f0e7db",
        statusFg: "#7d6a5f",
        meta: "Japan · Apr 5–13, 2027 · leading, not hosting",
        leaders: "4 of 4 leaders confirmed",
        pct: "100%",
        apps: "Closed",
        appsNote: "roster complete",
        participants: "18 participants",
        participantsNote: "sold out",
        cta: "View retreat",
        review: openRetreat("jp"),
        manage: () => flash("You are a leader on this retreat, not the host"),
      },
    ],
    soon: () => flash("Venues, chefs and photographers join the network next"),

    filledLabel: 2 + accepted + " of 4",
    slotTabs: [
      { key: "longevity", label: "Longevity · 2" },
      { key: "wellness", label: "Wellness · 2" },
      { key: "filled", label: "Leadership · filled" },
    ].map((t) => {
      const on = s.slotTab === t.key;
      return { label: t.label, pick: () => patch({ slotTab: t.key }), bd: on ? A : "#e8ded2", bg: on ? A : "transparent", fg: on ? "#fefaf4" : "#5f524a" };
    }),
    applicants: APPLICANTS.filter((p) => (s.slotTab === "filled" ? false : p.role === s.slotTab)).map((p) => {
      const d = s.decided[p.id] || "";
      const t = TIERS[p.id] || {};
      return {
        ...p,
        decision: d,
        tagFg: p.tag === "New" ? "#5c6b4a" : MUTE,
        tierName: t.name,
        tierNote: t.note,
        tierBd: t.verified ? "#cfd8c4" : "#e8ded2",
        tierBg: t.verified ? "#f2f5ee" : "#f7f0e7",
        tierFg: t.verified ? "#5c6b4a" : MUTE,
        videoBadge: t.video ? "Video intro ▸" : "No video",
        bd: d === "Accepted" ? A : p.tag === "New" ? "#d9bda6" : "#e8ded2",
        bg: p.tag === "New" ? "#f9f0e8" : "#fffdfa",
        accept: () => {
          patch({ decided: { ...s.decided, [p.id]: "Accepted" } });
          flash(p.name + " accepted — welcome to the leader team");
        },
        decline: () => {
          patch({ decided: { ...s.decided, [p.id]: "Declined" } });
          flash(p.name + " declined");
        },
        view: () => {
          patch({ leaderId: p.id });
          go("leader");
        },
        message: () => flash("Message thread opened with " + p.name),
      };
    }),

    loginNote: s.pending === "create" ? "Create your account to publish a retreat." : "Pick how you show up — you can do both later.",
    // Login screen now drives its own role selection and calls Supabase
    // auth directly (see components/screens/Login.jsx); it navigates to
    // s.pending on success via v.go, same destination this used to compute.
    loginDest: s.pending || "landing",

    stages: STAGES,
  };

  return v;
}
