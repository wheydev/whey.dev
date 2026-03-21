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
            WheyDev is a one-person software studio founded by <a
              href="https://ederchristian.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#1DD882', textDecoration: 'underline' }}
              onClick={() => posthog.capture('about_link_clicked', {
                link: 'eder_christian',
                href: 'https://ederchristian.com',
                location: 'about_page'
              })}
            >
              Eder Christian
            </a>. The name comes from a simple idea: whey protein gives you strength at the gym, WheyDev gives you strength as a builder. It started with developers in mind, but the mission grew. Now it's for anyone who makes things.
          </p>

          <p>
            We build focused products at the intersection of AI, productivity, and software, designed to be simple, fast, and useful from day one. Everything is built in public.
          </p>

          <h2>Mission</h2>
          <p>To build strong, focused products that make modern work faster and more intentional.</p>

          <h2>Values</h2>
          <ul>
            <li>Strength</li>
            <li>Simplicity</li>
            <li>Execution</li>
            <li>Curiosity</li>
            <li>Resilience</li>
            <li>Discipline</li>
            <li>Community</li>
          </ul>
        </Content>
      </Container>
    </Layout>
  )
}
