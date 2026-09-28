import styled, { keyframes } from 'styled-components'
import { motion } from 'motion/react'

const spin = keyframes`
  to { transform: rotate(360deg); }
`

export const PhotoWrap = styled(motion.div)`
  position: relative;
  justify-self: center;
  width: min(400px, 78vw);
  aspect-ratio: 1;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    width: min(280px, 68vw);
  }
`

// Spinning gradient circle behind the photo
export const Ring = styled.div`
  position: absolute;
  inset: -6px;
  border-radius: 50%;
  background: conic-gradient(
    from 0deg,
    ${({ theme }) => theme.colors.primary},
    ${({ theme }) => theme.colors.secondary},
    ${({ theme }) => theme.colors.primary}
  );
  animation: ${spin} 8s linear infinite;
  filter: drop-shadow(0 0 30px ${({ theme }) => theme.colors.glow1});
`

export const Photo = styled.div`
  position: absolute;
  inset: 0;
  overflow: hidden;
  border: 6px solid ${({ theme }) => theme.colors.bg};
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.photoBg};

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center 12%;
    transform: scale(1.08) translateY(4%);
  }
`

export const FloatingBadge = styled(motion.div)`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 58px;
  height: 58px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 18px;
  background: ${({ theme }) => theme.colors.glass};
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  font-size: 1.8rem;
  box-shadow: 0 10px 30px -10px rgba(15, 23, 42, 0.35);

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 46px;
    height: 46px;
    border-radius: 14px;
    font-size: 1.4rem;
  }
`
