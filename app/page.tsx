'use client'

import { Layout } from '@/components/Layout'
import { Container } from '@/components/Container'
import { styled } from '@/stitches.config'
import Link from 'next/link'

const Hero = styled('section', {
  paddingTop: '$12',
  paddingBottom: '$12',

  '@md': {
    paddingTop: '$20',
    paddingBottom: '$20',
  },
})

const HeroTitle = styled('h1', {
  fontSize: '$4xl',
  fontWeight: '$bold',
  marginBottom: '$4',
  letterSpacing: '$tight',
  background: 'linear-gradient(135deg, #1DD882 0%, #1DD882 15%, rgba(29, 216, 130, 0.5) 20%, rgba(29, 216, 130, 0.2) 25%, #FFFFFF 30%, #FFFFFF 100%)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
  
  '@md': {
    fontSize: '$7xl',
    marginBottom: '$6',
  },
})

const HeroSubtitle = styled('p', {
  fontSize: '$base',
  color: '$textSecondary',
  marginBottom: '$6',
  lineHeight: '$relaxed',

  '@md': {
    fontSize: '$xl',
    marginBottom: '$8',
  },
})

const CTAButton = styled(Link, {
  display: 'inline-block',
  padding: '$3 $6',
  background: 'linear-gradient(135deg, #1DD882 0%, #19C274 100%)',
  color: '$background',
  borderRadius: '$md',
  fontSize: '$sm',
  fontWeight: '$medium',
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

const Section = styled('section', {
  paddingTop: '$8',
  paddingBottom: '$8',

  '@md': {
    paddingTop: '$16',
    paddingBottom: '$16',
  },
})

const SectionTitle = styled('h2', {
  fontSize: '$2xl',
  fontWeight: '$semibold',
  marginBottom: '$6',

  '@md': {
    fontSize: '$4xl',
    marginBottom: '$8',
  },
})

const Grid = styled('div', {
  display: 'grid',
  gridTemplateColumns: '1fr',
  gap: '$4',

  '@md': {
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '$6',
  },
})

const Card = styled('div', {
  padding: '$4',
  border: '1px solid $border',
  borderRadius: '$lg',
  transition: '$default',

  '@md': {
    padding: '$6',
  },
  
  '&:hover': {
    borderColor: '$green',
  },
})

const CardTitle = styled('h3', {
  fontSize: '$lg',
  fontWeight: '$semibold',
  marginBottom: '$2',

  '@md': {
    fontSize: '$xl',
  },
})

const CardDescription = styled('p', {
  fontSize: '$sm',
  color: '$textSecondary',
  lineHeight: '$relaxed',

  '@md': {
    fontSize: '$base',
  },
})

export default function HomePage() {
  return (
    <Layout>
      <Container>
        <Hero>
          <HeroTitle>Building Strong Tools for Modern Makers</HeroTitle>
          <HeroSubtitle>
            WheyDev builds tools and experiments for developers and creators—helping you grow in skills, productivity, and creativity.
          </HeroSubtitle>
          <CTAButton href="/labs"><span>Explore Labs</span></CTAButton>
        </Hero>

        <Section>
          <SectionTitle>Our Values</SectionTitle>
          <Grid>
            <Card>
              <CardTitle>Strength</CardTitle>
              <CardDescription>
                We build with resilience, determination, and discipline.
              </CardDescription>
            </Card>
            <Card>
              <CardTitle>Simplicity</CardTitle>
              <CardDescription>
                We design minimal tools that do one thing well.
              </CardDescription>
            </Card>
            <Card>
              <CardTitle>Experimentation</CardTitle>
              <CardDescription>
                We test ideas quickly and learn in public.
              </CardDescription>
            </Card>
            <Card>
              <CardTitle>Curiosity</CardTitle>
              <CardDescription>
                We stay open, connected, and eager to explore.
              </CardDescription>
            </Card>
          </Grid>
        </Section>
      </Container>
    </Layout>
  )
}
