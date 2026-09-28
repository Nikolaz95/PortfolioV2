import styled, { css } from 'styled-components'

// Small rounded label ("pill").
//   <Tag>React</Tag>                          – purple tech tag (default)
//   <Tag $variant="accent">Full-stack</Tag>   – colored, uppercase
//   <Tag $variant="outline">About me</Tag>    – section label above titles
//   <Tag $variant="glass">Frontend</Tag>      – white text, for use on top of images
const variants = {
  default: css`
    border-color: ${({ theme }) => theme.colors.tagBorder};
    background: ${({ theme }) => theme.colors.tagBg};
    color: ${({ theme }) => theme.colors.tagText};
  `,
  accent: css`
    background: ${({ theme }) => theme.colors.accentSoft};
    color: ${({ theme }) => theme.colors.primary};
    font-weight: 600;
    letter-spacing: 0.06em;
    text-transform: uppercase;
  `,
  outline: css`
    padding: 6px 14px;
    border-color: ${({ theme }) => theme.colors.border};
    background: ${({ theme }) => theme.colors.surface};
    color: ${({ theme }) => theme.colors.secondary};
    font-size: 0.8rem;
    font-weight: 600;
    letter-spacing: 0.12em;
    text-transform: uppercase;
  `,
  glass: css`
    border-color: rgba(255, 255, 255, 0.2);
    background: rgba(5, 6, 15, 0.55);
    color: #fff;
    backdrop-filter: blur(6px);
    -webkit-backdrop-filter: blur(6px);
  `,
}

const Tag = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 4px 11px;
  border: 1px solid transparent;
  border-radius: ${({ theme }) => theme.radius.full};
  font-size: 0.75rem;
  font-weight: 500;
  line-height: 1.5;
  white-space: nowrap;

  ${({ $variant = 'default' }) => variants[$variant]}
`

export default Tag
