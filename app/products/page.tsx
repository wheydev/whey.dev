'use client'

import { Layout } from '@/components/Layout'
import { Container } from '@/components/Container'
import { PerspionMark } from '@/components/icons/PerspionMark'
import { GradonMark } from '@/components/icons/GradonMark'
import { PlaceholderMark } from '@/components/icons/PlaceholderMark'
import { keyframes, styled } from '@/stitches.config'
import Link from 'next/link'
import posthog from 'posthog-js'
import type { ComponentType, SVGProps } from 'react'

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

const ProjectCardLink = styled(Link, {
  display: 'block',
  padding: '$6',
  border: '1px solid $border',
  borderRadius: '$xl',
  transition: '$default',

  '@md': {
    padding: '$8',
  },

  '&:hover': {
    borderColor: '$green',
  },
})

const ProjectBrand = styled('div', {
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  minHeight: '56px',
  marginBottom: '$5',
  overflow: 'hidden',

  '& svg': {
    height: '32px',
    width: 'auto',
    maxWidth: '100%',
  },

  variants: {
    tone: {
      live: { color: '$green' },
      muted: { color: '$textMuted' },
    },
  },
})

const ping = keyframes({
  '0%': { transform: 'scale(1)', opacity: 0.9 },
  '75%, 100%': { transform: 'scale(2.6)', opacity: 0 },
})

const breathe = keyframes({
  '0%, 100%': { opacity: 0.35 },
  '50%': { opacity: 1 },
})

const LiveDot = styled('span', {
  position: 'relative',
  display: 'inline-block',
  width: '8px',
  height: '8px',
  marginRight: '$2',

  '&::before': {
    content: '""',
    position: 'absolute',
    inset: 0,
    borderRadius: '$full',
    backgroundColor: '$green',
    animation: `${ping} 1.8s cubic-bezier(0, 0, 0.2, 1) infinite`,
  },

  '&::after': {
    content: '""',
    position: 'absolute',
    inset: '1px',
    borderRadius: '$full',
    backgroundColor: '$green',
  },

  '@media (prefers-reduced-motion: reduce)': {
    '&::before': {
      animation: 'none',
      opacity: 0.35,
    },
  },
})

const DevDot = styled('span', {
  display: 'inline-block',
  width: '8px',
  height: '8px',
  marginRight: '$2',
  borderRadius: '$full',
  backgroundColor: '#F59E0B',
  animation: `${breathe} 2.2s ease-in-out infinite`,

  '@media (prefers-reduced-motion: reduce)': {
    animation: 'none',
    opacity: 0.8,
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
  display: 'inline-flex',
  alignItems: 'center',
  padding: '$1 $3',
  borderRadius: '$full',
  fontSize: '$xs',
  fontWeight: '$medium',
  textTransform: 'uppercase',
  letterSpacing: '$wide',
  border: '1px solid transparent',

  variants: {
    status: {
      live: {
        backgroundColor: 'rgba(29, 216, 130, 0.1)',
        borderColor: 'rgba(29, 216, 130, 0.28)',
        color: '$green',
      },
      beta: {
        backgroundColor: 'rgba(245, 158, 11, 0.1)',
        borderColor: 'rgba(245, 158, 11, 0.3)',
        color: '#F59E0B',
      },
      development: {
        backgroundColor: 'rgba(245, 158, 11, 0.08)',
        borderColor: 'rgba(245, 158, 11, 0.24)',
        color: '#F59E0B',
      },
    },
  },
})

type ProductIcon = ComponentType<SVGProps<SVGSVGElement>>

const products: Array<{
  name: string
  description: string
  status: 'live' | 'beta' | 'development'
  icon: ProductIcon
  href: string
  blurred: boolean
}> = [
  {
    name: 'Perspion',
    description: 'Understand what your YouTube audience actually wants. Analyze comments with AI to surface content requests, recurring questions, and sentiment trends.',
    status: 'live',
    icon: PerspionMark,
    href: 'https://perspion.whey.dev',
    blurred: false,
  },
  {
    name: 'Gradon',
    description: 'Track your career progress manually. Log PRs, courses, achievements, and generate AI summaries for performance reviews.',
    status: 'live',
    icon: GradonMark,
    href: 'https://gradon.whey.dev',
    blurred: false,
  },
  {
    name: 'Coming Soon',
    description: 'Nice try, inspector. You found the hidden text, but the secret stays sealed. No spoilers here. Come back later, curious one. Shipping faster than you think.',
    status: 'development',
    icon: PlaceholderMark,
    href: '#',
    blurred: true,
  },
]

export default function ProductsPage() {
  return (
    <Layout>
      <Container>
        <PageHeader>
          <PageTitle>Products</PageTitle>
          <PageDescription>
            Software built at the intersection of AI, productivity, and software.
          </PageDescription>
        </PageHeader>

        <ProjectsGrid>
          {products.map((product) => {
            const Brand = product.icon
            const tone = product.blurred ? 'muted' : 'live'

            return product.href !== '#' ? (
              <ProjectCardLink
                key={product.name}
                href={product.href}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => posthog.capture('product_card_clicked', {
                  product_name: product.name.toLowerCase(),
                  status: product.status,
                  href: product.href
                })}
              >
                <div>
                  <ProjectBrand tone={tone}>
                    <Brand />
                  </ProjectBrand>
                  <ProjectDescription>{product.description}</ProjectDescription>
                  <ProjectStatus status={product.status}>
                    {product.status === 'live' ? <><LiveDot />Live</> : 'Beta'}
                  </ProjectStatus>
                </div>
              </ProjectCardLink>
            ) : (
              <ProjectCard
                key={product.name}
                onClick={() => posthog.capture('product_card_clicked', {
                  product_name: product.name.toLowerCase(),
                  status: product.status,
                  href: product.href
                })}
              >
                <div>
                  <ProjectBrand tone={tone}>
                    <Brand />
                  </ProjectBrand>
                  <ProjectDescription blurred={product.blurred}>{product.description}</ProjectDescription>
                  <ProjectStatus status={product.status}>
                    <DevDot />
                    Development
                  </ProjectStatus>
                </div>
              </ProjectCard>
            )
          })}
        </ProjectsGrid>
      </Container>
    </Layout>
  )
}
