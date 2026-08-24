// Design tokens and mock content for the Retreat Leaders Network prototype.
// Ported from the Claude Design canvas source (`design-src/Retreat Leaders
// Network v2.dc.html`) into plain JS data so the app can render real routes
// and real React state instead of the design tool's `sc-if` / `sc-for` /
// `{{ }}` templating runtime.

export const A = "#8c5239";
export const INK = "#30231e";
export const MUTE = "#a3948a";

export const RETREATS = {
  cr: {
    id: "cr",
    slot: "card-cr",
    hostSlot: "host-cr",
    kicker: "Costa Rica · November 1–9, 2027",
    name: "Costa Rica Wellness & Longevity Retreat",
    short: "Costa Rica Wellness & Longevity",
    location: "Jaco & La Fortuna, Costa Rica",
    dates: "Nov 1–9, 2027",
    duration: "9 days",
    groupSize: "Small group · 14 seats",
    category: "Wellness",
    country: "Costa Rica",
    year: "2027",
    host: "Travis Richardson",
    hostId: "travis",
    price: "$7,997",
    priceBand: "mid",
    durBand: "long",
    priceNote: "Founding circle · participant seat",
    leaderTerms: "Leaders: seat covered when you bring 3 guests",
    deadline: "Leader applications close March 2027",
    blurb:
      "An immersive retreat combining longevity, wellness, nature, and transformational experiences.",
    lede: "Nine days in Costa Rica to return to yourself.",
    body: "A jungle villa in Jaco, hot springs and volcanos in La Fortuna, and a small group of entrepreneurs, coaches and leaders who came for the same reason. Adventure, rest, real conversation — a filmed talk from the stage, and time away from the phone.",
    philosophy:
      "Every day has a shape, and plenty of space inside it. Nothing is mandatory and there is always a slower track. The work is not to add more — it is to make room, then decide from there.",
    basecamp: "Jungle villa in Jaco + two nights in La Fortuna",
    excluded: "flights, travel insurance, optional spa treatments, breakfast",
    stage: "Stage 2 of the Founding Leader Cohort",
    seekingNote:
      "Two of four leader slots are still open. Leaders run a session, deliver a filmed stage talk, and invite a small number of guests.",
    wants:
      "A session or workshop of your own, a filmed stage talk, and three invited guests — which covers your seat entirely. Prior retreat experience helps but is not required; what matters is that you can hold a room.",
    openSlots: "2 of 4",
    badge: "Seeking 2 Leaders",
  },
  ash: {
    id: "ash",
    slot: "card-ash",
    hostSlot: "host-ash",
    kicker: "Asheville, North Carolina · April 3–11, 2028",
    name: "Asheville Co-Created Retreat",
    short: "Asheville Co-Created Retreat",
    location: "Asheville, North Carolina",
    dates: "Apr 3–11, 2028",
    duration: "9 days",
    groupSize: "Small group · 16 seats",
    category: "Personal development",
    country: "United States",
    year: "2028",
    host: "Travis Richardson",
    hostId: "travis",
    price: "By invitation",
    priceBand: "inv",
    durBand: "long",
    priceNote: "Co-created with profit share",
    leaderTerms: "Co-creators share the build and the profit",
    deadline: "Cohort selection in progress",
    blurb:
      "The founding cohort designs and runs a real retreat in the Blue Ridge — concept to delivery, with profit share.",
    lede: "A retreat built by the people leading it.",
    body: "Positioning, program arc, budget, pricing, break-even, marketing and enrollment — decided by the cohort, with the profit share agreed in writing before the build begins.",
    philosophy:
      "Skin in the game changes how you design. When the pricing and the risk are actually yours, every decision about the experience gets sharper.",
    basecamp: "Blue Ridge mountain house, Asheville",
    excluded: "flights, travel insurance, personal purchases",
    stage: "Stage 3 of the Founding Leader Cohort",
    seekingNote:
      "All four co-creator seats open to the founding cohort. First rights to speak at Taste of Wellness Asheville included.",
    wants:
      "Co-creators who want to learn the business, not just the stage — budget, vendors, enrollment and on-site decisions.",
    openSlots: "4 of 4",
    badge: "Seeking 4 Co-Creators",
  },
  jp: {
    id: "jp",
    slot: "card-jp",
    hostSlot: "host-jp",
    kicker: "Japan · April 5–13, 2027",
    name: "Live Your List Japan",
    short: "Live Your List Japan",
    location: "Japan",
    dates: "Apr 5–13, 2027",
    duration: "9 days",
    groupSize: "Small group",
    category: "Personal development",
    country: "Japan",
    year: "2027",
    host: "Robert Evans",
    hostId: "robert",
    price: "$12k–15k",
    priceBand: "high",
    durBand: "long",
    priceNote: "Retreat cost · flights separate",
    leaderTerms: "Leader roster is full for 2027",
    deadline: "Leader slots filled",
    blurb:
      "Cherry blossoms, temples and a transformational container built over twenty years. Stage one of the cohort year.",
    lede: "Watch how a great retreat is actually built.",
    body: "You arrive as a guest. Robert Evans hosts and Travis is one of four leaders — so you can study how transformation gets structured across a whole trip.",
    philosophy:
      "You stop asking whether you enjoyed it and start asking why it worked — and how you would build it for your own people.",
    basecamp: "Ryokan and city stays across Japan",
    excluded: "flights, insurance, personal purchases",
    stage: "Stage 1 of the Founding Leader Cohort",
    seekingNote:
      "The 2027 leader roster is complete. Future Japan editions open to network leaders first.",
    wants: "Nothing right now — join the waitlist for 2028.",
    openSlots: "0 of 4",
    badge: "Leaders confirmed",
  },
  peru: {
    id: "peru",
    slot: "card-peru",
    hostSlot: "host-peru",
    kicker: "Sacred Valley, Peru · February 12–19, 2028",
    name: "Sacred Valley Longevity Intensive",
    short: "Sacred Valley Longevity Intensive",
    location: "Sacred Valley, Peru",
    dates: "Feb 12–19, 2028",
    duration: "7 days",
    groupSize: "Small group · 12 seats",
    category: "Longevity",
    country: "Peru",
    year: "2028",
    host: "Dr. Maya Okafor",
    hostId: "maya",
    price: "$6,400",
    priceBand: "mid",
    durBand: "long",
    priceNote: "Per participant seat",
    leaderTerms: "Leaders: seat covered plus honorarium",
    deadline: "Applications close June 2027",
    blurb:
      "Altitude, breathwork and metabolic testing in the Andes, for people who measure what they change.",
    lede: "Longevity practice at 9,000 feet.",
    body: "A clinical-grade programme wrapped in a week of altitude, movement and ceremony, with baseline and exit testing for every participant.",
    philosophy:
      "Measure, intervene, measure again — and do it somewhere beautiful enough that people actually keep going.",
    basecamp: "Restored hacienda outside Urubamba",
    excluded: "flights, insurance, spa treatments",
    stage: "Network retreat",
    seekingNote:
      "Two slots open — a breathwork or movement lead, and a nutrition specialist.",
    wants:
      "Practitioners who can run daily practice and hold a teaching session mid-week.",
    openSlots: "2 of 4",
    badge: "Seeking 2 Leaders",
  },
  lis: {
    id: "lis",
    slot: "card-lis",
    hostSlot: "host-lis",
    kicker: "Sintra, Portugal · September 18–23, 2027",
    name: "Lisbon Founders Reset",
    short: "Lisbon Founders Reset",
    location: "Sintra, Portugal",
    dates: "Sep 18–23, 2027",
    duration: "5 days",
    groupSize: "Small group · 10 seats",
    category: "Business",
    country: "Portugal",
    year: "2027",
    host: "Priya Raman",
    hostId: "priya",
    price: "$4,850",
    priceBand: "low",
    durBand: "short",
    priceNote: "Per participant seat",
    leaderTerms: "Leaders: seat covered with 2 guests",
    deadline: "Applications close April 2027",
    blurb:
      "Five days for founders between chapters — strategy in the mornings, Atlantic coast in the afternoons.",
    lede: "A short reset for people mid-decision.",
    body: "Ten founders, a palace-adjacent quinta, and a structure built around one question each person is actually stuck on.",
    philosophy:
      "Short enough that busy people say yes, long enough that something shifts.",
    basecamp: "Quinta in the Sintra hills",
    excluded: "flights, insurance, personal purchases",
    stage: "Network retreat",
    seekingNote: "One slot open for a leadership or personal-development lead.",
    wants: "Someone who can run a hard, honest strategy session without a slide deck.",
    openSlots: "1 of 3",
    badge: "Seeking 1 Leader",
  },
  kyo: {
    id: "kyo",
    slot: "card-kyo",
    hostSlot: "host-kyo",
    kicker: "Kyoto, Japan · October 8–15, 2028",
    name: "Kyoto Autumn Integration",
    short: "Kyoto Autumn Integration",
    location: "Kyoto, Japan",
    dates: "Oct 8–15, 2028",
    duration: "8 days",
    groupSize: "Small group · 12 seats",
    category: "Wellness",
    country: "Japan",
    year: "2028",
    host: "Noor Haddad",
    hostId: "noor",
    price: "$9,200",
    priceBand: "mid",
    durBand: "long",
    priceNote: "Per participant seat",
    leaderTerms: "Leaders: seat covered with 3 guests",
    deadline: "Applications open now",
    blurb:
      "Momiji season, temple mornings and a slow programme for people who have been going too fast for too long.",
    lede: "Autumn in Kyoto, at walking pace.",
    body: "Temple mornings, tea, forest bathing in Arashiyama, and evening circles in a machiya townhouse.",
    philosophy: "The season does most of the work. The programme just gets out of the way.",
    basecamp: "Machiya townhouse, central Kyoto",
    excluded: "flights, insurance, personal purchases",
    stage: "Network retreat",
    seekingNote: "Three slots open across wellness, movement and creative practice.",
    wants: "Practitioners comfortable working quietly, in small groups, without a stage.",
    openSlots: "3 of 4",
    badge: "Seeking 3 Leaders",
  },
};

