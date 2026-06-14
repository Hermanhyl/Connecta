# Connecta — Style Guide

The visual language for the Connecta site: a **soft, modern-clinical** look — calm, trustworthy,
airy. Use the tokens and components below rather than ad-hoc values. Tokens are defined in
`tailwind.config.js`; consume them as Tailwind classes (e.g. `bg-clinic-blue`, `font-heading`).

## 1. Colors

| Token | Hex | Use |
|-------|-----|-----|
| `clinic.bg` | `#FBFCFD` | Page background (near-white) |
| `clinic.surface` | `#F2F6F8` | Cards, soft panels, footer |
| `clinic.surface2` | `#EAF1F3` | Slightly deeper surface |
| `clinic.blue` | `#3E6E8E` | Primary brand blue (buttons, links, accents) |
| `clinic.blueDark` | `#2B4F66` | Dark blue (CTA bands, hover, headings on light) |
| `clinic.teal` | `#7FB6AE` | Secondary accent (eyebrows, icons, checks) |
| `clinic.sage` | `#A8C8BE` | Soft accent (blobs, subtle borders) |
| `clinic.gold` | `#C8A35B` | Warm accent — used sparingly (logo, primary CTA, dividers) |
| `clinic.ink` | `#243B45` | Primary text |
| `clinic.muted` | `#5C6F78` | Body / secondary text |
| `clinic.line` | `#E3EBEF` | Hairline borders, dividers |

**Rules:** body text uses `clinic.ink`/`clinic.muted` (≥ 4.5:1 contrast). Gold is an accent, not a
fill — the one exception is the primary CTA button. On dark (`blueDark`) bands, text is white /
`white/80`.

## 2. Typography

- **Headings:** `font-heading` → **Lora** (serif). Weights 400–700.
- **Body / UI:** `font-body` → **Raleway** (sans). Weights 300–700.
- Loaded via Google Fonts in `index.html`.

| Role | Classes |
|------|---------|
| Hero H1 | `font-heading text-5xl sm:text-6xl font-semibold leading-[1.08]` |
| Page H1 (inner) | `text-4xl sm:text-5xl font-semibold` |
| Section H2 | `text-3xl sm:text-4xl font-semibold` |
| Card H3 | `font-heading text-xl font-semibold` |
| Eyebrow | `text-sm font-semibold uppercase tracking-[0.18em] text-clinic-teal` |
| Body | `leading-relaxed text-clinic-muted` (articles: `leading-[1.8]`) |
| Lead / ingress | `font-heading text-xl leading-relaxed text-clinic-ink` |

Line length for long-form text: ~65–70 characters (`max-w-2xl` for article bodies). Body ≥ 16px.

## 3. Layout & spacing

- Page width: `.container-content` = `max-w-content` (72rem) with `px-5 sm:px-8`.
- Section vertical rhythm: `py-12` to `py-16`.
- Mobile-first: stack with base classes, expand at `sm:` / `md:` / `lg:`.
- Standard breakpoints to verify: **375 / 768 / 1024 / 1440**.

## 4. Radius, shadows, borders

- Radius: cards `rounded-3xl`, controls/pills `rounded-2xl` / `rounded-full`.
- Shadows (tokens): `shadow-soft` (resting), `shadow-card` (hover/raised), `shadow-lift` (CTA/drawer).
- Borders: 1px `border-clinic-line`.

## 5. Buttons — `AnimatedButton`

| Variant | Use |
|---------|-----|
| `primary` | Default action (solid blue) |
| `secondary` | Secondary action (white + border) |
| `gold` | The main CTA on dark bands — rich metallic gold with shine-sweep (`.btn-gold`) |
| `lightOutline` | Secondary action on dark bands (white outline) |
| `ghost` | Low-emphasis text action |

Sizes: `md` (default), `lg` (CTAs). Hover lifts `y:-2`, tap `scale:0.97`. All buttons get
`cursor-pointer` and a visible focus ring.

## 6. Components

| Component | Purpose |
|-----------|---------|
| `PageHero` | Top-of-page hero: floating `Blobs` + centered `PageHeading` |
| `SectionHeading` | Centered eyebrow + title + optional lead inside a `Section` |
| `Section` / `Reveal` | Scroll-reveal wrappers (stagger + fadeUp) |
| `CallToAction` | Closing CTA band (gradient blue, gold primary + phone) |
| `FAQAccordion` | Animated expand/collapse Q&A |
| `TestimonialCarousel` | Quote slider with dots + arrows |
| `ServiceGroupTabs` | Tabbed sub-sections (used for Onlineterapi prep steps) |
| `CbtTriad` | Visual model: Tanker → Følelser → Handlinger |
| `Logo`, `Header`, `Footer`, `ServiceIcon`, `Blobs` | Layout & branding |

## 7. Animation

- Library: framer-motion. Shared variants in `lib/motion.ts`: `fadeUp`, `fadeIn`, `stagger`,
  `staggerFast`, `pageTransition`.
- Scroll reveals fire once (`viewport={{ once: true, margin: '-80px' }}`).
- Page transitions: `AnimatePresence` in `App.tsx` (fade + slight y).
- Decorative `Blobs` drift slowly behind heroes.
- Durations: micro-interactions 150–300ms; reveals ~0.5s. Animate `transform`/`opacity` only.
- **Always honor `prefers-reduced-motion`** (global `MotionConfig` + CSS media query).

## 8. Iconography

- `lucide-react` only. Default stroke ~1.6–1.8, fixed sizes (16/18/20/24).
- No emoji as UI icons. Icon-only buttons need an `aria-label`.

## 9. Imagery

- No copyrighted stock photos. Use the gradient/blob treatment and CSS illustration
  (e.g. blog card headers, hero backdrop) instead.

## 10. Voice & tone

- Warm, calm, professional, and plain-spoken — speaks **to** the reader (“du”).
- Norwegian bokmål, correct spelling/grammar. Short paragraphs (one idea each), clear
  subheadings, and a brief lead/summary for long reads.
