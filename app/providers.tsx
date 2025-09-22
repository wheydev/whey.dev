'use client'

import { SessionProvider } from 'next-auth/react'
import posthog from 'posthog-js'
import { PostHogProvider } from 'posthog-js/react'
import { useEffect } from 'react'

interface ProvidersProps {
  children: React.ReactNode
}

export function Providers({ children }: ProvidersProps) {
  useEffect(() => {
    posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY!, {
      api_host: '/ingest',
      ui_host: 'https://us.posthog.com',
      capture_pageview: false,
      capture_pageleave: true,
      capture_exceptions: true,
      debug: process.env.NODE_ENV === 'development',
    })
  }, [])

  return (
    <SessionProvider>
      <PostHogProvider client={posthog}>
        {children}
      </PostHogProvider>
    </SessionProvider>
  )
}
