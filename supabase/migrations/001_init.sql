-- Enable UUID extension
create extension if not exists "uuid-ossp";

-- User profiles (mirrors auth.users)
create table public.user_profiles (
  id uuid primary key references auth.users on delete cascade,
  email text not null unique,
  name text,
  role text check (role in ('organizer', 'leader')),
  avatar_url text,
  bio text,
  location text,
  created_at timestamp with time zone default now(),
  updated_at timestamp with time zone default now()
);

-- Retreats
create table public.retreats (
  id uuid primary key default uuid_generate_v4(),
  organizer_id uuid not null references auth.users on delete cascade,
  name text not null,
  location text not null,
  start_date date not null,
  end_date date not null,
  description text,
  category text check (category in ('wellness', 'longevity', 'leadership')),
  price integer, -- in cents
  max_participants integer,
  hero_image_url text,
  status text default 'draft' check (status in ('draft', 'published', 'archived')),
  created_at timestamp with time zone default now(),
  updated_at timestamp with time zone default now()
);

-- Retreat needs
create table public.retreat_needs (
  id uuid primary key default uuid_generate_v4(),
  retreat_id uuid not null references public.retreats on delete cascade,
  category text not null check (category in ('leaders', 'photographers', 'videographers', 'chefs', 'transportation', 'venue')),
  count integer default 1,
  status text default 'open' check (status in ('open', 'in_review', 'locked', 'not_needed')),
  created_at timestamp with time zone default now()
);

-- Leaders
create table public.leaders (
  id uuid primary key default uuid_generate_v4(),
  user_id uuid not null references auth.users on delete cascade unique,
  title text,
  bio text,
  topics text[] default '{}',
  credentials text[] default '{}',
  past_retreats_count integer default 0,
  availability_start date,
  availability_end date,
  tier text default 'newcomer' check (tier in ('anchor', 'trailblazer', 'contributor', 'newcomer')),
  verified boolean default false,
  video_url text,
  created_at timestamp with time zone default now(),
  updated_at timestamp with time zone default now()
);

-- Applications
create table public.applications (
  id uuid primary key default uuid_generate_v4(),
  retreat_id uuid not null references public.retreats on delete cascade,
  applicant_id uuid not null references auth.users on delete cascade,
  role text not null check (role in ('experience_provider', 'production_provider', 'participant')),
  why_interested text,
  experience_summary text,
  status text default 'submitted' check (status in ('submitted', 'reviewing', 'accepted', 'declined')),
  created_at timestamp with time zone default now(),
  updated_at timestamp with time zone default now(),
  unique(retreat_id, applicant_id, role)
);

-- Retreat elements (activities/workshops)
create table public.retreat_elements (
  id uuid primary key default uuid_generate_v4(),
  retreat_id uuid not null references public.retreats on delete cascade,
  name text not null,
  description text,
  "order" integer,
  created_at timestamp with time zone default now()
);

-- Retreat schedule
create table public.retreat_schedule (
  id uuid primary key default uuid_generate_v4(),
  retreat_id uuid not null references public.retreats on delete cascade,
  day_number integer not null,
  title text not null,
  description text,
  created_at timestamp with time zone default now(),
  unique(retreat_id, day_number)
);

-- Indexes for common queries
create index idx_retreats_organizer_id on public.retreats(organizer_id);
create index idx_retreats_status on public.retreats(status);
create index idx_retreat_needs_retreat_id on public.retreat_needs(retreat_id);
create index idx_leaders_user_id on public.leaders(user_id);
create index idx_applications_retreat_id on public.applications(retreat_id);
create index idx_applications_applicant_id on public.applications(applicant_id);
create index idx_retreat_elements_retreat_id on public.retreat_elements(retreat_id);
create index idx_retreat_schedule_retreat_id on public.retreat_schedule(retreat_id);

