import styled from 'styled-components'

import Card from '../../ui/Card'

const sm = ({ theme }) => theme.breakpoints.sm

export const Timeline = styled.ol`
  position: relative;
  max-width: 820px;
  margin: 0 auto;
  list-style: none;

  /* The vertical gradient line */
  &::before {
    content: '';
    position: absolute;
    top: 8px;
    bottom: 8px;
    left: 23px;
    width: 2px;
    background: linear-gradient(
      ${({ theme }) => theme.colors.primary},
      ${({ theme }) => theme.colors.secondary},
      transparent
    );

    @media (max-width: ${sm}) {
      left: 41px;
    }
  }
`

export const Item = styled.li`
  position: relative;
  padding-left: 72px;

  & + & {
    margin-top: 28px;
  }

  @media (max-width: ${sm}) {
    padding-left: 0;
    padding-top: 28px;
  }
`

// Round icon on the line (briefcase = work, cap = school)
export const Dot = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border: 2px solid ${({ theme }) => theme.colors.primary};
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.bgAlt};
  color: ${({ theme }) => theme.colors.secondary};
  font-size: 1.3rem;
  box-shadow: 0 0 0 6px ${({ theme }) => theme.colors.bg};

  /* On phones the icon sits on top of the card instead of beside it */
  @media (max-width: ${sm}) {
    left: 20px;
    z-index: 1;
    width: 44px;
    height: 44px;
    font-size: 1.15rem;
  }
`

export const ItemCard = styled(Card)`
  transition:
    border-color 0.3s ease,
    transform 0.3s ease;

  &:hover {
    border-color: ${({ theme }) => theme.colors.primary};
    transform: translateX(4px);
  }

  @media (max-width: ${sm}) {
    position: relative;
    padding: 30px 20px 20px;
    background: ${({ theme }) => theme.colors.bgAlt};

    &:hover {
      transform: none;
    }
  }
`

export const Title = styled.h3`
  margin-top: 12px;
  font-size: 1.25rem;
`

export const Meta = styled.p`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 4px 12px;
  margin-top: 6px;
  color: ${({ theme }) => theme.colors.muted};
  font-size: 0.92rem;

  strong {
    color: ${({ theme }) => theme.colors.text};
    font-weight: 600;
  }

  span {
    display: inline-flex;
    align-items: center;
    gap: 4px;
  }
`

export const Description = styled.p`
  margin-top: 12px;
  color: ${({ theme }) => theme.colors.muted};
`