export const LEADERS = {
  travis: {
    id: "travis",
    slot: "dir-travis",
    name: "Travis Richardson",
    title: "Retreat host · International keynote speaker · Founder, Be Well Asheville",
    location: "Asheville, North Carolina",
    stage: "Creator",
    status: "Available for retreats",
    t1: "Retreat design",
    t2: "Stage speaking",
    lede: "I have spent the last decade chasing one question: what actually makes people come alive?",
    bio: "The answer, for me, turned out to be rooms full of people far from home. Costa Rica three times. Alaska. Ecuador. Liberia. Five of those trips I led or hosted myself, and I have keynoted stages internationally in between. Hosting retreats is not a hobby you graduate into — it is a craft you get handed.",
    audience: "18,400",
    audienceNote: "Newsletter, podcast and Instagram across the Be Well Asheville audience.",
    ladderIndex: 3,
    applicant: false,
    topics: [
      "Retreat design & operations",
      "Stage speaking",
      "Wellness business",
      "Community building",
      "Enrollment & filling rooms",
    ],
    credentials: [
      "Founder, Be Well Asheville",
      "5 retreats led or hosted",
      "International keynote speaker",
      "Host, Costa Rica 2027 & Asheville 2028",
    ],
    past: [
      { name: "Costa Rica 2018", role: "Roundtable lead & stage talk", slot: "past-t1" },
      { name: "Alaska 2014", role: "Participant", slot: "past-t2" },
      { name: "Liberia 2014", role: "Contribution lead", slot: "past-t3" },
    ],
    stats: [
      { value: "5", label: "Retreats led" },
      { value: "8", label: "Countries" },
      { value: "3×", label: "Costa Rica" },
      { value: "12", label: "Stage talks" },
    ],
    availability: [
      { window: "Nov 2027", state: "Hosting" },
      { window: "Apr 2028", state: "Hosting" },
      { window: "2028 H2", state: "Open" },
    ],
  },
  robert: {
    id: "robert",
    slot: "dir-robert",
    name: "Robert Evans",
    title: "Founder, Live Your List · 20+ year transformational leader",
    location: "Ashland, Oregon",
    stage: "Creator",
    status: "Selectively available",
    t1: "Transformational design",
    t2: "Manifesting",
    lede: "Ten-plus trips worldwide and 180 participants through transformative experiences.",
    bio: "Founder of Live Your List and a twenty-year leader in helping people transform their lives and businesses. Trips across Liberia, New Zealand, Ecuador, Costa Rica, Alaska, San Diego and Ashland — built on inspiring people to live their bucket list now, not later.",
    audience: "46,000",
    audienceNote: "Live Your List community, courses and trip alumni.",
    ladderIndex: 3,
    applicant: false,
    topics: [
      "Transformational retreat design",
      "The Habit of Attraction",
      "Online marketing",
      "Lifestyle business",
    ],
    credentials: [
      "Founder, Live Your List",
      "Founder, the UnGRIND Journey",
      "10+ international trips led",
      "180 participants hosted",
    ],
    past: [
      { name: "New Zealand", role: "Host", slot: "past-r1" },
      { name: "Ecuador", role: "Host", slot: "past-r2" },
      { name: "Japan 2027", role: "Host", slot: "past-r3" },
    ],
    stats: [
      { value: "10+", label: "Trips led" },
      { value: "180", label: "Participants" },
      { value: "20yr", label: "Experience" },
      { value: "7", label: "Countries" },
    ],
    availability: [
      { window: "Apr 2027", state: "Hosting" },
      { window: "2028", state: "Open" },
      { window: "2029", state: "Open" },
    ],
  },
  maya: {
    id: "maya",
    slot: "dir-maya",
    name: "Dr. Maya Okafor",
    title: "Functional medicine physician · Longevity clinician",
    location: "Austin, Texas",
    stage: "Co-creator",
    status: "Available for retreats",
    t1: "Longevity",
    t2: "Metabolic health",
    lede: "I want people to leave with numbers that moved, not just a feeling that something did.",
    bio: "Board-certified in internal medicine and certified through the Institute for Functional Medicine. I run a longevity practice in Austin and have led the clinical side of three retreats — baseline testing, daily protocol, and an exit review each participant takes home.",
    audience: "31,200",
    audienceNote: "Clinical newsletter and a longevity podcast with a highly engaged list.",
    ladderIndex: 2,
    applicant: true,
    topics: [
      "Longevity protocols",
      "Metabolic health",
      "Sleep & recovery",
      "Hormone health",
      "Biomarker testing",
    ],
    credentials: [
      "MD, board-certified internal medicine",
      "IFMCP — Institute for Functional Medicine",
      "Founder, Meridian Longevity, Austin",
      "3 retreats as clinical lead",
    ],
    past: [
      { name: "Sedona Longevity 2025", role: "Clinical lead", slot: "past-m1" },
      { name: "Tulum Reset 2024", role: "Workshop lead", slot: "past-m2" },
      { name: "Sacred Valley 2028", role: "Host", slot: "past-m3" },
    ],
    stats: [
      { value: "3", label: "Retreats led" },
      { value: "4", label: "Guests she brings" },
      { value: "12yr", label: "In practice" },
      { value: "31k", label: "Audience" },
    ],
    availability: [
      { window: "Nov 2027", state: "Open" },
      { window: "Feb 2028", state: "Hosting" },
      { window: "2028 H2", state: "Open" },
    ],
  },
  james: {
    id: "james",
    slot: "dir-james",
    name: "James Whitfield",
    title: "Longevity coach · Breathwork facilitator",
    location: "Denver, Colorado",
    stage: "Leader",
    status: "Available for retreats",
    t1: "Breathwork",
    t2: "Cold exposure",
    lede: "Practice beats information. I run the daily rhythm that makes a retreat land in the body.",
    bio: "Ten years of morning practice with groups — breath, cold, movement — across gyms, corporate offsites and four retreats. I take the 6am slot nobody else wants and make it the thing people talk about at dinner.",
    audience: "9,800",
    audienceNote: "Instagram and a small paid practice community.",
    ladderIndex: 1,
    applicant: true,
    topics: [
      "Breathwork",
      "Cold exposure",
      "Morning practice design",
      "Nervous system regulation",
    ],
    credentials: [
      "Oxygen Advantage instructor",
      "XPT coach",
      "4 retreats as practice lead",
      "Former collegiate athlete",
    ],
    past: [
      { name: "Baja Reset 2026", role: "Practice lead", slot: "past-j1" },
      { name: "Aspen Offsite 2025", role: "Facilitator", slot: "past-j2" },
      { name: "Costa Rica 2024", role: "Practice lead", slot: "past-j3" },
    ],
    stats: [
      { value: "4", label: "Retreats led" },
      { value: "2", label: "Guests he brings" },
      { value: "10yr", label: "Coaching" },
      { value: "9.8k", label: "Audience" },
    ],
    availability: [
      { window: "Nov 2027", state: "Open" },
      { window: "Apr 2028", state: "Open" },
      { window: "2029", state: "Open" },
    ],
  },
  priya: {
    id: "priya",
    slot: "dir-priya",
    name: "Priya Raman",
    title: "Executive coach · Author, The Long Middle",
    location: "Lisbon, Portugal",
    stage: "Leader",
    status: "Available for retreats",
    t1: "Leadership",
    t2: "Founder strategy",
    lede: "Most founders do not need a framework. They need one honest hour about the thing they are avoiding.",
    bio: "Fifteen years coaching founders and executives through the messy middle of a company. I host the Lisbon Founders Reset and lead strategy sessions on other people’s retreats — usually the one that makes someone change their plan.",
    audience: "22,400",
    audienceNote: "Substack for founders, plus a private coaching cohort.",
    ladderIndex: 1,
    applicant: true,
    topics: ["Leadership development", "Founder strategy", "Difficult conversations", "Decision-making"],
    credentials: [
      "Author, The Long Middle",
      "ICF Master Certified Coach",
      "Host, Lisbon Founders Reset",
      "15 years executive coaching",
    ],
    past: [
      { name: "Lisbon Reset 2027", role: "Host", slot: "past-p1" },
      { name: "Bali Founders 2025", role: "Strategy lead", slot: "past-p2" },
      { name: "Kyoto 2024", role: "Workshop lead", slot: "past-p3" },
    ],
    stats: [
      { value: "6", label: "Retreats led" },
      { value: "3", label: "Guests she brings" },
      { value: "15yr", label: "Coaching" },
      { value: "22k", label: "Audience" },
    ],
    availability: [
      { window: "Sep 2027", state: "Hosting" },
      { window: "Nov 2027", state: "Open" },
      { window: "2028", state: "Open" },
    ],
  },
  noor: {
    id: "noor",
    slot: "dir-noor",
    name: "Noor Haddad",
    title: "Somatic therapist · Integration specialist",
    location: "Kyoto, Japan",
    stage: "Participant",
    status: "Available for retreats",
    t1: "Somatics",
    t2: "Integration",
    lede: "The retreat is not the work. The two weeks after it are.",
    bio: "Somatic therapy practice in Kyoto, and integration design for retreats that want their participants to still be changed in March. New to leading — one retreat as a participant, one as a session lead.",
    audience: "4,100",
    audienceNote: "Small, local, and unusually loyal.",
    ladderIndex: 0,
    applicant: false,
    topics: ["Somatic practice", "Integration design", "Grief & transition", "Slow programming"],
    credentials: [
      "Somatic Experiencing practitioner",
      "MA Clinical Psychology",
      "Host, Kyoto Autumn Integration",
      "Bilingual EN/JP",
    ],
    past: [
      { name: "Kyoto 2028", role: "Host", slot: "past-n1" },
      { name: "Nara Circle 2026", role: "Session lead", slot: "past-n2" },
      { name: "Costa Rica 2025", role: "Participant", slot: "past-n3" },
    ],
    stats: [
      { value: "2", label: "Retreats led" },
      { value: "2", label: "Guests she brings" },
      { value: "8yr", label: "In practice" },
      { value: "4.1k", label: "Audience" },
    ],
    availability: [
      { window: "Oct 2028", state: "Hosting" },
      { window: "Nov 2027", state: "Open" },
      { window: "2029", state: "Open" },
    ],
  },
};

