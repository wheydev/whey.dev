'use client'

import { Layout } from '@/components/Layout'
import { Container } from '@/components/Container'
import { styled } from '@/stitches.config'
import posthog from 'posthog-js'

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

  '@md': {
    padding: '$8',
  },
})

const ProjectIcon = styled('div', {
  width: '48px',
  height: '48px',
  minWidth: '48px',
  minHeight: '48px',
  backgroundColor: '$gray2',
  borderRadius: '$lg',
  marginBottom: '$4',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '24px',
  lineHeight: 1,
})

const ProjectName = styled('h3', {
  fontSize: '$xl',
  fontWeight: '$semibold',
  marginBottom: '$2',

  '@md': {
    fontSize: '$2xl',
  },

  variants: {
    blurred: {
      true: {
        filter: 'blur(6px)',
        userSelect: 'none',
        pointerEvents: 'none',
      },
    },
  },
})

const ProjectDescription = styled('p', {
  fontSize: '$sm',
  color: '$textSecondary',
  lineHeight: '$relaxed',
  marginBottom: '$4',
  display: '-webkit-box',
  '-webkit-line-clamp': '3',
  '-webkit-box-orient': 'vertical',
  overflow: 'hidden',
  minHeight: 'calc(3 * 1.625em)',

  '@md': {
    fontSize: '$base',
  },

  variants: {
    blurred: {
      true: {
        filter: 'blur(6px)',
        userSelect: 'none',
        pointerEvents: 'none',
      },
    },
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
    name: 'Gradon',
    description: 'Track your career progress manually. Log PRs, courses, achievements, and generate AI summaries for performance reviews.',
    status: 'development' as const,
    icon: '📈',
    href: 'https://gradon.wheydev.com',
    blurred: false,
  },
  {
    name: 'Coming Soon',
    description: 'Nice try, inspector. You found the hidden text, but the secret stays sealed. No spoilers here. Come back later, curious one. Shipping faster than you think.',
    status: 'development' as const,
    icon: '🔒',
    href: '#',
    blurred: true,
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
              onClick={() => posthog.capture('lab_card_clicked', {
                lab_name: lab.name.toLowerCase(),
                status: lab.status,
                href: lab.href
              })}
            >
              <div>
                <ProjectIcon>{lab.icon}</ProjectIcon>
                <ProjectName blurred={lab.blurred}>{lab.name}</ProjectName>
                <ProjectDescription blurred={lab.blurred}>{lab.description}</ProjectDescription>
                <ProjectStatus status={lab.status}>
                  {lab.status}
                </ProjectStatus>
              </div>
            </ProjectCard>
          ))}
        </ProjectsGrid>
      </Container>
    </Layout>
  )
}
