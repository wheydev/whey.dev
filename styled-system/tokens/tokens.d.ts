/* eslint-disable */
export type Token = `colors.${ColorToken}` | `spacing.${SpacingToken}` | `radii.${RadiusToken}` | `fontSizes.${FontSizeToken}` | `lineHeights.${LineHeightToken}` | `fonts.${FontToken}` | `fontWeights.${FontWeightToken}` | `durations.${DurationToken}` | `sizes.${SizeToken}` | `breakpoints.${BreakpointToken}`

export type ColorPalette = "bg" | "accent" | "accentHover" | "purple" | "gray1" | "gray2" | "gray3" | "gray4" | "gray5" | "gray6" | "gray7" | "gray8" | "gray9" | "gray10" | "text" | "border"

export type ColorToken = "bg" | "accent" | "accentHover" | "purple" | "gray1" | "gray2" | "gray3" | "gray4" | "gray5" | "gray6" | "gray7" | "gray8" | "gray9" | "gray10" | "text.primary" | "text.secondary" | "text.tertiary" | "border.subtle" | "border.emphasis" | "colorPalette" | "colorPalette.primary" | "colorPalette.secondary" | "colorPalette.tertiary" | "colorPalette.subtle" | "colorPalette.emphasis"

export type SpacingToken = "1" | "2" | "3" | "4" | "5" | "6" | "8" | "10" | "12" | "16" | "20" | "24" | "-1" | "-2" | "-3" | "-4" | "-5" | "-6" | "-8" | "-10" | "-12" | "-16" | "-20" | "-24"

export type RadiusToken = "sm" | "md" | "lg" | "xl" | "full"

export type FontSizeToken = "xs" | "sm" | "base" | "lg" | "xl" | "2xl" | "3xl" | "4xl"

export type LineHeightToken = "body" | "heading"

export type FontToken = "sans" | "mono"

export type FontWeightToken = "regular" | "medium"

export type DurationToken = "fast" | "base" | "slow"

export type SizeToken = "page" | "narrow" | "breakpoint-sm" | "breakpoint-md" | "breakpoint-lg" | "breakpoint-xl" | "breakpoint-2xl"

export type BreakpointToken = "sm" | "md" | "lg" | "xl" | "2xl"

export type Tokens = {
		colors: ColorToken
		spacing: SpacingToken
		radii: RadiusToken
		fontSizes: FontSizeToken
		lineHeights: LineHeightToken
		fonts: FontToken
		fontWeights: FontWeightToken
		durations: DurationToken
		sizes: SizeToken
		breakpoints: BreakpointToken
} & { [token: string]: never }

export type TokenCategory = "aspectRatios" | "zIndex" | "opacity" | "colors" | "fonts" | "fontSizes" | "fontWeights" | "lineHeights" | "letterSpacings" | "sizes" | "cursor" | "shadows" | "spacing" | "radii" | "borders" | "borderWidths" | "durations" | "easings" | "animations" | "blurs" | "gradients" | "breakpoints" | "assets"