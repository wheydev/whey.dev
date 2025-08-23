'use client'

import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { Layout } from '@/components/Layout'
import { Container } from '@/components/Container'
import { styled } from '@/stitches.config'

const DashboardGrid = styled('div', {
  display: 'grid',
  gridTemplateColumns: '1fr',
  gap: '$6',
  paddingTop: '$8',
  
  '@md': {
    gridTemplateColumns: '250px 1fr',
  },
})

const Sidebar = styled('aside', {
  backgroundColor: '$gray1',
  borderRadius: '$lg',
  padding: '$6',
  height: 'fit-content',
})

const SidebarNav = styled('nav', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$2',
})

const SidebarLink = styled('button', {
  padding: '$3 $4',
  backgroundColor: 'transparent',
  border: 'none',
  borderRadius: '$md',
  textAlign: 'left',
  fontSize: '$sm',
  color: '$textSecondary',
  cursor: 'pointer',
  transition: '$default',
  
  '&:hover': {
    backgroundColor: '$gray2',
    color: '$textPrimary',
  },
  
  variants: {
    active: {
      true: {
        backgroundColor: '$accent',
        color: '$background',
        
        '&:hover': {
          backgroundColor: '$accentHover',
          color: '$background',
        },
      },
    },
  },
})

const MainContent = styled('main', {
  minHeight: '400px',
})

const DashboardHeader = styled('div', {
  marginBottom: '$8',
})

const DashboardTitle = styled('h1', {
  fontSize: '$3xl',
  fontWeight: '$semibold',
  marginBottom: '$2',
})

const WelcomeMessage = styled('p', {
  fontSize: '$lg',
  color: '$textSecondary',
})

const StatsGrid = styled('div', {
  display: 'grid',
  gridTemplateColumns: '1fr',
  gap: '$4',
  marginTop: '$8',
  
  '@sm': {
    gridTemplateColumns: 'repeat(2, 1fr)',
  },
  
  '@lg': {
    gridTemplateColumns: 'repeat(3, 1fr)',
  },
})

const StatCard = styled('div', {
  padding: '$6',
  backgroundColor: '$gray1',
  borderRadius: '$lg',
  
  '& h3': {
    fontSize: '$sm',
    color: '$textMuted',
    marginBottom: '$2',
    textTransform: 'uppercase',
    letterSpacing: '$wide',
  },
  
  '& p': {
    fontSize: '$3xl',
    fontWeight: '$semibold',
  },
})

export default function DashboardPage() {
  const { data: session, status } = useSession()
  const router = useRouter()
  
  useEffect(() => {
    if (status === 'loading') return
    if (!session) {
      router.push('/')
    }
  }, [session, status, router])
  
  if (status === 'loading') {
    return (
      <Layout showAuth={true}>
        <Container>
          <p>Loading...</p>
        </Container>
      </Layout>
    )
  }
  
  if (!session) {
    return null
  }
  
  return (
    <Layout showAuth={true}>
      <Container>
        <DashboardGrid>
          <Sidebar>
            <SidebarNav>
              <SidebarLink active={true}>Overview</SidebarLink>
              <SidebarLink>Analytics</SidebarLink>
              <SidebarLink>Settings</SidebarLink>
              <SidebarLink>Billing</SidebarLink>
            </SidebarNav>
          </Sidebar>
          
          <MainContent>
            <DashboardHeader>
              <DashboardTitle>Dashboard</DashboardTitle>
              <WelcomeMessage>
                Welcome back, {session.user?.name || 'User'}!
              </WelcomeMessage>
            </DashboardHeader>
            
            <StatsGrid>
              <StatCard>
                <h3>Total Views</h3>
                <p>12,345</p>
              </StatCard>
              <StatCard>
                <h3>Active Projects</h3>
                <p>3</p>
              </StatCard>
              <StatCard>
                <h3>API Calls</h3>
                <p>98,765</p>
              </StatCard>
            </StatsGrid>
          </MainContent>
        </DashboardGrid>
      </Container>
    </Layout>
  )
}