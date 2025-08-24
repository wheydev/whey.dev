import type { Metadata } from 'next'
import StitchesProvider from '@/components/StitchesProvider'

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
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-DMT902R26S"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-DMT902R26S');
            `,
          }}
        />
        <script 
          async 
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2812082397877024"
          crossOrigin="anonymous"
        ></script>
      </head>
      <body>
        <StitchesProvider>
          {children}
        </StitchesProvider>
      </body>
    </html>
  )
}
