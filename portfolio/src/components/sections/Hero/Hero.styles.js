import styled, { keyframes } from 'styled-components'
import { motion } from 'motion/react'

import { Container } from '../../ui/Layout'
import SocialLinks from '../../ui/SocialLinks'

const md = ({ theme }) => theme.breakpoints.md

export const Wrapper = styled.section`
  position: relative;
  min-height: 100svh;
  display: flex;
  align-items: center;
  padding: calc(${({ theme }) => theme.headerHeight} + 40px) 0 80px;

  @media (max-width: ${md}) {
    padding-top: calc(${({ theme }) => theme.headerHeight} + 24px);
  }
`

export const Grid = styled(Container)`
  display: grid;
  grid-template-columns: 1.15fr 0.85fr;
  align-items: center;
  gap: 48px;

  @media (max-width: ${md}) {
    grid-template-columns: 1fr;
    gap: 40px;
    text-align: center;
  }
`

export const Text = styled(motion.div)`
  @media (max-width: ${md}) {
    order: 2;
  }
`

const pulse = keyframes`
  0% { box-shadow: 0 0 0 0 rgba(52, 211, 153, 0.6); }
  100% { box-shadow: 0 0 0 10px rgba(52, 211, 153, 0); }
`

// "Open to new opportunities" pill with a pulsing green dot
export const Badge = styled(motion.span)`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 8px 16px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.full};
  background: ${({ theme }) => theme.colors.surface};
  color: ${({ theme }) => theme.colors.muted};
  font-size: 0.85rem;

  &::before {
    content: '';
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: ${({ theme }) => theme.colors.success};
    animation: ${pulse} 1.8s infinite;
  }
`

export const Greeting = styled(motion.p)`
  margin-top: 28px;
  font-size: 1.15rem;
  color: ${({ theme }) => theme.colors.muted};
`

export const Name = styled(motion.h1)`
  margin-top: 6px;
  font-size: clamp(2.8rem, 8vw, 5rem);
  font-weight: 700;
`

export const Role = styled(motion.p)`
  min-height: 1.6em;
  margin-top: 12px;
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: clamp(1.3rem, 3.5vw, 1.9rem);
  font-weight: 600;
`

export const Intro = styled(motion.p)`
  max-width: 520px;
  margin-top: 20px;
  color: ${({ theme }) => theme.colors.muted};
  font-size: 1.05rem;

  @media (max-width: ${md}) {
    margin-left: auto;
    margin-right: auto;
  }
`

export const Actions = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  margin-top: 36px;

  @media (max-width: ${md}) {
    justify-content: center;
  }
`

export const HeroSocials = styled(SocialLinks)`
  margin-top: 32px;

  @media (max-width: ${md}) {
    justify-content: center;
  }
`

// Bouncing arrow at the bottom of the screen
export const ScrollHint = styled(motion.a)`
  position: absolute;
  bottom: 24px;
  left: 50%;
  translate: -50% 0;
  display: flex;
  color: ${({ theme }) => theme.colors.muted};

  @media (max-height: 700px) {
    display: none;
  }
`
