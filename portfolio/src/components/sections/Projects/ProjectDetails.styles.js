import styled from 'styled-components'
import { motion } from 'motion/react'

const md = ({ theme }) => theme.breakpoints.md

export const Layout = styled.div`
  display: grid;
  grid-template-columns: 1.25fr 1fr;
  min-height: 100%;

  @media (max-width: ${md}) {
    grid-template-columns: 1fr;
  }
`

// Shows the whole screenshot (never cropped) on a soft brand-colored background
export const Media = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 32px;
  background:
    radial-gradient(circle at 20% 20%, ${({ theme }) => theme.colors.glow1}, transparent 60%),
    radial-gradient(circle at 80% 80%, ${({ theme }) => theme.colors.glow2}, transparent 60%),
    ${({ theme }) => theme.colors.bg};

  img {
    max-width: 100%;
    max-height: calc(min(88vh, 760px) - 64px);
    object-fit: contain;
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: ${({ theme }) => theme.radius.md};
    box-shadow: 0 20px 40px -20px rgba(15, 23, 42, 0.45);
  }

  @media (max-width: ${md}) {
    padding: 56px 16px 16px;

    img {
      max-height: 42vh;
    }
  }
`

export const Info = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 22px;
  padding: 36px 32px 32px;

  @media (max-width: ${md}) {
    padding: 24px 20px 28px;
  }
`

export const Title = styled(motion.h3)`
  margin-top: -10px;
  font-size: clamp(1.6rem, 3vw, 2.1rem);
`

export const Label = styled.h4`
  margin-bottom: 10px;
  color: ${({ theme }) => theme.colors.muted};
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 0.78rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
`

export const Features = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
  list-style: none;

  li {
    display: flex;
    align-items: flex-start;
    gap: 10px;
    font-size: 0.95rem;
  }

  svg {
    flex-shrink: 0;
    margin-top: 3px;
    color: ${({ theme }) => theme.colors.success};
  }
`

export const TechList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  list-style: none;
`

export const Links = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: auto;
  padding-top: 4px;
`
