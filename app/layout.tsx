import type { Metadata } from 'next'
import { Instrument_Serif } from 'next/font/google'
import StitchesProvider from '@/components/StitchesProvider'
import StitchesRegistry from '@/components/StitchesRegistry'
import GoogleAnalytics from '@/components/GoogleAnalytics'
import { Providers } from './providers'
import PostHogPageView from '@/components/PostHogPageView'

const instrumentSerif = Instrument_Serif({
  variable: '--font-instrument-serif',
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

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
    <html lang="en" className={instrumentSerif.variable}>
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
