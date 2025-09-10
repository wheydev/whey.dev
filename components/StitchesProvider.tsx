'use client'

import { useEffect } from 'react'
import { globalStyles } from '@/stitches.config'

export default function StitchesProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    globalStyles()
  }, [])

  return <>{children}</>
}
