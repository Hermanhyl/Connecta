# CLAUDE.md — Connecta

Project rules and conventions for working in this repo. Read this before making changes.
For visual/design details (colors, typography, components), see **[STYLE_GUIDE.md](./STYLE_GUIDE.md)**.

## What this is

Marketing website for **Connecta**, a Norwegian online therapy & guidance practice
(therapists Kjersti and Amalie Hylland). It is a static single-page app — no backend.
All visible text is in **Norwegian (bokmål)**.

## Tech stack

- **Vite** + **React 19** + **TypeScript**
- **Tailwind CSS** (design tokens in `tailwind.config.js`)
- **React Router** (client-side routing)
- **framer-motion** (animations)
- **lucide-react** (icons)

## Commands

```bash
npm run dev      # local dev server (http://localhost:5173)
npm run build    # type-check (tsc -b) + production build to dist/
npm run preview  # preview the production build
npm run lint     # eslint
```

Always run `npm run build` before committing — it runs the type-checker and will catch
unused imports, type errors, and missing imports (a missing import = white screen at runtime).

## Architecture

```
src/
  data/site.ts        # SINGLE SOURCE OF TRUTH for all content (text, prices, FAQ, posts…)
  lib/motion.ts       # shared framer-motion variants (fadeUp, stagger, pageTransition)
  components/         # reusable UI (see below)
  pages/             # one file per route, composes components
  App.tsx            # router + layout shell + page transitions + MotionConfig
  index.css          # Tailwind layers + base typography + .btn-gold + reduced-motion
```

Routes: `/` `·` `/om-oss` `·` `/tjenester` `·` `/behandlingsmetode` `·` `/priser` `·`
`/blogg` `·` `/blogg/:slug` `·` `/kontakt` `·` `*` (NotFound).

## Core conventions (follow these)

### 1. DRY — don't repeat yourself
- **Content lives only in `src/data/site.ts`.** Never hardcode page copy, prices, emails,
  phone, or FAQ in components — import from `site`.
- **Reuse the shared building blocks** instead of re-writing markup:
  - `PageHero` (`components/Decor.tsx`) — top-of-page hero (blobs + heading). Every inner page uses it.
  - `SectionHeading` (`components/Section.tsx`) — centered eyebrow + title + lead.
  - `Section` + `Reveal` — scroll-reveal wrappers. Put `Reveal` items inside a `Section`.
  - `CallToAction` — the closing CTA band (every content page ends with one).
  - `AnimatedButton` — all buttons/links-as-buttons. Variants: `primary`, `secondary`,
    `gold`, `lightOutline`, `ghost`; sizes `md` | `lg`.
  - `Blobs`, `Logo`, `FAQAccordion`, `TestimonialCarousel`, `ServiceGroupTabs`, `CbtTriad`, `ServiceIcon`.
- If you find yourself copy-pasting a block of JSX a second time, extract a component.

### 2. Mobile-first & fully responsive
- Design and write styles **mobile-first**: base classes target small screens; layer up with
  `sm:` `md:` `lg:`. Stack on mobile, expand on larger screens.
- **Test at 375px** before considering layout done. No horizontal scroll at any width.
- Minimum 16px body text on mobile; touch targets ≥ 44×44px.
- The mobile nav drawer lives in `Header.tsx` (shown below `xl`; the full horizontal nav
  needs `xl` width to fit 7 links at 16px without cramping). The top bar must stay
  `z-50` so the close (✕) button sits above the drawer overlay (`z-40`).

### 3. Styling via tokens, never hardcoded values
- Use the Tailwind `clinic.*` color tokens and `font-heading` / `font-body` — do **not** write
  raw hex in components. Add/adjust tokens in `tailwind.config.js`.

### 4. Animation
- Use `framer-motion` and the shared variants in `lib/motion.ts`.
- Always respect `prefers-reduced-motion` (handled globally via `MotionConfig` in `App.tsx`
  and a media query in `index.css` — don't bypass it).
- Micro-interactions 150–300ms; animate `transform`/`opacity`, not layout properties.

### 5. Accessibility
- Visible focus states, `aria-label` on icon-only buttons, real `<label>`s on form inputs,
  alt text on meaningful images, color is never the only signal.

### 6. Content & language
- Norwegian bokmål, correct spelling/grammar. Prefer one word for compounds
  (`angstsymptomer`, `terapipakke`), `bl.a.` not `bla.`, `å` vs `og` care.
- **Testimonials are real client quotes** — do not silently reword them. Flag issues and ask.

## Deployment (Netlify)

- `netlify.toml` sets `build = npm run build`, `publish = dist`.
- SPA fallback (`/* → /index.html 200`) is in both `netlify.toml` and `public/_redirects` —
  required so deep links like `/om-oss` don't 404. Keep it.

## Git / commits

- **Write descriptive commit messages.** Summarize the change and the why; group related
  changes into logical commits rather than one catch-all. (Standing preference for this repo.)
- Branch off `main` for non-trivial work. Don't commit `node_modules`, `dist`, or `.claude`
  (all git-ignored).
