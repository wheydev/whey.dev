'use client'

import { Layout } from '@/components/Layout'
import { Container } from '@/components/Container'
import { styled } from '@/stitches.config'
import Link from 'next/link'

const Hero = styled('section', {
  paddingTop: '$20',
  paddingBottom: '$20',
})

const HeroTitle = styled('h1', {
  fontSize: '$6xl',
  fontWeight: '$bold',
  marginBottom: '$6',
  letterSpacing: '$tight',
  
  '@md': {
    fontSize: '$7xl',
  },
})

const HeroSubtitle = styled('p', {
  fontSize: '$xl',
  color: '$textSecondary',
  marginBottom: '$8',
  lineHeight: '$relaxed',
})

const CTAButton = styled(Link, {
  display: 'inline-block',
  padding: '$3 $6',
  backgroundColor: '$accent',
  color: '$background',
  borderRadius: '$md',
  fontSize: '$base',
  fontWeight: '$medium',
  transition: '$default',
  
  '&:hover': {
    backgroundColor: '$accentHover',
  },
})

const Section = styled('section', {
  paddingTop: '$16',
  paddingBottom: '$16',
})

const SectionTitle = styled('h2', {
  fontSize: '$4xl',
  fontWeight: '$semibold',
  marginBottom: '$8',
})

const Grid = styled('div', {
  display: 'grid',
  gridTemplateColumns: '1fr',
  gap: '$6',
  
  '@md': {
    gridTemplateColumns: 'repeat(2, 1fr)',
  },
})

const Card = styled('div', {
  padding: '$6',
  border: '1px solid $border',
  borderRadius: '$lg',
  transition: '$default',
  
  '&:hover': {
    borderColor: '$textSecondary',
  },
})

const CardTitle = styled('h3', {
  fontSize: '$xl',
  fontWeight: '$semibold',
  marginBottom: '$2',
})

const CardDescription = styled('p', {
  fontSize: '$base',
  color: '$textSecondary',
  lineHeight: '$relaxed',
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
          <CTAButton href="/labs">Explore Labs</CTAButton>
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