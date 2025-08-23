'use client'

import { Layout } from '@/components/Layout'
import { Container } from '@/components/Container'
import { styled } from '@/stitches.config'
import Link from 'next/link'

const PageHeader = styled('div', {
  paddingTop: '$12',
  paddingBottom: '$12',
  borderBottom: '1px solid $border',
})

const PageTitle = styled('h1', {
  fontSize: '$5xl',
  fontWeight: '$bold',
  marginBottom: '$4',
})

const PageDescription = styled('p', {
  fontSize: '$lg',
  color: '$textSecondary',
  lineHeight: '$relaxed',
})

const ProjectsGrid = styled('div', {
  display: 'grid',
  gridTemplateColumns: '1fr',
  gap: '$8',
  paddingTop: '$12',
  
  '@md': {
    gridTemplateColumns: 'repeat(2, 1fr)',
  },
})

const ProjectCard = styled('a', {
  display: 'block',
  padding: '$8',
  border: '1px solid $border',
  borderRadius: '$xl',
  transition: '$default',
  cursor: 'pointer',
  
  '&:hover': {
    transform: 'translateY(-2px)',
    boxShadow: '$lg',
    borderColor: '$textSecondary',
  },
})

const ProjectIcon = styled('div', {
  width: '48px',
  height: '48px',
  backgroundColor: '$gray2',
  borderRadius: '$lg',
  marginBottom: '$4',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '$2xl',
})

const ProjectName = styled('h3', {
  fontSize: '$2xl',
  fontWeight: '$semibold',
  marginBottom: '$2',
})

const ProjectDescription = styled('p', {
  fontSize: '$base',
  color: '$textSecondary',
  lineHeight: '$relaxed',
  marginBottom: '$4',
})

const ProjectStatus = styled('span', {
  display: 'inline-block',
  padding: '$1 $3',
  backgroundColor: '$gray2',
  borderRadius: '$full',
  fontSize: '$xs',
  fontWeight: '$medium',
  textTransform: 'uppercase',
  letterSpacing: '$wide',
  
  variants: {
    status: {
      live: {
        backgroundColor: '#10B981',
        color: '$white',
      },
      beta: {
        backgroundColor: '#F59E0B',
        color: '$white',
      },
      development: {
        backgroundColor: '$gray5',
        color: '$white',
      },
    },
  },
})

const labs = [
  {
    name: 'Rayte',
    description: 'Evaluate your YouTube thumbnails and titles with AI. Get instant feedback to improve your content performance.',
    status: 'development' as const,
    icon: '📊',
    href: 'https://rayte.wheydev.com',
  },
  {
    name: 'Talk',
    description: 'Practice English conversations with AI. Improve your speaking skills through natural dialogue.',
    status: 'development' as const,
    icon: '💬',
    href: 'https://talk.wheydev.com',
  },
  {
    name: 'Photo',
    description: 'Transform your photos with AI. Create stunning variations from a single image.',
    status: 'development' as const,
    icon: '📸',
    href: 'https://photo.wheydev.com',
  },
]

export default function LabsPage() {
  return (
    <Layout>
      <Container>
        <PageHeader>
          <PageTitle>Labs</PageTitle>
          <PageDescription>
            Experiments at the intersection of AI, software, and productivity. 
            Some remain prototypes, others grow into standalone products.
          </PageDescription>
        </PageHeader>
        
        <ProjectsGrid>
          {labs.map((lab) => (
            <ProjectCard 
              key={lab.name}
              href={lab.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <ProjectIcon>{lab.icon}</ProjectIcon>
              <ProjectName>{lab.name}</ProjectName>
              <ProjectDescription>{lab.description}</ProjectDescription>
              <ProjectStatus status={lab.status}>
                {lab.status}
              </ProjectStatus>
            </ProjectCard>
          ))}
        </ProjectsGrid>
      </Container>
    </Layout>
  )
}