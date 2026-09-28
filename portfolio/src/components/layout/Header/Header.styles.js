import styled from 'styled-components'
import { motion } from 'motion/react'

import IconButton from '../../ui/IconButton'
import { Container } from '../../ui/Layout'

// $solid: glass background once the page is scrolled (or the menu is open)
export const Bar = styled(motion.header)`
  position: fixed;
  inset: 0 0 auto 0;
  z-index: 50;
  height: ${({ theme }) => theme.headerHeight};
  display: flex;
  align-items: center;
  border-bottom: 1px solid ${({ $solid, theme }) => ($solid ? theme.colors.border : 'transparent')};
  background: ${({ $solid, theme }) => ($solid ? theme.colors.headerBg : 'transparent')};
  backdrop-filter: ${({ $solid }) => ($solid ? 'blur(14px)' : 'none')};
  -webkit-backdrop-filter: ${({ $solid }) => ($solid ? 'blur(14px)' : 'none')};
  transition:
    background 0.3s ease,
    border-color 0.3s ease;
`

export const Inner = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
`

export const Logo = styled.a`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 1.5rem;
  font-weight: 700;
  letter-spacing: -0.03em;
`

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 4px;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: none;
  }
`

export const NavLink = styled.a`
  position: relative;
  padding: 8px 14px;
  font-size: 0.92rem;
  font-weight: 500;
  color: ${({ $active, theme }) => ($active ? theme.colors.text : theme.colors.muted)};
  transition: color 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.text};
  }
`

// Small gradient line under the active link. It slides between links (layoutId).
export const ActiveDot = styled(motion.span)`
  position: absolute;
  left: 50%;
  bottom: 0;
  width: 18px;
  height: 3px;
  margin-left: -9px;
  border-radius: 3px;
  background: ${({ theme }) => theme.gradient};
`

export const Right = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  @media (max-width: 380px) {
    gap: 6px;
  }
`

// Hamburger button – only visible on small screens
export const MenuButton = styled(IconButton)`
  display: none;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: inline-flex;
  }
`

export const MobileMenu = styled(motion.nav)`
  position: fixed;
  top: ${({ theme }) => theme.headerHeight};
  left: 12px;
  right: 12px;
  display: flex;
  flex-direction: column;
  padding: 12px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.lg};
  background: ${({ theme }) => theme.colors.glass};
  box-shadow: 0 24px 48px -20px rgba(15, 23, 42, 0.35);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);

  a {
    padding: 14px 16px;
    border-radius: 12px;
    font-size: 1.05rem;
    font-weight: 500;
  }

  a[aria-current='true'] {
    background: ${({ theme }) => theme.colors.surfaceHover};
  }
`

export const Progress = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 60;
  height: 3px;
  transform-origin: 0%;
  background: ${({ theme }) => theme.gradient};
`
