'use client'

import { Layout } from '@/components/Layout'
import { Container } from '@/components/Container'
import { styled } from '@/stitches.config'
import Link from 'next/link'

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
  color: '$textPrimary',
  
  '@md': {
    fontSize: '$5xl',
    marginBottom: '$4',
  },
})

const PageDescription = styled('p', {
  fontSize: '$base',
  color: '$textSecondary',
  lineHeight: '$relaxed',
  
  '@md': {
    fontSize: '$lg',
  },
})

const ProjectsGrid = styled('div', {
  display: 'grid',
  gridTemplateColumns: '1fr',
  gap: '$6',
  paddingTop: '$8',
  
  '@md': {
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '$8',
    paddingTop: '$12',
  },
})

const ProjectCard = styled('div', {
  display: 'block',
  padding: '$6',
  border: '1px solid $border',
  borderRadius: '$xl',
  transition: '$default',
  cursor: 'not-allowed',
  position: 'relative',
  overflow: 'hidden',
  
  '@md': {
    padding: '$8',
  },
  
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'rgba(10, 10, 10, 0.7)',
    backdropFilter: 'blur(8px)',
    zIndex: 1,
    transition: 'opacity 0.3s ease',
  },
})

const ProjectContent = styled('div', {
  position: 'relative',
  zIndex: 2,
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
  fontSize: '$xl',
  fontWeight: '$semibold',
  marginBottom: '$2',
  
  '@md': {
    fontSize: '$2xl',
  },
})

const ProjectDescription = styled('p', {
  fontSize: '$sm',
  color: '$textSecondary',
  lineHeight: '$relaxed',
  marginBottom: '$4',
  
  '@md': {
    fontSize: '$base',
  },
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
            Experiments at the intersection of AI, productivity, and software.
          </PageDescription>
        </PageHeader>
        
        <ProjectsGrid>
          {labs.map((lab) => (
            <ProjectCard 
              key={lab.name}
            >
              <ProjectContent>
                <ProjectIcon>{lab.icon}</ProjectIcon>
                <ProjectName>{lab.name}</ProjectName>
                <ProjectDescription>{lab.description}</ProjectDescription>
                <ProjectStatus status={lab.status}>
                  {lab.status}
                </ProjectStatus>
              </ProjectContent>
            </ProjectCard>
          ))}
        </ProjectsGrid>
      </Container>
    </Layout>
  )
}