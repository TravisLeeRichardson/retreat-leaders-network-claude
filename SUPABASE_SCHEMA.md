# Supabase Schema Design

## Tables

### `users` (via Supabase Auth)
- Built-in: `id` (UUID), `email`, `created_at`, `updated_at`
- Custom profile table: `user_profiles`
  - `id` (UUID, FK to auth.users)
  - `email` (text)
  - `name` (text)
  - `role` ('organizer' | 'leader')
  - `avatar_url` (text, nullable)
  - `bio` (text, nullable)
  - `location` (text, nullable)
  - `created_at` (timestamp)

### `retreats`
- `id` (UUID, PK)
- `organizer_id` (UUID, FK → users)
- `name` (text)
- `location` (text)
- `start_date` (date)
- `end_date` (date)
- `description` (text)
- `category` ('wellness' | 'longevity' | 'leadership')
- `price` (integer, in cents)
- `max_participants` (integer)
- `hero_image_url` (text, nullable)
- `status` ('draft' | 'published' | 'archived')
- `created_at` (timestamp)
- `updated_at` (timestamp)

### `retreat_needs`
- `id` (UUID, PK)
- `retreat_id` (UUID, FK → retreats)
- `category` ('leaders' | 'photographers' | 'videographers' | 'chefs' | 'transportation' | 'venue')
- `count` (integer) — how many needed
- `status` ('open' | 'in_review' | 'locked' | 'not_needed')
- `created_at` (timestamp)

### `leaders`
- `id` (UUID, PK)
- `user_id` (UUID, FK → users)
- `title` (text) — e.g., "Longevity Coach"
- `bio` (text)
- `topics` (text[]) — array of expertise areas
- `credentials` (text[])
- `past_retreats_count` (integer)
- `availability_start` (date, nullable)
- `availability_end` (date, nullable)
- `tier` ('anchor' | 'trailblazer' | 'contributor' | 'newcomer')
- `verified` (boolean)
- `video_url` (text, nullable)
- `created_at` (timestamp)

### `applications`
- `id` (UUID, PK)
- `retreat_id` (UUID, FK → retreats)
- `applicant_id` (UUID, FK → users)
- `role` ('experience_provider' | 'production_provider' | 'participant')
- `why_interested` (text)
- `experience_summary` (text)
- `status` ('submitted' | 'reviewing' | 'accepted' | 'declined')
- `created_at` (timestamp)
- `updated_at` (timestamp)

### `retreat_elements`
- `id` (UUID, PK)
- `retreat_id` (UUID, FK → retreats)
- `name` (text) — e.g., "Workshops", "Wellness Resets"
- `description` (text)
- `order` (integer)
- `created_at` (timestamp)

### `retreat_schedule`
- `id` (UUID, PK)
- `retreat_id` (UUID, FK → retreats)
- `day_number` (integer) — 1-9
- `title` (text)
- `description` (text)
- `created_at` (timestamp)

## Row Level Security (RLS) Policies

### `user_profiles`
- Anyone can read (SELECT)
- Users can update only their own row (UPDATE)

### `retreats`
- Anyone can read published retreats (SELECT WHERE status = 'published')
- Organizer can read/write their own retreats (SELECT/UPDATE WHERE organizer_id = auth.uid())

### `retreat_needs`
- Same as retreats (via retreat_id)

### `leaders`
- Anyone can read (SELECT)
- User can update only their own profile (UPDATE WHERE user_id = auth.uid())

### `applications`
- Users can read their own applications (SELECT WHERE applicant_id = auth.uid())
- Organizers can read applications to their retreats (SELECT WHERE retreat_id IN (SELECT id FROM retreats WHERE organizer_id = auth.uid()))
- Users can insert their own applications (INSERT)
- Organizers can update applications to their retreats (UPDATE)

### `retreat_elements`, `retreat_schedule`
- Anyone can read (SELECT)
- Organizers can write to their own retreats

## Notes

- Supabase Auth handles user registration/login (built-in)
- `user_profiles` mirrors auth.users and adds app-specific fields
- All timestamps use `now()` as default
- Use `updated_at` for conflict detection
- RLS must be enabled on all tables
