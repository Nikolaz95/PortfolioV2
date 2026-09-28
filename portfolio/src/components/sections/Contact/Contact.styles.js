import styled from 'styled-components'

import Button from '../../ui/Button'
import Card, { cardStyles } from '../../ui/Card'

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 0.8fr 1.2fr;
  gap: 40px;
  align-items: start;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  > p {
    color: ${({ theme }) => theme.colors.muted};
    font-size: 1.05rem;
  }
`

// Email / location boxes. Use as="a" to make one a link.
export const InfoItem = styled(Card)`
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 16px;
  border-radius: ${({ theme }) => theme.radius.md};
  transition: border-color 0.25s ease;

  &[href]:hover {
    border-color: ${({ theme }) => theme.colors.secondary};
  }

  > svg {
    flex-shrink: 0;
    font-size: 1.4rem;
    color: ${({ theme }) => theme.colors.secondary};
  }

  small {
    display: block;
    color: ${({ theme }) => theme.colors.muted};
    font-size: 0.78rem;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  span {
    font-weight: 600;
    word-break: break-word;
  }
`

// Two columns on bigger screens, one on phones
export const Form = styled.form`
  ${cardStyles}
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 18px;
  padding: 32px;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
    padding: 22px;
  }
`

export const Submit = styled(Button)`
  grid-column: 1 / -1;
  justify-self: start;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    justify-self: stretch;
  }
`
