'use client'

import { Layout } from '@/components/Layout'
import { Container } from '@/components/Container'
import { styled } from '@/stitches.config'
import Link from 'next/link'

const NotFoundSection = styled('section', {
  paddingTop: '$12',
  paddingBottom: '$12',
  textAlign: 'center',

  '@md': {
    paddingTop: '$20',
    paddingBottom: '$20',
  },
})

const NotFoundTitle = styled('h1', {
  fontSize: '$6xl',
  fontWeight: '$bold',
  marginBottom: '$4',
  color: '$textPrimary',
  
  '@md': {
    fontSize: '$8xl',
    marginBottom: '$6',
  },
})

const NotFoundSubtitle = styled('h2', {
  fontSize: '$2xl',
  fontWeight: '$semibold',
  marginBottom: '$4',
  color: '$textSecondary',

  '@md': {
    fontSize: '$3xl',
    marginBottom: '$6',
  },
})

const NotFoundDescription = styled('p', {
  fontSize: '$base',
  color: '$textSecondary',
  marginBottom: '$8',
  lineHeight: '$relaxed',
  maxWidth: '600px',
  margin: '0 auto $8 auto',

  '@md': {
    fontSize: '$lg',
    marginBottom: '$10',
  },
})

const BackButton = styled(Link, {
  display: 'inline-block',
  padding: '$3 $6',
  background: 'linear-gradient(135deg, #1DD882 0%, #19C274 100%)',
  color: '$background',
  borderRadius: '$md',
  fontSize: '$sm',
  fontWeight: '$medium',
  textDecoration: 'none',
  transition: 'all 0.3s ease',
  position: 'relative',
  overflow: 'hidden',

  '@md': {
    fontSize: '$base',
  },

  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'linear-gradient(135deg, #19C274 0%, #16A866 100%)',
    opacity: 0,
    transition: 'opacity 0.3s ease',
  },

  '&:hover::before': {
    opacity: 1,
  },

  '& span': {
    position: 'relative',
    zIndex: 1,
  },
})

export default function NotFound() {
  return (
    <Layout>
      <Container>
        <NotFoundSection>
          <NotFoundTitle>404</NotFoundTitle>
          <NotFoundSubtitle>Page Not Found</NotFoundSubtitle>
          <NotFoundDescription>
            The page you&apos;re looking for doesn&apos;t exist. It might have been moved, deleted, or you entered the wrong URL.
          </NotFoundDescription>
          <BackButton href="/">
            <span>← Back to Home</span>
          </BackButton>
        </NotFoundSection>
      </Container>
    </Layout>
  )
}
