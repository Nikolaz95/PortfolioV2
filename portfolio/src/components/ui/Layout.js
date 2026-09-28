import styled from 'styled-components'

// Centers content and keeps it from getting too wide on big screens
export const Container = styled.div`
  width: 100%;
  max-width: ${({ theme }) => theme.maxWidth};
  margin: 0 auto;
  padding: 0 20px;

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: 0 32px;
  }
`

// Text filled with the purple -> cyan brand gradient
export const GradientText = styled.span`
  background: ${({ theme }) => theme.gradient};
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
`
