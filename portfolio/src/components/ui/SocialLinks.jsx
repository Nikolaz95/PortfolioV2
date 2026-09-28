import styled from 'styled-components'

import social from '../../data/social'
import IconButton from './IconButton'

// Row of LinkedIn / Gmail / GitHub buttons with their real logos (links come from src/data/social.js).
// Change alignment with styled(SocialLinks)`justify-content: center;`
export default function SocialLinks({ className }) {
  return (
    <Row className={className}>
      {social.map(({ name, href, icon }) => (
        <LogoButton key={name} icon={icon} label={name} href={href} external size={48} />
      ))}
    </Row>
  )
}

const Row = styled.div`
  display: flex;
  gap: 12px;
`

// Keeps the logo in its own colors on hover (instead of the gradient) and just lifts the button
const LogoButton = styled(IconButton)`
  font-size: 1.5rem;

  @media (hover: hover) {
    &:hover {
      border-color: ${({ theme }) => theme.colors.primary};
      background: ${({ theme }) => theme.colors.surface};
      color: ${({ theme }) => theme.colors.text};
      box-shadow: 0 12px 24px -12px rgba(124, 58, 237, 0.5);
      transform: translateY(-3px);
    }
  }
`
