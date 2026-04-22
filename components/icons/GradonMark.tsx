import type { SVGProps } from 'react'

export function GradonMark(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 160 32"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Gradon"
      {...props}
    >
      <title>Gradon</title>
      <text
        x="0"
        y="24"
        fontFamily='-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'
        fontSize="22"
        fontWeight="800"
        letterSpacing="-0.02em"
        fill="currentColor"
      >
        GRADON
      </text>
    </svg>
  )
}
