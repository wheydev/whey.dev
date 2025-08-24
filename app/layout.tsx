import type { Metadata } from 'next'
import { getCssText } from '@/stitches.config'

const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_TRACKING_ID

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
        <style id="stitches" dangerouslySetInnerHTML={{ __html: getCssText() }} />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="alternate icon" href="/favicon.ico" />
        <meta property="og:image" content="/wheydev-og.png" />
        {GA_TRACKING_ID && (
          <>
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
            ></script>
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${GA_TRACKING_ID}');
                `,
              }}
            />
          </>
        )}
        <script 
          async 
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2812082397877024"
          crossOrigin="anonymous"
        ></script>
      </head>
      <body>{children}</body>
    </html>
  )
}
