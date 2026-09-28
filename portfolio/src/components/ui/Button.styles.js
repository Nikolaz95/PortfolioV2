import styled, { css } from 'styled-components'

const variants = {
  primary: css`
    background: ${({ theme }) => theme.gradient};
    color: #fff;
    box-shadow: 0 8px 24px -8px rgba(139, 92, 246, 0.7);

    &:hover:not(:disabled) {
      box-shadow: 0 12px 32px -8px rgba(34, 211, 238, 0.6);
    }
  `,
  outline: css`
    border: 1px solid ${({ theme }) => theme.colors.border};
    background: ${({ theme }) => theme.colors.surface};
    color: ${({ theme }) => theme.colors.text};

    &:hover:not(:disabled) {
      border-color: ${({ theme }) => theme.colors.secondary};
      background: ${({ theme }) => theme.colors.surfaceHover};
    }
  `,
}

const sizes = {
  md: css`
    padding: 13px 24px;
    font-size: 0.95rem;
  `,
  sm: css`
    padding: 10px 18px;
    font-size: 0.88rem;
  `,
}

export const StyledButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  border-radius: ${({ theme }) => theme.radius.full};
  font-weight: 600;
  white-space: nowrap;
  transition:
    transform 0.25s ease,
    box-shadow 0.25s ease,
    background 0.25s ease,
    border-color 0.25s ease;

  svg {
    flex-shrink: 0;
  }

  &:hover:not(:disabled) {
    transform: translateY(-2px);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  ${({ $variant }) => variants[$variant]}
  ${({ $size }) => sizes[$size]}
`
