'use client'

import { useEffect } from 'react'
import { getCssText, globalStyles } from '@/stitches.config'

export default function StitchesProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    globalStyles()

    const style = document.createElement('style')
    style.id = 'stitches'
    style.innerHTML = getCssText()
    document.head.appendChild(style)
    
    return () => {
      const existingStyle = document.getElementById('stitches')
      if (existingStyle) {
        existingStyle.remove()
      }
    }
  }, [])

  return <>{children}</>
}
