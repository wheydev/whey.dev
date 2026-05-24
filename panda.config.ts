import { defineConfig } from '@pandacss/dev'

export default defineConfig({
  preflight: true,
  include: ['./src/**/*.{astro,tsx,ts,jsx,js}'],
  exclude: [],
  outdir: 'styled-system',
  jsxFramework: 'react',
  globalCss: {
    'html, body': {
      backgroundColor: 'bg',
      color: 'text.primary',
      fontFamily: 'sans',
      fontSize: 'base',
      lineHeight: 'body',
      WebkitFontSmoothing: 'antialiased',
    },
    '*, *::before, *::after': {
      boxSizing: 'border-box',
    },
    'a': {
      color: 'text.primary',
      textDecoration: 'none',
      transition: 'color {durations.base} ease',
    },
    'a:hover': {
      color: 'accent',
    },
    '::selection': {
      backgroundColor: 'accent',
      color: 'bg',
    },
    ':focus-visible': {
      outline: '2px solid {colors.accent}',
      outlineOffset: '2px',
      borderRadius: 'sm',
    },
  },
  theme: {
    tokens: {
      colors: {
        bg: { value: '#0A0A0A' },
        accent: { value: '#1DD882' },
        accentHover: { value: '#19C274' },
        purple: { value: '#1E083D' },
        gray1: { value: '#1A1A1A' },
        gray2: { value: '#1F1F1F' },
        gray3: { value: '#292929' },
        gray4: { value: '#2E2E2E' },
        gray5: { value: '#454545' },
        gray6: { value: '#878787' },
        gray7: { value: '#8F8F8F' },
        gray8: { value: '#7C7C7C' },
        gray9: { value: '#E0E0E0' },
        gray10: { value: '#EDEDED' },
        text: {
          primary: { value: '#EDEDED' },
          secondary: { value: '#8F8F8F' },
          tertiary: { value: '#7C7C7C' },
        },
        border: {
          subtle: { value: '#292929' },
          emphasis: { value: '#2E2E2E' },
        },
      },
      spacing: {
        '1': { value: '4px' },
        '2': { value: '8px' },
        '3': { value: '12px' },
        '4': { value: '16px' },
        '5': { value: '20px' },
        '6': { value: '24px' },
        '8': { value: '32px' },
        '10': { value: '40px' },
        '12': { value: '48px' },
        '16': { value: '64px' },
        '20': { value: '80px' },
        '24': { value: '96px' },
      },
      radii: {
        sm: { value: '4px' },
        md: { value: '6px' },
        lg: { value: '8px' },
        xl: { value: '12px' },
        full: { value: '999px' },
      },
      fontSizes: {
        xs: { value: '11px' },
        sm: { value: '13px' },
        base: { value: '15px' },
        lg: { value: '18px' },
        xl: { value: '24px' },
        '2xl': { value: '32px' },
        '3xl': { value: '36px' },
        '4xl': { value: '48px' },
      },
      lineHeights: {
        body: { value: '1.6' },
        heading: { value: '1.2' },
      },
      fonts: {
        sans: { value: 'var(--font-geist-sans), system-ui, sans-serif' },
        mono: { value: 'var(--font-geist-mono), ui-monospace, monospace' },
      },
      fontWeights: {
        regular: { value: '400' },
        medium: { value: '500' },
      },
      durations: {
        fast: { value: '150ms' },
        base: { value: '200ms' },
        slow: { value: '300ms' },
      },
      sizes: {
        page: { value: '960px' },
        narrow: { value: '640px' },
      },
    },
  },
})