export const ELEMENTS = [
  { num: "01", name: "Workshops & circles", desc: "Intimate one-hour gatherings at the villa on vision, alignment, purpose and life." },
  { num: "02", name: "Wellness resets", desc: "Pool, sauna, red light, hammocks and quiet time to downshift the nervous system." },
  { num: "03", name: "Adventure", desc: "Designed to stretch comfort zones and reconnect you to aliveness. Slower track always available." },
  { num: "04", name: "Teamwork", desc: "A surprise team challenge that builds collaboration — with a prize and a lot of laughing." },
  { num: "05", name: "Contribution", desc: "Give back to the local community and connect with the land. The day people remember most." },
  { num: "06", name: "Speaking & sizzle", desc: "Share your vision from the stage. Filmed, and yours to keep and repurpose." },
  { num: "07", name: "Rejuvenation", desc: "Beach, national park, spa, rest or quiet exploration. Unstructured on purpose." },
  { num: "08", name: "Integration", desc: "Turn insight into momentum. Leave with a clearer path for your life and work." },
  { num: "09", name: "The network", desc: "Qualify to lead future retreats and join a circle of leaders who share what works." },
];

export const DAYS = [
  { label: "Day 1 · Nov 1", title: "Arrival", desc: "Gather mid-morning in San José and head toward Jaco. Check into the villa, settle into the rhythm, and open with a welcome feast prepared by a private chef." },
  { label: "Day 2 · Nov 2", title: "Opening circle", desc: "Morning practice, then the first leader roundtable. Everyone contributes; no one performs." },
  { label: "Day 3 · Nov 3", title: "Adventure", desc: "ATVs through the jungle, waterfalls, and mud — or a massage and a hammock if that is the braver choice for you today." },
  { label: "Day 4 · Nov 4", title: "Contribution", desc: "A community project with local partners. Consistently the day people talk about a year later." },
  { label: "Day 5 · Nov 5", title: "Stage talks", desc: "Filmed talks in front of a local audience. You leave with the footage and the title of international speaker." },
  { label: "Day 6 · Nov 6", title: "To La Fortuna", desc: "Transfer north to volcano country. Hot springs in the evening, no agenda." },
  { label: "Day 7 · Nov 7", title: "Teamwork", desc: "The surprise team challenge, and a prize worth competing for." },
  { label: "Day 8 · Nov 8", title: "Integration", desc: "Synthesis, commitments and a final circle on the villa deck." },
  { label: "Day 9 · Nov 9", title: "Departure", desc: "Slow morning, group transport to San José, and a room full of people you will still be building with next year." },
];

