'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { styled } from '@/stitches.config'
import { Container } from './Container'
import { useSession, signIn, signOut } from 'next-auth/react'
import { useState, useEffect } from 'react'

const PROJECT_NAME = process.env.NEXT_PUBLIC_PROJECT_NAME || 'WheyDev'
const PROJECT_LOGO = process.env.NEXT_PUBLIC_PROJECT_LOGO || '/logo.svg'

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
  height: '56px',
  
  '@md': {
    height: '64px',
  },
})

const Logo = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '$2',
  fontSize: '$lg',
  fontWeight: '$bold',
  letterSpacing: '$tight',
  
  '@md': {
    fontSize: '$xl',
  },
})

const NavLinks = styled('div', {
  display: 'none',
  gap: '$8',
  alignItems: 'center',
  
  '@md': {
    display: 'flex',
  },
})

const MobileMenuButton = styled('button', {
  display: 'flex',
  flexDirection: 'column',
  gap: '4px',
  padding: '$2',
  backgroundColor: 'transparent',
  border: 'none',
  cursor: 'pointer',
  
  '@md': {
    display: 'none',
  },
  
  '& span': {
    width: '20px',
    height: '2px',
    backgroundColor: '$textPrimary',
    transition: 'all 0.3s ease',
  },
  
  variants: {
    open: {
      true: {
        '& span:first-child': {
          transform: 'rotate(45deg) translate(5px, 5px)',
        },
        '& span:nth-child(2)': {
          opacity: 0,
        },
        '& span:last-child': {
          transform: 'rotate(-45deg) translate(5px, -5px)',
        },
      },
    },
  },
})

const MobileMenu = styled('div', {
  position: 'fixed',
  top: '56px',
  left: 0,
  right: 0,
  backgroundColor: 'rgba(10, 10, 10, 0.98)',
  backdropFilter: 'blur(10px)',
  borderBottom: '1px solid $border',
  padding: '$4',
  transform: 'translateY(-100%)',
  opacity: 0,
  transition: 'all 0.3s ease',
  zIndex: 40,
  pointerEvents: 'none',
  
  variants: {
    open: {
      true: {
        transform: 'translateY(0)',
        opacity: 1,
        pointerEvents: 'auto',
      },
    },
  },
})

const MobileNavLink = styled(Link, {
  display: 'block',
  padding: '$3',
  fontSize: '$base',
  color: '$textSecondary',
  transition: '$default',
  borderRadius: '$md',
  
  '&:hover': {
    color: '$textPrimary',
    backgroundColor: '$gray2',
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
  projectName = PROJECT_NAME, 
  showAuth = false,
  navItems = [
    { href: '/blog', label: 'Blog' },
    { href: '/labs', label: 'Labs' },
    { href: '/about', label: 'About' },
  ]
}: HeaderProps) {
  const pathname = usePathname()
  const { data: session } = showAuth ? useSession() : { data: null }
  const [mounted, setMounted] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    setMobileMenuOpen(false)
  }, [pathname])

  return (
    <HeaderWrapper>
      <Container>
        <Nav>
          <Logo>
            <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Image 
                src={PROJECT_LOGO} 
                alt={`${PROJECT_NAME} Logo`} 
                width={120} 
                height={120} 
              />
            </Link>
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
          
          <MobileMenuButton 
            open={mobileMenuOpen}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span />
            <span />
            <span />
          </MobileMenuButton>
        </Nav>
      </Container>
      
      <MobileMenu open={mobileMenuOpen}>
        <Container>
          {navItems.map((item) => (
            <MobileNavLink
              key={item.href}
              href={item.href}
              active={pathname === item.href}
            >
              {item.label}
            </MobileNavLink>
          ))}
          
          {showAuth && mounted && (
            <>
              {session ? (
                <>
                  <MobileNavLink href="/dashboard">Dashboard</MobileNavLink>
                  <AuthButton 
                    onClick={() => signOut()}
                    style={{ width: '100%', marginTop: '8px' }}
                  >
                    Sign out
                  </AuthButton>
                </>
              ) : (
                <AuthButton 
                  onClick={() => signIn('google')}
                  style={{ width: '100%', marginTop: '8px' }}
                >
                  Sign in
                </AuthButton>
              )}
            </>
          )}
        </Container>
      </MobileMenu>
    </HeaderWrapper>
  )
}