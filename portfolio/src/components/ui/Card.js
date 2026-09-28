import styled, { css } from 'styled-components'

// The rounded "surface" look used by cards all over the site.
// Use <Card> directly, extend it with styled(Card)`...`,
// or add ${cardStyles} to another element (e.g. a <form>).
export const cardStyles = css`
  padding: 24px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.lg};
  background: ${({ theme }) => theme.colors.surface};
  box-shadow: ${({ theme }) => theme.shadow};
`

const Card = styled.div`
  ${cardStyles}
`

export default Card