export const APPLICANTS = [
  {
    id: "maya",
    slot: "app-maya",
    name: "Dr. Maya Okafor",
    stage: "Co-creator",
    tag: "New",
    title: "Functional medicine physician",
    location: "Austin, TX",
    role: "longevity",
    c1: "Longevity",
    c2: "Metabolic health",
    c3: "MD, IFMCP",
    pitch:
      "A three-session arc: baseline testing on day one, a daily metabolic protocol, and an exit review each participant takes home with real numbers on it.",
    experience: "3 retreats led",
    guests: "brings ~4 guests",
    video: "Video intro ▸",
  },
  {
    id: "james",
    slot: "app-james",
    name: "James Whitfield",
    stage: "Leader",
    tag: "",
    title: "Longevity coach & breathwork facilitator",
    location: "Denver, CO",
    role: "longevity",
    c1: "Breathwork",
    c2: "Cold exposure",
    c3: "Oxygen Advantage",
    pitch:
      "The 6am slot: breath, cold and movement every morning, plus one mid-week session on regulating a nervous system that has been running hot for years.",
    experience: "4 retreats led",
    guests: "brings ~2 guests",
    video: "Video intro ▸",
  },
  {
    id: "priya",
    slot: "app-priya",
    name: "Priya Raman",
    stage: "Leader",
    tag: "",
    title: "Executive coach & author",
    location: "Lisbon, PT",
    role: "wellness",
    c1: "Leadership",
    c2: "Founder strategy",
    c3: "ICF Master Coach",
    pitch:
      "One honest hour per participant on the decision they are avoiding, then a group session turning those into commitments before anyone flies home.",
    experience: "6 retreats led",
    guests: "brings ~3 guests",
    video: "No video",
  },
  {
    id: "noor",
    slot: "app-noor",
    name: "Noor Haddad",
    stage: "Participant",
    tag: "",
    title: "Somatic therapist",
    location: "Kyoto, JP",
    role: "wellness",
    c1: "Somatics",
    c2: "Integration",
    c3: "SE practitioner",
    pitch:
      "Integration design — the two weeks after the retreat, structured so what landed in Costa Rica is still there in March.",
    experience: "2 retreats led",
    guests: "brings ~2 guests",
    video: "Video intro ▸",
  },
];

