import styled from 'styled-components'
import { AnimatePresence, motion, useScroll } from 'motion/react'
import { useTranslation } from 'react-i18next'
import { HiArrowUp } from 'react-icons/hi'

import useScrolled from '../../hooks/useScrolled'
import IconButton from '../ui/IconButton'

const SHOW_AFTER_PX = 400

// Round "back to top" button in the bottom-right corner.
// It appears once you scroll down, and the ring around it fills up as you scroll.
export default function ScrollToTop() {
  const { t } = useTranslation()
  const visible = useScrolled(SHOW_AFTER_PX)
  const { scrollYProgress } = useScroll()

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <AnimatePresence>
      {visible && (
        <Wrapper
          initial={{ opacity: 0, scale: 0.6, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.6, y: 20 }}
          transition={{ type: 'spring', stiffness: 300, damping: 22 }}
        >
          {/* Progress ring */}
          <Ring viewBox="0 0 60 60" aria-hidden="true">
            <circle cx="30" cy="30" r="27" className="track" />
            <motion.circle cx="30" cy="30" r="27" className="progress" style={{ pathLength: scrollYProgress }} />
          </Ring>

          <IconButton icon={HiArrowUp} label={t('footer.backToTop')} shape="circle" size={48} onClick={scrollToTop} />
        </Wrapper>
      )}
    </AnimatePresence>
  )
}

const Wrapper = styled(motion.div)`
  position: fixed;
  right: 24px;
  bottom: 24px;
  z-index: 40;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    right: 16px;
    bottom: 16px;
  }
`

const Ring = styled.svg`
  position: absolute;
  inset: 0;
  transform: rotate(-90deg); /* start filling from the top */
  pointer-events: none;

  circle {
    fill: none;
    stroke-width: 3;
  }

  .track {
    stroke: ${({ theme }) => theme.colors.border};
  }

  .progress {
    stroke: ${({ theme }) => theme.colors.primary};
    stroke-linecap: round;
  }
`
