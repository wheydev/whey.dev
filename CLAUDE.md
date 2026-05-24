# CLAUDE.md - WheyDev

## What is WheyDev

WheyDev is a one-person software studio that builds focused products for developers and creators. The brand is built around "building strong products for modern makers" — shipping real software in public at the intersection of AI, productivity, and software.

The name comes from whey protein: it gives you strength at the gym, WheyDev gives you strength as a builder. The word "strong" is intentional throughout the brand.

WheyDev LLC is a US entity. Products are priced in USD for the American market.

## Core philosophy

- Products, not experiments. Everything shipped is real and usable from day one.
- Built in public. Process, numbers, and learnings are shared openly.
- Simple, fast, and focused. No feature bloat, no over-engineering.
- "Strong" is a brand keyword tied to the name's origin. Use it intentionally.

## Tech stack

- Astro 5, React 18, TypeScript (strict mode)
- Panda CSS (type-safe, zero-runtime styling with design tokens)
- PostHog (client-side analytics with manual event tracking)
- Yarn Berry (v4)
- Deployed on Vercel

## Project structure

- `src/pages/` — Astro pages
  - `index.astro` — Homepage
  - `products.astro` — Products showcase
  - `changelog.astro` — Public changelog
  - `open-source.astro` — Open source page
  - `about.astro` — About page
  - `rss.xml.ts` — RSS feed
- `src/components/` — Shared Astro components (Header, Footer, BaseHead, etc.)
- `src/layouts/PageLayout.astro` — Base page layout
- `src/content/changelog/` — MDX changelog entries
- `src/content/config.ts` — Content collection schemas
- `src/consts.ts` — Site-wide constants (SITE object)
- `src/styles/globals.css` — Global CSS
- `panda.config.ts` — Design system (tokens, themes, utilities)
- `styled-system/` — Panda CSS generated output (do not edit manually)
- `public/` — Static assets (fonts, images, robots.txt)

## Styling (Panda CSS)

- Dark mode by default (background `#0A0A0A`)
- Accent color: green `#1DD882`
- Semantic tokens: `text.primary`, `text.secondary`, `text.tertiary`, `accent`, `bg`
- Use `css()` from `styled-system/css` for utility styles
- Use `cva()` for component variants
- All design tokens are defined in `panda.config.ts`
- `styled-system/` is auto-generated — run `yarn dev` or `panda codegen` to regenerate

## Navigation

- Home (`/`)
- Products (`/products`)
- Changelog (`/changelog`)
- Open Source (`/open-source`)
- About (`/about`)

## Products

Products live on the `/products` page. Current products:

- **Perspion** — YouTube audience analysis (perspion.whey.dev). Separate repo, separate codebase.
- More coming — displayed as blurred "Coming Soon" cards.

## Content (Changelog)

- Entries are `.mdx` files in `src/content/changelog/`
- Filename format: `YYYY-MM-DD-slug.mdx`
- Schema defined in `src/content/config.ts`

## Environment variables

- `PUBLIC_POSTHOG_KEY` — PostHog project key
- `PUBLIC_POSTHOG_HOST` — PostHog host (default: `https://us.i.posthog.com`)
- `PUBLIC_POSTHOG_ENABLED` — Enable analytics (`true`/`false`)

## Analytics (PostHog)

- Tracking via `PostHogAnalytics.astro` component
- Manual `posthog.capture()` calls with descriptive event names and properties
- Page views are NOT auto-tracked

## Commit message format

- Present tense, imperative: `Add`, `Fix`, `Update`, `Remove`, `Replace`, `Upgrade`
- Concise (50 chars max for title)
- Product-oriented language over implementation details
- No co-authored-by tags
- No ticket/issue keys

Examples:
- `Add Changelog page`
- `Update site metadata`
- `Add PostHog click tracking to footer links`

## Brand language

- "Products" not "labs", "experiments", or "tools"
- "Built in public" not "built independently"
- "One-person software studio" not "independent lab"
- "Execution" not "experimentation" (as a value)
- "Strong" is a core brand word — use it naturally, not forced

## Coding conventions

- Astro components by default; React only for interactive islands (`client:*`)
- PostHog tracking uses `posthog.capture()` with descriptive event names
- Mobile-responsive design via Panda CSS responsive tokens/conditions
