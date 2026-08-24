# Supabase Setup Guide

## Step 1: Run the SQL Migration

1. Go to your Supabase dashboard: https://supabase.com/dashboard
2. Select your project: `retreat-leaders-network`
3. Click **SQL Editor** (left sidebar)
4. Click **New Query**
5. Copy the entire contents of `supabase/migrations/001_init.sql`
6. Paste into the SQL editor
7. Click **Run** (or Cmd+Enter)

This will:
- Create all tables (users, retreats, leaders, applications, etc.)
- Set up Row Level Security (RLS) policies
- Create indexes for performance

## Step 2: Enable Email Confirmations (Optional but Recommended)

1. In Supabase dashboard, go to **Authentication** → **Providers**
2. Find **Email** and enable it
3. Go to **Email Templates** and configure as needed
4. Go to **Settings** → **Email Rate Limit** (adjust if needed)

## Step 3: Test Auth Flow Locally

1. Start the dev server:
   ```bash
   npm run dev
   ```

2. Navigate to http://localhost:3000
3. Click **"JOIN THE NETWORK"** in header
4. Try to **Sign up**:
   - Select role (I lead / I organize)
   - Enter name, email, password
   - Click "Create account"

5. Try to **Log in** with the same credentials

## Step 4: Verify in Supabase

1. Go to **Authentication** → **Users**
   - You should see your newly created user

2. Go to **SQL Editor** and run:
   ```sql
   select * from public.user_profiles;
   ```
   - You should see your profile with name and role

## Troubleshooting

**Issue: "Permission denied" when signing up**
- The `user_profiles` table might not have the correct RLS policies
- Re-run the SQL migration

**Issue: Can't see user profile after signup**
- Check that Supabase auth is enabled
- Verify `.env.local` has correct credentials

**Issue: Applications not saving**
- Check that `applications` table has correct RLS policies
- Verify retreat is published (only published retreats accept applications)

## Next Steps

After auth is working:

1. **Fetch retreats from Supabase** instead of mock data:
   - Update `lib/useAppState.js` to call `fetchPublishedRetreats()` from `lib/supabase.js`
   
2. **Create retreats in real DB**:
   - Update `CreateWizard.jsx` to call `createRetreat()` 
   
3. **Submit real applications**:
   - Update `Apply.jsx` to call `submitApplication()`

4. **View user's data**:
   - Fetch user's retreats, applications, leader profile from DB

See `lib/supabase.js` for all available query/mutation functions.
