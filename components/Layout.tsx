'use client'

import { styled } from '@/stitches.config'
import { Header } from './Header'
import { Footer } from './Footer'
import { globalStyles } from '@/stitches.config'

const LayoutWrapper = styled('div', {
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
})

const Main = styled('main', {
  flex: 1,
  paddingTop: '$8',
  paddingBottom: '$16',
})

interface LayoutProps {
  children: React.ReactNode
  projectName?: string
  showAuth?: boolean
  navItems?: Array<{ href: string; label: string }>
  footerLinks?: Array<{ href: string; label: string }>
}

export function Layout({ 
  children, 
  projectName,
  showAuth,
  navItems,
  footerLinks
}: LayoutProps) {
  globalStyles()
  
  return (
    <LayoutWrapper>
      <Header 
        projectName={projectName} 
        showAuth={showAuth}
        navItems={navItems}
      />
      <Main>{children}</Main>
      <Footer 
        projectName={projectName}
        links={footerLinks}
      />
    </LayoutWrapper>
  )
}