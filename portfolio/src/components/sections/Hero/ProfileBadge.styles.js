import styled from 'styled-components'
import { motion } from 'motion/react'

const md = ({ theme }) => theme.breakpoints.md

export const Scene = styled(motion.div)`
  justify-self: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 340px;
  max-width: 86vw;
  text-align: left; /* the Hero centers text on phones – the card keeps its own layout */

  @media (max-width: ${md}) {
    width: 300px;
  }
`

// Both wrappers rotate around the top of the lanyard, like a real badge hanging from a hook
export const Swing = styled(motion.div)`
  width: 100%;
  transform-origin: 50% 0;
`

export const Hanger = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  transform-origin: 50% 0;
  cursor: grab;

  &:active {
    cursor: grabbing;
  }
`

// The lanyard strap, fading out towards the top of the screen
export const Strap = styled.div`
  display: flex;
  justify-content: center;
  width: 30px;
  height: 110px;
  overflow: hidden;
  background: ${({ theme }) => theme.gradient};
  mask-image: linear-gradient(to bottom, transparent, #000 45%);
  -webkit-mask-image: linear-gradient(to bottom, transparent, #000 45%);

  span {
    color: rgba(255, 255, 255, 0.85);
    font-size: 0.55rem;
    font-weight: 700;
    letter-spacing: 0.2em;
    white-space: nowrap;
    writing-mode: vertical-rl;
  }

  @media (max-width: ${md}) {
    height: 64px;
  }
`

// Metal clip that holds the card
export const Clip = styled.div`
  position: relative;
  z-index: 2;
  width: 54px;
  height: 30px;
  margin: -4px 0 -14px;
  border-radius: 8px;
  background: linear-gradient(180deg, #f3f4f6, #9ca3af 55%, #d1d5db);
  box-shadow: 0 4px 10px rgba(15, 23, 42, 0.35);

  &::after {
    content: '';
    position: absolute;
    left: 50%;
    bottom: 7px;
    width: 26px;
    height: 6px;
    margin-left: -13px;
    border-radius: 4px;
    background: #4b5563;
  }
`

export const Card = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 22px;
  background: ${({ theme }) => theme.colors.bgAlt};
  box-shadow:
    0 30px 60px -25px rgba(15, 23, 42, 0.5),
    0 0 0 1px rgba(255, 255, 255, 0.04) inset;
  user-select: none;
`

export const CardHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 18px 18px 34px;
  background: ${({ theme }) => theme.gradient};
  color: #fff;

  strong {
    font-family: ${({ theme }) => theme.fonts.heading};
    font-size: 1.35rem;
    letter-spacing: -0.03em;
  }
`

export const PassLabel = styled.span`
  flex: 1;
  font-size: 0.66rem;
  font-weight: 700;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  opacity: 0.9;
`

// Gold chip like on a real card
export const Chip = styled.span`
  width: 36px;
  height: 27px;
  border-radius: 6px;
  background:
    repeating-linear-gradient(90deg, transparent 0 8px, rgba(120, 80, 0, 0.35) 8px 9px),
    repeating-linear-gradient(0deg, transparent 0 8px, rgba(120, 80, 0, 0.35) 8px 9px),
    linear-gradient(135deg, #fde68a, #d4a017);
  box-shadow: inset 0 0 0 1px rgba(120, 80, 0, 0.3);
`

export const Identity = styled.div`
  display: flex;
  gap: 16px;
  margin-top: -22px;
  padding: 0 18px;
`

export const Photo = styled.div`
  flex-shrink: 0;
  width: 104px;
  height: 128px;
  overflow: hidden;
  border: 4px solid ${({ theme }) => theme.colors.bgAlt};
  border-radius: 16px;
  background: ${({ theme }) => theme.colors.photoBg};
  box-shadow: 0 10px 20px -10px rgba(15, 23, 42, 0.45);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center top;
    pointer-events: none;
  }
`

export const Name = styled.h3`
  margin-top: 30px;
  font-size: 1.3rem;
`

export const RoleText = styled.p`
  margin-top: 2px;
  background: ${({ theme }) => theme.gradient};
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  font-size: 0.85rem;
  font-weight: 600;
`

export const Stack = styled.ul`
  display: flex;
  gap: 8px;
  padding: 16px 18px 0;
  list-style: none;

  li {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 34px;
    height: 34px;
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: 10px;
    background: ${({ theme }) => theme.colors.surface};
    font-size: 1.1rem;
  }
`

export const Facts = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
  padding: 14px 18px;
`

export const Fact = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  min-width: 0;
  padding: 9px 10px;
  border-radius: 12px;
  background: ${({ theme }) => theme.colors.surfaceHover};

  > svg {
    flex-shrink: 0;
    color: ${({ theme }) => theme.colors.primary};
    font-size: 1.05rem;
  }

  /* Phones: hide the small icons so the text fits on one line */
  @media (max-width: ${md}) {
    padding: 8px 10px;

    > svg {
      display: none;
    }
  }

  div {
    min-width: 0;
  }

  small {
    display: block;
    color: ${({ theme }) => theme.colors.muted};
    font-size: 0.6rem;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  strong {
    display: block;
    font-size: 0.8rem;
    line-height: 1.3;
  }
`

export const CardFooter = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 14px;
  margin: 0 18px;
  padding: 12px 0 16px;
  border-top: 1px dashed ${({ theme }) => theme.colors.border};
  color: ${({ theme }) => theme.colors.text};

  svg {
    flex: 1;
    opacity: 0.85;
  }
`

export const IdNumber = styled.span`
  color: ${({ theme }) => theme.colors.muted};
  font-family: ui-monospace, 'Cascadia Code', Consolas, monospace;
  font-size: 0.66rem;
  letter-spacing: 0.1em;
  white-space: nowrap;
`

// Holographic light that follows the mouse (position set in ProfileBadge.jsx)
export const Shine = styled.div`
  position: absolute;
  inset: 0;
  pointer-events: none;
  background:
    radial-gradient(circle at var(--mx, 50%) var(--my, 0%), rgba(255, 255, 255, 0.35), transparent 45%),
    linear-gradient(115deg, transparent 30%, rgba(124, 58, 237, 0.12) 45%, rgba(34, 211, 238, 0.12) 55%, transparent 70%);
  opacity: 0;
  transition: opacity 0.3s ease;

  ${Card}:hover & {
    opacity: 1;
  }
`

export const DragHint = styled(motion.span)`
  margin-top: 18px;
  color: ${({ theme }) => theme.colors.muted};
  font-size: 0.78rem;
  letter-spacing: 0.04em;

  @media (hover: none) {
    display: none;
  }
`
