import styled from 'styled-components'
import { motion } from 'motion/react'

import { cardStyles } from '../../ui/Card'

export const Grid = styled(motion.ul)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));
  gap: 16px;
  list-style: none;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
    gap: 12px;
  }
`

// --skill-color is set per card (the brand color of the logo)
export const SkillCard = styled(motion.li)`
  ${cardStyles}
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14px;
  padding: 26px 12px 20px;
  overflow: hidden;
  text-align: center;
  transition:
    border-color 0.3s ease,
    box-shadow 0.3s ease;

  /* Brand-colored glow that appears on hover */
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: radial-gradient(circle at 50% 0%, var(--skill-color), transparent 70%);
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover {
    border-color: var(--skill-color);
    box-shadow: 0 12px 32px -14px var(--skill-color);
  }

  &:hover::before {
    opacity: 0.16;
  }

  svg {
    position: relative;
    font-size: 2.6rem;
    color: var(--skill-color);
    transition: transform 0.3s ease;
  }

  &:hover svg {
    transform: scale(1.12) rotate(-4deg);
  }

  span {
    position: relative;
    font-size: 0.88rem;
    font-weight: 500;
  }
`
