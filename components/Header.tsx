'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { styled } from '@/stitches.config'
import { Container } from './Container'
import { useSession, signIn, signOut } from 'next-auth/react'
import { useState, useEffect } from 'react'

const HeaderWrapper = styled('header', {
  position: 'sticky',
  top: 0,
  zIndex: 50,
  backgroundColor: 'rgba(10, 10, 10, 0.8)',
  backdropFilter: 'blur(10px)',
  borderBottom: '1px solid $border',
})

const Nav = styled('nav', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  height: '64px',
})

const Logo = styled('div', {
  fontSize: '$xl',
  fontWeight: '$bold',
  letterSpacing: '$tight',
})

const NavLinks = styled('div', {
  display: 'flex',
  gap: '$8',
  alignItems: 'center',
})

const NavLink = styled(Link, {
  fontSize: '$sm',
  color: '$textSecondary',
  transition: '$default',
  
  '&:hover': {
    color: '$textPrimary',
  },
  
  variants: {
    active: {
      true: {
        color: '$textPrimary',
        fontWeight: '$medium',
      },
    },
  },
})

const AuthButton = styled('button', {
  fontSize: '$sm',
  padding: '$2 $4',
  borderRadius: '$md',
  border: '1px solid $border',
  backgroundColor: 'transparent',
  color: '$textPrimary',
  cursor: 'pointer',
  transition: '$default',
  
  '&:hover': {
    backgroundColor: '$gray2',
  },
})

interface HeaderProps {
  projectName?: string
  showAuth?: boolean
  navItems?: Array<{ href: string; label: string }>
}

export function Header({ 
  projectName = 'WheyDev', 
  showAuth = false,
  navItems = [
    { href: '/', label: 'Home' },
    { href: '/blog', label: 'Blog' },
    { href: '/labs', label: 'Labs' },
    { href: '/about', label: 'About' },
  ]
}: HeaderProps) {
  const pathname = usePathname()
  const { data: session } = showAuth ? useSession() : { data: null }
  const [mounted, setMounted] = useState(false)
  
  useEffect(() => {
    setMounted(true)
  }, [])
  
  return (
    <HeaderWrapper>
      <Container>
        <Nav>
          <Logo>
            <Link href="/">{projectName}</Link>
          </Logo>
          
          <NavLinks>
            {navItems.map((item) => (
              <NavLink
                key={item.href}
                href={item.href}
                active={pathname === item.href}
              >
                {item.label}
              </NavLink>
            ))}
            
            {showAuth && mounted && (
              <>
                {session ? (
                  <>
                    <NavLink href="/dashboard">Dashboard</NavLink>
                    <AuthButton onClick={() => signOut()}>
                      Sign out
                    </AuthButton>
                  </>
                ) : (
                  <AuthButton onClick={() => signIn('google')}>
                    Sign in
                  </AuthButton>
                )}
              </>
            )}
          </NavLinks>
        </Nav>
      </Container>
    </HeaderWrapper>
  )
}