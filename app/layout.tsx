import type { Metadata } from 'next'
import StitchesProvider from '@/components/StitchesProvider'
import StitchesRegistry from '@/components/StitchesRegistry'
import GoogleAnalytics from '@/components/GoogleAnalytics'

export const metadata: Metadata = {
  title: 'WheyDev - Independent Lab Building Minimal Products',
  description: 'WheyDev Labs explores ideas openly, creating tools that are simple, fast, and effective.',
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
            {children}
          </StitchesProvider>
        </StitchesRegistry>
      </body>
    </html>
  )
}
