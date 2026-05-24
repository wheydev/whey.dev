# WheyDev

whey.dev — one-person software studio. Building strong products for modern makers.

## Stack

- **Astro 5** with static + server rendering
- **Panda CSS** for type-safe, zero-runtime styling
- **TypeScript** strict mode
- **React 18** for interactive islands
- **PostHog** for analytics
- **Yarn Berry** (v4)

## Quick Start

```bash
yarn install
cp .env.example .env.local
yarn dev
```

## Scripts

```bash
yarn dev       # Codegen + dev server
yarn build     # Codegen + production build
yarn preview   # Preview production build
yarn check     # Codegen + type check
```

## Environment Variables

```bash
PUBLIC_POSTHOG_KEY=        # PostHog project key
PUBLIC_POSTHOG_HOST=       # PostHog host (default: https://us.i.posthog.com)
PUBLIC_POSTHOG_ENABLED=    # Enable analytics (true/false)
```

## Deployment

Deployed on Vercel. Framework preset: `astro`.

---

Built by [WheyDev](https://whey.dev)