export const NEEDS = {
  cr: [
    { label: "Venue", detail: "Jungle villa, Jaco + La Fortuna", state: "Locked", who: "Casa Verde Jaco" },
    { label: "Leaders", detail: "Longevity · wellness · leadership", state: "2 of 4", who: "2 applicants waiting" },
    { label: "Photographer", detail: "Trip coverage + stage talks", state: "Open", who: "No applicants yet" },
    { label: "Videographer", detail: "Sizzle reel + filmed talks", state: "In review", who: "3 quotes in" },
    { label: "Private chef", detail: "Villa dinners, 8 nights", state: "Locked", who: "Chef Marisol R." },
    { label: "Transportation", detail: "SJO transfers + in-country", state: "Open", who: "No applicants yet" },
  ],
  ash: [
    { label: "Venue", detail: "Blue Ridge mountain house", state: "In review", who: "2 options held" },
    { label: "Co-creators", detail: "Founding cohort of four", state: "0 of 4", who: "Selection in progress" },
    { label: "Photographer", detail: "Full week coverage", state: "Open", who: "No applicants yet" },
    { label: "Videographer", detail: "Taste of Wellness stage", state: "Open", who: "No applicants yet" },
    { label: "Private chef", detail: "Local farm-to-table", state: "Open", who: "No applicants yet" },
    { label: "Transportation", detail: "AVL transfers", state: "Locked", who: "Blue Ridge Shuttle" },
  ],
  jp: [
    { label: "Venue", detail: "Ryokan + city stays", state: "Locked", who: "Live Your List" },
    { label: "Leaders", detail: "Roster complete", state: "4 of 4", who: "Confirmed" },
    { label: "Photographer", detail: "Full trip coverage", state: "Locked", who: "Kenji A." },
    { label: "Videographer", detail: "Sizzle reel", state: "Locked", who: "Kenji A." },
    { label: "Private chef", detail: "Ryokan kitchens", state: "Not needed", who: "Included with venue" },
    { label: "Transportation", detail: "Rail passes + transfers", state: "Locked", who: "JR Group" },
  ],
  peru: [
    { label: "Venue", detail: "Hacienda outside Urubamba", state: "Locked", who: "Hacienda Solar" },
    { label: "Leaders", detail: "Breathwork · nutrition", state: "2 of 4", who: "1 applicant waiting" },
    { label: "Photographer", detail: "Testing days + landscape", state: "Open", who: "No applicants yet" },
    { label: "Videographer", detail: "Optional", state: "Not needed", who: "Host is covering this" },
    { label: "Private chef", detail: "Protocol-aligned menus", state: "In review", who: "2 quotes in" },
    { label: "Transportation", detail: "Cusco transfers", state: "Locked", who: "Valle Transfers" },
  ],
  lis: [
    { label: "Venue", detail: "Quinta in the Sintra hills", state: "Locked", who: "Quinta do Vale" },
    { label: "Leaders", detail: "Leadership / development", state: "2 of 3", who: "1 applicant waiting" },
    { label: "Photographer", detail: "Two days, coastal", state: "In review", who: "3 quotes in" },
    { label: "Videographer", detail: "Optional", state: "Not needed", who: "Host is covering this" },
    { label: "Private chef", detail: "Three dinners", state: "Open", who: "No applicants yet" },
    { label: "Transportation", detail: "Lisbon airport runs", state: "Open", who: "No applicants yet" },
  ],
  kyo: [
    { label: "Venue", detail: "Machiya townhouse", state: "Locked", who: "Machiya Nishijin" },
    { label: "Leaders", detail: "Wellness · movement · creative", state: "1 of 4", who: "No applicants yet" },
    { label: "Photographer", detail: "Momiji season coverage", state: "Open", who: "No applicants yet" },
    { label: "Videographer", detail: "Short film", state: "Open", who: "No applicants yet" },
    { label: "Private chef", detail: "Shojin ryori evenings", state: "In review", who: "1 quote in" },
    { label: "Transportation", detail: "Kansai transfers", state: "Open", who: "No applicants yet" },
  ],
};

