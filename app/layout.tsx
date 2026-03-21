import type { Metadata } from 'next'
import StitchesProvider from '@/components/StitchesProvider'
import StitchesRegistry from '@/components/StitchesRegistry'
import GoogleAnalytics from '@/components/GoogleAnalytics'
import { Providers } from './providers'
import PostHogPageView from '@/components/PostHogPageView'

export const metadata: Metadata = {
  title: 'WheyDev - Building Strong Products for Modern Makers',
  description: 'WheyDev builds focused software products for developers and creators. Simple, fast, and built in public.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="alternate icon" href="/favicon.ico" />
        <meta property="og:image" content="/wheydev-og.png" />
      </head>
      <body>
        <GoogleAnalytics />
        <StitchesRegistry>
          <StitchesProvider>
            <Providers>
              <PostHogPageView />
              {children}
            </Providers>
          </StitchesProvider>
        </StitchesRegistry>
      </body>
    </html>
  )
}
