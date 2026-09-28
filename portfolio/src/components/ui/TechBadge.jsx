import styled, { useTheme } from 'styled-components'

import techIcons from '../../data/techIcons'

// A technology name with its logo, e.g. <TechBadge name="React" />
// Logos and colors come from src/data/techIcons.js
export default function TechBadge({ name }) {
  const theme = useTheme()
  const tech = techIcons[name]
  const Icon = tech?.icon

  return (
    <Badge>
      {Icon && <Icon aria-hidden="true" style={{ color: tech.color ?? theme.colors.text }} />}
      {name}
    </Badge>
  )
}

const Badge = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 7px;
  padding: 6px 12px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.full};
  background: ${({ theme }) => theme.colors.surface};
  font-size: 0.85rem;
  font-weight: 500;

  svg {
    font-size: 1.05rem;
  }
`
