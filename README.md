# Retreat Leaders Network

A Next.js implementation of the "Retreat Leaders Network v2" concept from
Claude Design — a marketplace connecting retreat organizers with the leaders,
speakers, and practitioners who help run their retreats.

## What's here

This app is a real, working port of the design canvas prototype
(`design-src/Retreat Leaders Network v2.dc.html`), not just a static copy.
The design tool's `{{ }}` template bindings, `sc-if`/`sc-for` blocks, and
class-based state (`Component` / `renderVals()`) were translated into:

- **`lib/data.js`** — the retreats, leaders, and reference data as plain JS.
- **`lib/useAppState.js`** — a React hook that ports the original state shape
  and derived "vals" 1:1, so every screen, filter, wizard step, and
  gated-login flow behaves exactly as designed.
- **`components/screens/*`** — one component per screen (Landing, Explore,
  Retreat detail, Leaders directory, Leader profile, Create-a-retreat wizard,
  Apply, Dashboard, Applications, Login, How It Works, Founding Cohort).
- **`components/ImageSlot.jsx`** — a deterministic gradient placeholder
  standing in for the design's `<image-slot>` photo drops (no real
  photography exists yet).
- **`components/Hover.jsx`** — a small wrapper that reproduces the design's
  `style-hover="..."` attribute as real React hover state, with keyboard/
  screen-reader support (`role="button"`, `Enter`/`Space` activation) added
  on top since the source markup had none.

There's no backend — retreats, leaders, applications, and "logging in" are
all in-memory mock state, matching the original prototype's scope. Wiring up
real auth/data storage is the natural next step.

## Brand assets

`public/brand/rln-lockup.png` and `rln-mark.png` are the network's logo
lockup and mark, pulled from the design project.

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # production build
npm run lint    # eslint
```

Note: `design-src/` holds the original design canvas export for reference
(including its own `support.js` runtime) and isn't part of the app build.
