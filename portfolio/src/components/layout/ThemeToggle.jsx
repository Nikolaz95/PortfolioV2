import styled from 'styled-components'
import { AnimatePresence, motion } from 'motion/react'
import { useTranslation } from 'react-i18next'
import { HiOutlineMoon, HiOutlineSun } from 'react-icons/hi'

import { useThemeMode } from '../../context/themeModeContext'
import IconButton from '../ui/IconButton'

// Sun / moon button that switches between light and dark mode
export default function ThemeToggle() {
  const { mode, toggleMode } = useThemeMode()
  const { t } = useTranslation()
  const isDark = mode === 'dark'

  return (
    <IconButton label={isDark ? t('theme.toLight') : t('theme.toDark')} size={42} onClick={toggleMode}>
      {/* The icon spins out and the new one spins in */}
      <AnimatePresence mode="wait" initial={false}>
        <AnimatedIcon
          key={mode}
          initial={{ y: 20, rotate: -90, opacity: 0 }}
          animate={{ y: 0, rotate: 0, opacity: 1 }}
          exit={{ y: -20, rotate: 90, opacity: 0 }}
          transition={{ duration: 0.25 }}
        >
          {isDark ? <HiOutlineSun /> : <HiOutlineMoon />}
        </AnimatedIcon>
      </AnimatePresence>
    </IconButton>
  )
}

const AnimatedIcon = styled(motion.span)`
  position: absolute;
  display: flex;
`
