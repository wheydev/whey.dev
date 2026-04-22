import { styled } from '@/stitches.config'

const ComingSoonLabel = styled('span', {
  fontFamily: '$heading',
  fontSize: '$xl',
  fontWeight: '$semibold',
  letterSpacing: '$tight',
  lineHeight: 1.2,
  color: 'currentColor',

  '@md': {
    fontSize: '$2xl',
  },
})

export function PlaceholderMark() {
  return <ComingSoonLabel>Coming soon</ComingSoonLabel>
}
