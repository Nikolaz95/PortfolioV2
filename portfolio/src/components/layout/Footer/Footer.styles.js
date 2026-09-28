import styled from 'styled-components'

import SocialLinks from '../../ui/SocialLinks'

export const Wrapper = styled.footer`
  margin-top: 40px;
  padding: 56px 0 32px;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  background: linear-gradient(to bottom, transparent, ${({ theme }) => theme.colors.accentSoft});
`

export const Top = styled.div`
  display: grid;
  grid-template-columns: 1.4fr 1fr 1fr;
  gap: 32px;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`

export const Brand = styled.div`
  a {
    font-family: ${({ theme }) => theme.fonts.heading};
    font-size: 1.6rem;
    font-weight: 700;
  }

  p {
    max-width: 320px;
    margin-top: 10px;
    color: ${({ theme }) => theme.colors.muted};

    @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
      margin-left: auto;
      margin-right: auto;
    }
  }
`

export const Links = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px 16px;
  list-style: none;

  a {
    color: ${({ theme }) => theme.colors.muted};
    transition: color 0.2s ease;

    &:hover {
      color: ${({ theme }) => theme.colors.text};
    }
  }
`

export const FooterSocials = styled(SocialLinks)`
  justify-content: flex-end;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    justify-content: center;
  }
`

export const Bottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  margin-top: 40px;
  padding-top: 24px;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  color: ${({ theme }) => theme.colors.muted};
  font-size: 0.88rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: column;
  }
`

export const ToTop = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  transition: color 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.text};
  }
`
