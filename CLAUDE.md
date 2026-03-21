# CLAUDE.md - WheyDev

## What is WheyDev

WheyDev is a one-person software studio that builds focused products for developers and creators. The brand is built around "building strong products for modern makers" — shipping real software in public at the intersection of AI, productivity, and software.

The name comes from whey protein: it gives you strength at the gym, WheyDev gives you strength as a builder. The word "strong" is intentional throughout the brand.

WheyDev LLC is a US entity (Mercury Bank, EIN). Products are priced in USD for the American market.

## Core philosophy

- Products, not experiments. Everything shipped is real and usable from day one.
- Built in public. Process, numbers, and learnings are shared openly.
- Simple, fast, and focused. No feature bloat, no over-engineering.
- "Strong" is a brand keyword tied to the name's origin. Use it intentionally.

## Tech stack

- Next.js 16 (App Router), React 18, TypeScript (strict mode)
- Stitches v1 (CSS-in-JS with design tokens) — NOT Tailwind
- next-mdx-remote v6 + gray-matter (blog content in MDX)
- PostHog (client + server-side analytics with custom event tracking)
- next-auth (configured but minimal usage currently)
- framer-motion (animations)
- date-fns (date formatting)
- Deployed on Vercel

## Project structure

- `app/` — Next.js App Router pages
  - `page.tsx` — Homepage (hero, values, CTAs)
  - `products/page.tsx` — Products showcase
  - `blog/` — Blog listing + `[slug]/` individual posts
  - `about/page.tsx` — About page
  - `layout.tsx` — Root layout with metadata
  - `providers.tsx` — Client-side providers (PostHog)
  - `not-found.tsx` — 404 page
- `components/` — Shared components (Header, Footer, Layout, Container)
- `content/blog/` — Markdown/MDX blog posts with YAML frontmatter
- `src/config.ts` — Site metadata and pagination settings
- `src/types.ts` — TypeScript interfaces (Site, SocialObject)
- `lib/mdx.ts` — MDX processing utilities
- `public/` — Static assets (logo, images, robots.txt)
- `stitches.config.ts` — Design system (tokens, themes, utilities, breakpoints)

## Styling (Stitches)

- Dark mode by default (background #0A0A0A)
- Accent color: green #1DD882
- Semantic tokens: `$textPrimary`, `$textSecondary`, `$textMuted`, `$border`, `$green`
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px), 2xl (1536px)
- Use `styled()` from `@/stitches.config` for all component styling
- Use Stitches `variants` for conditional styles, not inline ternaries
- Global styles are defined in `stitches.config.ts` via `globalCss()`

## Navigation

- Products (`/products`)
- Blog (`/blog`)
- About (`/about`)

## Products

Products live on the `/products` page. Current products:

- **Gradon** — Career progress tracker (gradon.whey.dev). Separate repo, separate codebase.
- More coming — displayed as blurred "Coming Soon" cards.

## Blog

- Posts are `.md` files in `/content/blog/` with YAML frontmatter
- Pagination: 4 posts on homepage index, 3 per page on blog listing
- Rendered with `next-mdx-remote`

## Environment variables

Required:
- `NEXT_PUBLIC_PROJECT_NAME` — Project identifier (default: "wheydev")
- `NEXT_PUBLIC_PROJECT_LOGO` — Logo path
- `NEXT_PUBLIC_POSTHOG_KEY` — PostHog analytics key
- `NEXT_PUBLIC_POSTHOG_HOST` — PostHog endpoint

Optional:
- `NEXTAUTH_URL`, `NEXTAUTH_SECRET` — Auth config
- `DATABASE_URL` — Database connection

## Analytics (PostHog)

- Custom event tracking on CTAs, nav clicks, footer links, product cards
- PostHog rewrites configured in `next.config.js` to bypass ad blockers
- Page views are NOT auto-tracked; only manual events and exception capture

## Commit message format

- Present tense, imperative: `Add`, `Fix`, `Update`, `Remove`, `Replace`, `Upgrade`
- Concise (50 chars max for title)
- Product-oriented language over implementation details
- No co-authored-by tags
- No ticket/issue keys

Examples:
- `Replace Labs page with Products page`
- `Update site metadata to reflect Products branding`
- `Add PostHog click tracking to footer links`

## Brand language

- "Products" not "labs", "experiments", or "tools"
- "Built in public" not "built independently"
- "One-person software studio" not "independent lab"
- "Execution" not "experimentation" (as a value)
- "Strong" is a core brand word — use it naturally, not forced

## Coding conventions

- Server components by default; `'use client'` only when necessary
- Components use composition with Stitches styled primitives
- PostHog tracking uses `posthog.capture()` with descriptive event names and properties
- Mobile-responsive design built into every component via Stitches media queries
