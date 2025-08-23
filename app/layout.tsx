import type { Metadata } from 'next'
import { getCssText } from '@/stitches.config'

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
      </head>
      <body>{children}</body>
    </html>
  )
}