export const NEED_FALLBACK = [
  { label: "Venue", detail: "Confirmed by host", state: "Locked", who: "On file" },
  { label: "Leaders", detail: "See open slots below", state: "Open", who: "Accepting applications" },
  { label: "Photographer", detail: "Trip coverage", state: "Open", who: "No applicants yet" },
  { label: "Private chef", detail: "Group meals", state: "In review", who: "Quotes in" },
  { label: "Transportation", detail: "Airport + in-country", state: "Open", who: "No applicants yet" },
  { label: "Videographer", detail: "Optional", state: "Not needed", who: "Host is covering this" },
];

/**
 * Summarize a retreat's production board: how many needs are locked vs.
 * open, a readiness fraction, and a short "Needs X · Y" strip used on cards.
 */
export function summarize(id) {
  const rows = NEEDS[id] || NEED_FALLBACK;
  const counted = rows.filter((r) => r.state !== "Not needed");
  const locked = counted.filter((r) => r.state === "Locked" || /^(\d+) of \1$/.test(r.state));
  const open = counted.filter(
    (r) => r.state === "Open" || (/ of /.test(r.state) && !/^(\d+) of \1$/.test(r.state))
  );

  const one = (r) => {
    if (!/ of /.test(r.state)) return r.label;
    const left = parseInt(r.state.split(" of ")[1], 10) - parseInt(r.state.split(" of ")[0], 10);
    return left + " " + (left === 1 ? r.label.replace(/s$/, "") : r.label);
  };

  const strip = open.length
    ? "Needs " +
      open
        .map((r) => {
          if (!/ of /.test(r.state)) return r.label.toLowerCase();
          const left = parseInt(r.state.split(" of ")[1], 10) - parseInt(r.state.split(" of ")[0], 10);
          const word = r.label.toLowerCase();
          return left + " " + (left === 1 ? word.replace(/s$/, "") : word);
        })
        .join(" · ")
    : "Fully staffed";

  return {
    strip,
    readiness: locked.length + " of " + counted.length + " locked",
    pct: Math.round((locked.length / counted.length) * 100) + "%",
    openCats: open.map((r) => r.label),
    openBadges: open.map((r) => ({ label: "Need " + one(r).toLowerCase() })),
    lockedBadges: locked.map((r) => ({ label: r.label + " chosen" })),
  };
}

