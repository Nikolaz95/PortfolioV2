import { useCallback, useRef, useState } from 'react'
import { AnimatePresence, useScroll, useSpring } from 'motion/react'
import { useTranslation } from 'react-i18next'
import { HiMenuAlt3, HiX } from 'react-icons/hi'

import SECTIONS from '../../../data/sections'
import useActiveSection from '../../../hooks/useActiveSection'
import useClickOutside from '../../../hooks/useClickOutside'
import useEscapeKey from '../../../hooks/useEscapeKey'
import useScrolled from '../../../hooks/useScrolled'
import { GradientText } from '../../ui/Layout'
import LanguageSwitcher from '../LanguageSwitcher'
import ThemeToggle from '../ThemeToggle'
import { ActiveDot, Bar, Inner, Logo, MenuButton, MobileMenu, Nav, NavLink, Progress, Right } from './Header.styles'

export default function Header() {
  const { t } = useTranslation()
  const active = useActiveSection(SECTIONS)
  const scrolled = useScrolled()

  // Mobile menu: closes on a link click, the Escape key, or a click outside the header
  const [menuOpen, setMenuOpen] = useState(false)
  const closeMenu = useCallback(() => setMenuOpen(false), [])
  const headerRef = useRef(null)
  useClickOutside(headerRef, closeMenu, menuOpen)
  useEscapeKey(closeMenu, menuOpen)

  // Gradient line at the top that fills up as you scroll
  const { scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 25 })

  return (
    <>
      <Progress style={{ scaleX: progress }} />

      <Bar
        ref={headerRef}
        $solid={scrolled || menuOpen}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <Inner>
          <Logo href="#home" aria-label="Nikola Zovko">
            <GradientText>NZ</GradientText>.
          </Logo>

          <Nav>
            {SECTIONS.map((id) => (
              <NavLink key={id} href={`#${id}`} $active={active === id} aria-current={active === id}>
                {t(`nav.${id}`)}
                {active === id && <ActiveDot layoutId="nav-dot" />}
              </NavLink>
            ))}
          </Nav>

          <Right>
            <LanguageSwitcher id="header" />
            <ThemeToggle />
            <MenuButton
              icon={menuOpen ? HiX : HiMenuAlt3}
              label={menuOpen ? t('nav.closeMenu') : t('nav.openMenu')}
              size={42}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((open) => !open)}
            />
          </Right>
        </Inner>

        <AnimatePresence>
          {menuOpen && (
            <MobileMenu
              initial={{ opacity: 0, y: -16, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -16, scale: 0.98 }}
              transition={{ duration: 0.2 }}
            >
              {SECTIONS.map((id) => (
                <a key={id} href={`#${id}`} aria-current={active === id} onClick={closeMenu}>
                  {t(`nav.${id}`)}
                </a>
              ))}
            </MobileMenu>
          )}
        </AnimatePresence>
      </Bar>
    </>
  )
}
