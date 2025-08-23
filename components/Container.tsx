'use client'

import { styled } from '@/stitches.config'

export const Container = styled('div', {
  width: '100%',
  marginLeft: 'auto',
  marginRight: 'auto',
  paddingLeft: '$4',
  paddingRight: '$4',
  
  '@sm': {
    maxWidth: '640px',
  },
  '@md': {
    maxWidth: '768px',
  },
  '@lg': {
    maxWidth: '1024px',
  },
  '@xl': {
    maxWidth: '1280px',
  },
  
  variants: {
    size: {
      sm: {
        '@lg': {
          maxWidth: '640px',
        },
      },
      md: {
        '@lg': {
          maxWidth: '768px',
        },
      },
      lg: {
        '@lg': {
          maxWidth: '1024px',
        },
      },
      full: {
        maxWidth: '100%',
      },
    },
  },
  
  defaultVariants: {
    size: 'lg',
  },
})