export const ROLE_MODEL = [
  {
    key: "host",
    name: "Host",
    tag: "Owns the retreat",
    slot: "role-host",
    desc: "Creates the retreat, sets the price and the terms, and decides who joins the team. One person, one word — organizer and host are the same job.",
    cats: ["Retreat host", "Co-host", "Co-creator"],
    proof: "Verified past retreats, participant reviews, cancellation record, deposit terms.",
  },
  {
    key: "exp",
    name: "Experience providers",
    tag: "Shape what happens",
    slot: "role-exp",
    desc: "The people whose work participants actually experience. They teach, facilitate, speak, treat and hold the room — and they bring audiences.",
    cats: [
      "Retreat leaders",
      "Teachers & educators",
      "Speakers",
      "Facilitators",
      "Coaches & consultants",
      "Practitioners & healers",
      "Clinicians",
      "Movement & fitness",
      "Chefs as teachers",
    ],
    proof: "Credentials, topics taught, past sessions, video intro, guests brought, tier.",
  },
  {
    key: "prod",
    name: "Production providers",
    tag: "Make it possible",
    slot: "role-prod",
    desc: "The suppliers a retreat cannot run without. Local, category-specific, and judged on portfolio and reliability rather than teaching ability.",
    cats: [
      "Venues",
      "Private chefs & catering",
      "Photographers",
      "Videographers",
      "Transportation",
      "Retreat planners",
      "Excursion operators",
      "Equipment & rentals",
    ],
    proof: "Portfolio or gallery, capacity and rates, insurance, host reviews, response time.",
  },
  {
    key: "part",
    name: "Participants",
    tag: "Come for the experience",
    slot: "role-part",
    desc: "Opening once supply is dense. They discover retreats through the people leading them — which is why every profile carries a video.",
    cats: ["Participants", "Alumni", "Referred guests"],
    proof: "Attendance history, referral attribution, reviews left.",
  },
];