-- Row Level Security (RLS)
alter table public.user_profiles enable row level security;
alter table public.retreats enable row level security;
alter table public.retreat_needs enable row level security;
alter table public.leaders enable row level security;
alter table public.applications enable row level security;
alter table public.retreat_elements enable row level security;
alter table public.retreat_schedule enable row level security;

-- user_profiles policies
create policy "Public profiles are viewable by everyone"
  on public.user_profiles for select
  using (true);

create policy "Users can update their own profile"
  on public.user_profiles for update
  using (auth.uid() = id);

create policy "Users can insert their own profile"
  on public.user_profiles for insert
  with check (auth.uid() = id);

-- retreats policies
create policy "Published retreats are viewable by everyone"
  on public.retreats for select
  using (status = 'published' or auth.uid() = organizer_id);

create policy "Organizers can insert their own retreats"
  on public.retreats for insert
  with check (auth.uid() = organizer_id);

create policy "Organizers can update their own retreats"
  on public.retreats for update
  using (auth.uid() = organizer_id);

-- retreat_needs policies (inherit from retreats)
create policy "Retreat needs are viewable based on retreat visibility"
  on public.retreat_needs for select
  using (
    exists (
      select 1 from public.retreats
      where retreats.id = retreat_needs.retreat_id
      and (retreats.status = 'published' or auth.uid() = retreats.organizer_id)
    )
  );

create policy "Organizers can manage needs for their retreats"
  on public.retreat_needs for insert
  with check (
    exists (
      select 1 from public.retreats
      where retreats.id = retreat_id
      and auth.uid() = retreats.organizer_id
    )
  );

create policy "Organizers can update needs for their retreats"
  on public.retreat_needs for update
  using (
    exists (
      select 1 from public.retreats
      where retreats.id = retreat_id
      and auth.uid() = retreats.organizer_id
    )
  );

-- leaders policies
create policy "Leaders are viewable by everyone"
  on public.leaders for select
  using (true);

create policy "Users can update their own leader profile"
  on public.leaders for update
  using (auth.uid() = user_id);

create policy "Users can insert their own leader profile"
  on public.leaders for insert
  with check (auth.uid() = user_id);

-- applications policies
create policy "Users can view their own applications"
  on public.applications for select
  using (auth.uid() = applicant_id);

create policy "Organizers can view applications to their retreats"
  on public.applications for select
  using (
    exists (
      select 1 from public.retreats
      where retreats.id = retreat_id
      and auth.uid() = retreats.organizer_id
    )
  );

create policy "Authenticated users can submit applications"
  on public.applications for insert
  with check (auth.uid() = applicant_id);

create policy "Organizers can update applications to their retreats"
  on public.applications for update
  using (
    exists (
      select 1 from public.retreats
      where retreats.id = retreat_id
      and auth.uid() = retreats.organizer_id
    )
  );

-- retreat_elements policies
create policy "Elements are viewable based on retreat visibility"
  on public.retreat_elements for select
  using (
    exists (
      select 1 from public.retreats
      where retreats.id = retreat_elements.retreat_id
      and (retreats.status = 'published' or auth.uid() = retreats.organizer_id)
    )
  );

create policy "Organizers can manage elements for their retreats"
  on public.retreat_elements for insert
  with check (
    exists (
      select 1 from public.retreats
      where retreats.id = retreat_id
      and auth.uid() = retreats.organizer_id
    )
  );

-- retreat_schedule policies
create policy "Schedule is viewable based on retreat visibility"
  on public.retreat_schedule for select
  using (
    exists (
      select 1 from public.retreats
      where retreats.id = retreat_schedule.retreat_id
      and (retreats.status = 'published' or auth.uid() = retreats.organizer_id)
    )
  );

create policy "Organizers can manage schedule for their retreats"
  on public.retreat_schedule for insert
  with check (
    exists (
      select 1 from public.retreats
      where retreats.id = retreat_id
      and auth.uid() = retreats.organizer_id
    )
  );
