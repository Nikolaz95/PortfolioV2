import styled from 'styled-components'

import Tag from '../../ui/Tag'

// The whole card is a <button>, so it works with mouse, touch and keyboard
export const Card = styled.button`
  position: relative;
  display: block;
  width: 100%;
  aspect-ratio: 4 / 3;
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.lg};
  background: ${({ theme }) => theme.colors.bgAlt};
  box-shadow: ${({ theme }) => theme.shadow};
  color: #fff;
  text-align: left;
  transition:
    transform 0.35s ease,
    box-shadow 0.35s ease,
    border-color 0.35s ease;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top;
    transition: transform 0.6s ease;
  }

  /* Dark fade at the bottom so the white text is always readable */
  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(to top, rgba(5, 6, 15, 0.92) 0%, rgba(5, 6, 15, 0.55) 38%, transparent 68%);
  }

  &:hover,
  &:focus-visible {
    transform: translateY(-6px);
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 24px 48px -20px rgba(124, 58, 237, 0.55);
  }

  &:hover img,
  &:focus-visible img {
    transform: scale(1.06);
  }
`

export const CategoryTag = styled(Tag)`
  position: absolute;
  top: 14px;
  left: 14px;
  z-index: 1;
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
`

export const Overlay = styled.span`
  position: absolute;
  inset: auto 0 0 0;
  z-index: 1;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px;
`

export const Title = styled.span`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 1.3rem;
  font-weight: 600;
  line-height: 1.2;
`

export const Tags = styled.span`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
`

// "View details →" – slides in on hover
export const More = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  max-height: 0;
  overflow: hidden;
  color: #a5f3fc;
  font-size: 0.85rem;
  font-weight: 600;
  opacity: 0;
  transition: all 0.35s ease;

  ${Card}:hover &,
  ${Card}:focus-visible & {
    max-height: 24px;
    opacity: 1;
  }

  /* Touch screens have no hover, so always show it there */
  @media (hover: none) {
    max-height: 24px;
    opacity: 1;
  }
`
