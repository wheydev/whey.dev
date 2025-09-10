'use client'

import React, { useState } from 'react'
import { useServerInsertedHTML } from 'next/navigation'
import { getCssText } from '@/stitches.config'

export default function StitchesRegistry({ children }: { children: React.ReactNode }) {
  const [isRendered] = useState(() => false)

  useServerInsertedHTML(() => {
    if (!isRendered) {
      const styles = getCssText()
      return (
        <style
          id="stitches"
          dangerouslySetInnerHTML={{ __html: styles }}
        />
      )
    }
    return null
  })

  return <>{children}</>
}