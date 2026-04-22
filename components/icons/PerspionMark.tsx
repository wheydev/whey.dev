import type { SVGProps } from 'react'

export function PerspionMark(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 160 36"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Perspion"
      {...props}
    >
      <title>Perspion</title>
      <text
        x="0"
        y="28"
        fontFamily='var(--font-instrument-serif), "Instrument Serif", "Iowan Old Style", "Palatino Linotype", Palatino, serif'
        fontSize="30"
        fontWeight="400"
        letterSpacing="-0.01em"
        fill="currentColor"
      >
        Perspion
      </text>
    </svg>
  )
}
