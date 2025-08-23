# WheyDev Template

A minimalist, modern Next.js template built with TypeScript and Stitches. Designed to be reusable across multiple projects - from blogs to SaaS applications.

## Features

- **Next.js 15** with App Router
- **TypeScript** for type safety
- **Stitches** for CSS-in-JS styling
- **MDX** for blog content
- **NextAuth** for authentication (Google OAuth)
- **Framer Motion** for animations
- **Multi-project configuration** support
- **Responsive design** with mobile-first approach
- **Dark mode ready** (theme variants included)

## Getting Started

### Installation

```bash
npm install
```

### Environment Setup

Copy `.env.example` to `.env.local` and fill in your credentials:

```bash
cp .env.example .env.local
```

Required environment variables:

- `NEXTAUTH_URL` - Your app URL
- `NEXTAUTH_SECRET` - Random secret for NextAuth
- `GOOGLE_CLIENT_ID` - Google OAuth client ID
- `GOOGLE_CLIENT_SECRET` - Google OAuth client secret
- `NEXT_PUBLIC_PROJECT_NAME` - Project name (wheydev, rayte, talk, photo)

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see your app.

## Project Structure

```
/
├── app/                  # Next.js app directory
│   ├── api/             # API routes
│   ├── blog/            # Blog pages
│   ├── dashboard/       # Protected dashboard
│   ├── labs/            # Labs showcase
│   └── about/           # About page
├── components/          # Reusable components
│   ├── Layout.tsx      # Main layout wrapper
│   ├── Header.tsx      # Navigation header
│   ├── Footer.tsx      # Site footer
│   └── Container.tsx   # Content container
├── config/             # Configuration files
│   └── site.config.ts  # Multi-project configs
├── content/            # MDX content
│   └── blog/          # Blog posts
├── lib/               # Utility functions
│   └── mdx.ts        # MDX processing
└── stitches.config.ts # Styling configuration
```

## Multi-Project Usage

This template supports multiple project configurations. Set `NEXT_PUBLIC_PROJECT_NAME` in your `.env.local`:

### WheyDev (Main Site)

```bash
NEXT_PUBLIC_PROJECT_NAME=wheydev
```

Features: Blog, Labs showcase, About page

### Rayte (YouTube Analytics)

```bash
NEXT_PUBLIC_PROJECT_NAME=rayte
```

Features: Authentication, Dashboard, Analytics

### Talk (Language Practice)

```bash
NEXT_PUBLIC_PROJECT_NAME=talk
```

Features: Authentication, Dashboard, Practice sessions

### Photo (Image Transformation)

```bash
NEXT_PUBLIC_PROJECT_NAME=photo
```
Features: Authentication, Dashboard, Gallery

## Customization

### Adding New Projects

Edit `config/site.config.ts` to add new project configurations:

```typescript
export const yourProjectConfig: SiteConfig = {
  name: 'YourProject',
  tagline: 'Your tagline',
  description: 'Your description',
  url: 'https://yourproject.com',
  features: {
    blog: false,
    labs: false,
    auth: true,
    dashboard: true,
  },
  navItems: [
    { href: '/', label: 'Home' },
    { href: '/dashboard', label: 'Dashboard' },
  ],
  // ... other config
}
```

### Styling

The template uses Stitches for styling. Modify `stitches.config.ts` to customize:

- Colors
- Typography
- Spacing
- Breakpoints
- Dark theme

### Components

All components are built with flexibility in mind. They accept props for customization:

```tsx
<Layout 
  projectName="YourProject"
  showAuth={true}
  navItems={customNavItems}
/>
```

## Deployment

### Vercel (Recommended)

```bash
vercel
```

### Environment Variables

Set the same environment variables in your deployment platform as in `.env.local`.

## License

MIT

## Credits

Built by [WheyDev](https://wheydev.com) - An independent lab building minimal products for modern work.
