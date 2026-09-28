import styled from 'styled-components'

import Card from '../../ui/Card'

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1.3fr 1fr;
  gap: 40px;
  align-items: start;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`

export const Paragraphs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
  color: ${({ theme }) => theme.colors.muted};
  font-size: 1.05rem;

  p:first-child {
    color: ${({ theme }) => theme.colors.text};
  }
`

export const Side = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`

// One row in the facts card (icon + label + value), with a line between rows
export const Fact = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;

  & + & {
    margin-top: 18px;
    padding-top: 18px;
    border-top: 1px solid ${({ theme }) => theme.colors.border};
  }
`

export const FactIcon = styled.span`
  display: inline-flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border-radius: 12px;
  background: ${({ theme }) => theme.colors.accentSoft};
  color: ${({ theme }) => theme.colors.primary};
  font-size: 1.3rem;
`

export const FactLabel = styled.span`
  display: block;
  color: ${({ theme }) => theme.colors.muted};
  font-size: 0.8rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
`

export const FactValue = styled.span`
  font-weight: 600;
`

export const Stats = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
`

export const Stat = styled(Card)`
  padding: 18px 12px;
  text-align: center;

  strong {
    display: block;
    font-family: ${({ theme }) => theme.fonts.heading};
    font-size: 2rem;
    line-height: 1.1;
  }

  span {
    color: ${({ theme }) => theme.colors.muted};
    font-size: 0.8rem;
  }
`