export const BADGE_LEGEND = [
  {
    group: "Need badges — on a retreat",
    items: [
      { label: "Locked", note: "Filled and confirmed. Shows who." },
      { label: "2 of 4", note: "Multi-slot need, partially filled." },
      { label: "In review", note: "Applicants or quotes in, host deciding." },
      { label: "Open", note: "No one yet. Visible to the whole network." },
      { label: "Not needed", note: "Host is covering it — counts as neither open nor locked." },
    ],
  },
  {
    group: "Readiness — one number per retreat",
    items: [
      { label: "4 of 6 locked", note: "How complete the production is. Drives Fill Forecast." },
      { label: "Fully staffed", note: "Nothing open. Still accepts speculative interest." },
    ],
  },
  {
    group: "Person badges",
    items: [
      { label: "Newcomer", note: "On the platform, under 2 verified retreats." },
      { label: "Contributor", note: "Verified retreats, has brought guests." },
      { label: "Trailblazer", note: "Repeat leader with a real guest record." },
      { label: "Anchor", note: "Has led or hosted at scale. Top of the ladder." },
      { label: "Verified", note: "Identity and past retreats confirmed by the hosts of those retreats." },
      { label: "Video on file", note: "A two-minute intro exists. Ranks above profiles without one." },
    ],
  },
];

export const TIERS = {
  travis: { name: "Anchor", note: "5 retreats led · 40+ guests brought", verified: true, video: true },
  robert: { name: "Anchor", note: "10+ trips led · 180 participants", verified: true, video: true },
  maya: { name: "Trailblazer", note: "3 retreats · 11 guests brought", verified: true, video: true },
  james: { name: "Contributor", note: "4 retreats · 6 guests brought", verified: true, video: true },
  priya: { name: "Trailblazer", note: "6 retreats · 14 guests brought", verified: true, video: false },
  noor: { name: "Newcomer", note: "2 retreats · 3 guests brought", verified: false, video: true },
};

export const TYPES = [
  "Wellness",
  "Medicine",
  "Longevity",
  "Fitness",
  "Nutrition",
  "Personal development",
  "Business",
  "Spirituality",
  "Other",
];

export const LADDER = ["Participant", "Leader", "Co-creator", "Creator"];
export const LADDER_NOTE = ["Joined a retreat", "Led a session", "Built one", "Runs their own"];

export const STAGES = [
  {
    slot: "stage-jp",
    kicker: "Stage 1 · Japan · April 5–13, 2027",
    name: "Experience It",
    role: "Participant",
    cost: "$12k–15k",
    desc: "You arrive as a guest. Watch how transformation is structured across a whole trip — and give your own stage talk from the first retreat.",
  },
  {
    slot: "stage-cr",
    kicker: "Stage 2 · Costa Rica · November 1–9, 2027",
    name: "Lead It",
    role: "Leader",
    cost: "Covered",
    desc: "Travis hosts; you are one of four leaders. Run a workshop, invite guests, and walk away with footage, photos and testimonials you keep.",
  },
  {
    slot: "stage-ash",
    kicker: "Stage 3 · Asheville · April 3–11, 2028",
    name: "Create It",
    role: "Co-creator",
    cost: "Profit share",
    desc: "The cohort creates a real retreat alongside Travis — positioning, budget, pricing, vendors and enrollment, with the split agreed in writing first.",
  },
  {
    slot: "stage-own",
    kicker: "Stage 4 · Your own retreat · 2028 and beyond",
    name: "Own It",
    role: "Creator",
    cost: "100% yours",
    desc: "Run it independently, or with network support up to a full partnership. Either way you keep the collaborators, vendors and participants.",
  },
];
