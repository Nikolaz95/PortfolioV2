import styled from 'styled-components'
import { motion } from 'motion/react'

import IconButton from './IconButton'

// The dark, blurred layer behind the window. Clicking it closes the modal.
export const Backdrop = styled(motion.div)`
  position: fixed;
  inset: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
  background: ${({ theme }) => theme.colors.overlay};
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);

  /* On phones the modal slides up from the bottom like a sheet */
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    align-items: flex-end;
    padding: 12px 0 0;
  }
`

export const Window = styled(motion.div)`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: ${({ $maxWidth }) => $maxWidth}px;
  max-height: min(88vh, 760px);
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.lg};
  background: ${({ theme }) => theme.colors.bgAlt};
  box-shadow: 0 40px 80px -24px rgba(0, 0, 0, 0.5);

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    max-height: 92vh;
    border-radius: ${({ theme }) => theme.radius.lg} ${({ theme }) => theme.radius.lg} 0 0;
  }
`

// Scrolls when the content is taller than the window
export const Body = styled.div`
  flex: 1;
  min-height: 0;
  overflow-y: auto;
`

export const CloseButton = styled(IconButton)`
  position: absolute;
  top: 14px;
  right: 14px;
  z-index: 2;
  background: ${({ theme }) => theme.colors.glass};

  @media (hover: hover) {
    &:hover {
      transform: rotate(90deg);
    }
  }
`
