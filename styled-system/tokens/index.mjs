const tokens = {
  "colors.bg": {
    "value": "#0A0A0A",
    "variable": "var(--colors-bg)"
  },
  "colors.accent": {
    "value": "#1DD882",
    "variable": "var(--colors-accent)"
  },
  "colors.accentHover": {
    "value": "#19C274",
    "variable": "var(--colors-accent-hover)"
  },
  "colors.purple": {
    "value": "#1E083D",
    "variable": "var(--colors-purple)"
  },
  "colors.gray1": {
    "value": "#1A1A1A",
    "variable": "var(--colors-gray1)"
  },
  "colors.gray2": {
    "value": "#1F1F1F",
    "variable": "var(--colors-gray2)"
  },
  "colors.gray3": {
    "value": "#292929",
    "variable": "var(--colors-gray3)"
  },
  "colors.gray4": {
    "value": "#2E2E2E",
    "variable": "var(--colors-gray4)"
  },
  "colors.gray5": {
    "value": "#454545",
    "variable": "var(--colors-gray5)"
  },
  "colors.gray6": {
    "value": "#878787",
    "variable": "var(--colors-gray6)"
  },
  "colors.gray7": {
    "value": "#8F8F8F",
    "variable": "var(--colors-gray7)"
  },
  "colors.gray8": {
    "value": "#7C7C7C",
    "variable": "var(--colors-gray8)"
  },
  "colors.gray9": {
    "value": "#E0E0E0",
    "variable": "var(--colors-gray9)"
  },
  "colors.gray10": {
    "value": "#EDEDED",
    "variable": "var(--colors-gray10)"
  },
  "colors.text.primary": {
    "value": "#EDEDED",
    "variable": "var(--colors-text-primary)"
  },
  "colors.text.secondary": {
    "value": "#8F8F8F",
    "variable": "var(--colors-text-secondary)"
  },
  "colors.text.tertiary": {
    "value": "#7C7C7C",
    "variable": "var(--colors-text-tertiary)"
  },
  "colors.border.subtle": {
    "value": "#292929",
    "variable": "var(--colors-border-subtle)"
  },
  "colors.border.emphasis": {
    "value": "#2E2E2E",
    "variable": "var(--colors-border-emphasis)"
  },
  "spacing.1": {
    "value": "4px",
    "variable": "var(--spacing-1)"
  },
  "spacing.2": {
    "value": "8px",
    "variable": "var(--spacing-2)"
  },
  "spacing.3": {
    "value": "12px",
    "variable": "var(--spacing-3)"
  },
  "spacing.4": {
    "value": "16px",
    "variable": "var(--spacing-4)"
  },
  "spacing.5": {
    "value": "20px",
    "variable": "var(--spacing-5)"
  },
  "spacing.6": {
    "value": "24px",
    "variable": "var(--spacing-6)"
  },
  "spacing.8": {
    "value": "32px",
    "variable": "var(--spacing-8)"
  },
  "spacing.10": {
    "value": "40px",
    "variable": "var(--spacing-10)"
  },
  "spacing.12": {
    "value": "48px",
    "variable": "var(--spacing-12)"
  },
  "spacing.16": {
    "value": "64px",
    "variable": "var(--spacing-16)"
  },
  "spacing.20": {
    "value": "80px",
    "variable": "var(--spacing-20)"
  },
  "spacing.24": {
    "value": "96px",
    "variable": "var(--spacing-24)"
  },
  "radii.sm": {
    "value": "4px",
    "variable": "var(--radii-sm)"
  },
  "radii.md": {
    "value": "6px",
    "variable": "var(--radii-md)"
  },
  "radii.lg": {
    "value": "8px",
    "variable": "var(--radii-lg)"
  },
  "radii.xl": {
    "value": "12px",
    "variable": "var(--radii-xl)"
  },
  "radii.full": {
    "value": "999px",
    "variable": "var(--radii-full)"
  },
  "fontSizes.xs": {
    "value": "11px",
    "variable": "var(--font-sizes-xs)"
  },
  "fontSizes.sm": {
    "value": "13px",
    "variable": "var(--font-sizes-sm)"
  },
  "fontSizes.base": {
    "value": "15px",
    "variable": "var(--font-sizes-base)"
  },
  "fontSizes.lg": {
    "value": "18px",
    "variable": "var(--font-sizes-lg)"
  },
  "fontSizes.xl": {
    "value": "24px",
    "variable": "var(--font-sizes-xl)"
  },
  "fontSizes.2xl": {
    "value": "32px",
    "variable": "var(--font-sizes-2xl)"
  },
  "fontSizes.3xl": {
    "value": "36px",
    "variable": "var(--font-sizes-3xl)"
  },
  "fontSizes.4xl": {
    "value": "48px",
    "variable": "var(--font-sizes-4xl)"
  },
  "lineHeights.body": {
    "value": "1.6",
    "variable": "var(--line-heights-body)"
  },
  "lineHeights.heading": {
    "value": "1.2",
    "variable": "var(--line-heights-heading)"
  },
  "fonts.sans": {
    "value": "var(--font-geist-sans), system-ui, sans-serif",
    "variable": "var(--fonts-sans)"
  },
  "fonts.mono": {
    "value": "var(--font-geist-mono), ui-monospace, monospace",
    "variable": "var(--fonts-mono)"
  },
  "fontWeights.regular": {
    "value": "400",
    "variable": "var(--font-weights-regular)"
  },
  "fontWeights.medium": {
    "value": "500",
    "variable": "var(--font-weights-medium)"
  },
  "durations.fast": {
    "value": "150ms",
    "variable": "var(--durations-fast)"
  },
  "durations.base": {
    "value": "200ms",
    "variable": "var(--durations-base)"
  },
  "durations.slow": {
    "value": "300ms",
    "variable": "var(--durations-slow)"
  },
  "sizes.page": {
    "value": "960px",
    "variable": "var(--sizes-page)"
  },
  "sizes.narrow": {
    "value": "640px",
    "variable": "var(--sizes-narrow)"
  },
  "sizes.breakpoint-sm": {
    "value": "640px",
    "variable": "var(--sizes-breakpoint-sm)"
  },
  "sizes.breakpoint-md": {
    "value": "768px",
    "variable": "var(--sizes-breakpoint-md)"
  },
  "sizes.breakpoint-lg": {
    "value": "1024px",
    "variable": "var(--sizes-breakpoint-lg)"
  },
  "sizes.breakpoint-xl": {
    "value": "1280px",
    "variable": "var(--sizes-breakpoint-xl)"
  },
  "sizes.breakpoint-2xl": {
    "value": "1536px",
    "variable": "var(--sizes-breakpoint-2xl)"
  },
  "breakpoints.sm": {
    "value": "640px",
    "variable": "var(--breakpoints-sm)"
  },
  "breakpoints.md": {
    "value": "768px",
    "variable": "var(--breakpoints-md)"
  },
  "breakpoints.lg": {
    "value": "1024px",
    "variable": "var(--breakpoints-lg)"
  },
  "breakpoints.xl": {
    "value": "1280px",
    "variable": "var(--breakpoints-xl)"
  },
  "breakpoints.2xl": {
    "value": "1536px",
    "variable": "var(--breakpoints-2xl)"
  },
  "spacing.-1": {
    "value": "calc(var(--spacing-1) * -1)",
    "variable": "var(--spacing-1)"
  },
  "spacing.-2": {
    "value": "calc(var(--spacing-2) * -1)",
    "variable": "var(--spacing-2)"
  },
  "spacing.-3": {
    "value": "calc(var(--spacing-3) * -1)",
    "variable": "var(--spacing-3)"
  },
  "spacing.-4": {
    "value": "calc(var(--spacing-4) * -1)",
    "variable": "var(--spacing-4)"
  },
  "spacing.-5": {
    "value": "calc(var(--spacing-5) * -1)",
    "variable": "var(--spacing-5)"
  },
  "spacing.-6": {
    "value": "calc(var(--spacing-6) * -1)",
    "variable": "var(--spacing-6)"
  },
  "spacing.-8": {
    "value": "calc(var(--spacing-8) * -1)",
    "variable": "var(--spacing-8)"
  },
  "spacing.-10": {
    "value": "calc(var(--spacing-10) * -1)",
    "variable": "var(--spacing-10)"
  },
  "spacing.-12": {
    "value": "calc(var(--spacing-12) * -1)",
    "variable": "var(--spacing-12)"
  },
  "spacing.-16": {
    "value": "calc(var(--spacing-16) * -1)",
    "variable": "var(--spacing-16)"
  },
  "spacing.-20": {
    "value": "calc(var(--spacing-20) * -1)",
    "variable": "var(--spacing-20)"
  },
  "spacing.-24": {
    "value": "calc(var(--spacing-24) * -1)",
    "variable": "var(--spacing-24)"
  },
  "colors.colorPalette": {
    "value": "var(--colors-color-palette)",
    "variable": "var(--colors-color-palette)"
  },
  "colors.colorPalette.primary": {
    "value": "var(--colors-color-palette-primary)",
    "variable": "var(--colors-color-palette-primary)"
  },
  "colors.colorPalette.secondary": {
    "value": "var(--colors-color-palette-secondary)",
    "variable": "var(--colors-color-palette-secondary)"
  },
  "colors.colorPalette.tertiary": {
    "value": "var(--colors-color-palette-tertiary)",
    "variable": "var(--colors-color-palette-tertiary)"
  },
  "colors.colorPalette.subtle": {
    "value": "var(--colors-color-palette-subtle)",
    "variable": "var(--colors-color-palette-subtle)"
  },
  "colors.colorPalette.emphasis": {
    "value": "var(--colors-color-palette-emphasis)",
    "variable": "var(--colors-color-palette-emphasis)"
  }
}

export function token(path, fallback) {
  return tokens[path]?.value || fallback
}

function tokenVar(path, fallback) {
  return tokens[path]?.variable || fallback
}

token.var = tokenVar