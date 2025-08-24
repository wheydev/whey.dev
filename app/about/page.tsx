'use client'

import { Layout } from '@/components/Layout'
import { Container } from '@/components/Container'
import { styled } from '@/stitches.config'

const PageHeader = styled('div', {
  paddingTop: '$6',
  paddingBottom: '$6',
  borderBottom: '1px solid $border',
  
  '@md': {
    paddingTop: '$12',
    paddingBottom: '$12',
  },
})

const PageTitle = styled('h1', {
  fontSize: '$2xl',
  fontWeight: '$bold',
  marginBottom: '$3',
  
  '@md': {
    fontSize: '$5xl',
    marginBottom: '$4',
  },
})

const Content = styled('div', {
  paddingTop: '$12',
  paddingBottom: '$12',
  
  '& h2': {
    fontSize: '$3xl',
    fontWeight: '$semibold',
    marginTop: '$12',
    marginBottom: '$6',
  },
  
  '& p': {
    fontSize: '$lg',
    lineHeight: '$relaxed',
    color: '$textSecondary',
    marginBottom: '$6',
  },
  
  '& ul': {
    listStyle: 'none',
    paddingLeft: 0,
    
    '& li': {
      fontSize: '$lg',
      lineHeight: '$relaxed',
      color: '$textSecondary',
      marginBottom: '$3',
      paddingLeft: '$6',
      position: 'relative',
      
      '&::before': {
        content: '"→"',
        position: 'absolute',
        left: 0,
        color: '$textMuted',
      },
    },
  },
})

export default function AboutPage() {
  return (
    <Layout>
      <Container>
        <PageHeader>
          <PageTitle>About</PageTitle>
        </PageHeader>
        
        <Content>
          <p>
            WheyDev is an independent lab building minimal products for modern work founded by <a href="https://ederchristian.com" target="_blank" rel="noopener noreferrer" style={{ color: '#1DD882', textDecoration: 'underline' }}>Eder Christian</a>.
          </p>
          
          <p>
            We focus on experiments at the intersection of AI, software, and productivity—creating tools that are simple, fast, and effective.
          </p>
          
          <p>
            WheyDev Labs explores ideas openly. Some experiments remain prototypes, others grow into standalone products—but all are built with the same principles: simplicity, curiosity, and impact.
          </p>
          
          <p>
            We believe in learning in public, sharing progress, and building tools that help people do their best work.
          </p>
          
          <h2>Mission</h2>
          <p>To create products that make modern work faster, simpler, and more intentional.</p>
          
          <h2>Purpose</h2>
          <p>To design and ship lightweight tools that solve real problems in a changing world.</p>
          
          <h2>Vision</h2>
          <p>A global lab where ideas are tested quickly, shared openly, and scaled when they deliver real value.</p>
          
          <h2>Values</h2>
          <ul>
            <li>Strength</li>
            <li>Simplicity</li>
            <li>Resilience</li>
            <li>Determination</li>
            <li>Discipline</li>
            <li>Experimentation</li>
            <li>Community</li>
            <li>Curiosity</li>
          </ul>
        </Content>
      </Container>
    </Layout>
  )
}