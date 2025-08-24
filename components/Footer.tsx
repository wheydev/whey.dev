'use client'

import { styled } from '@/stitches.config'
import { Container } from './Container'

const FooterWrapper = styled('footer', {
  marginTop: 'auto',
  borderTop: '1px solid $border',
  paddingTop: '$12',
  paddingBottom: '$12',
})

const FooterContent = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$4',

  '@md': {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
})

const Copyright = styled('div', {
  fontSize: '$sm',
  color: '$textMuted',
  lineHeight: '$relaxed',
})

const FooterLinks = styled('div', {
  display: 'flex',
  gap: '$6',
})

const FooterLink = styled('a', {
  fontSize: '$sm',
  color: '$textMuted',
  transition: '$default',

  '&:hover': {
    color: '$textPrimary',
  },
})

interface FooterProps {
  projectName?: string
  links?: Array<{ href: string; label: string }>
}

export function Footer({ 
  projectName = 'WheyDev',
  links = [
    { href: 'https://x.com/wheydev', label: 'X' },
    { href: 'https://instagram.com/wheydev', label: 'Instagram' },
    { href: 'https://youtube.com/@wheydev', label: 'YouTube' },
    { href: 'https://github.com/wheydev', label: 'GitHub' },
    { href: 'mailto:wheydevco@gmail.com', label: 'Email' },
  ]
}: FooterProps) {
  const currentYear = new Date().getFullYear()

  return (
    <FooterWrapper>
      <Container>
        <FooterContent>
          <Copyright>
            Copyright &copy; {currentYear} | All rights reserved<br />
            Built independently<br />
            Created by <a href="https://ederchristian.com" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'underline' }}>Eder Christian</a>
          </Copyright>

          <FooterLinks>
            {links.map((link) => (
              <FooterLink
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.label}
              </FooterLink>
            ))}
          </FooterLinks>
        </FooterContent>
      </Container>
    </FooterWrapper>
  )
}