import styled from 'styled-components'

export const Field = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  grid-column: ${({ $full }) => ($full ? '1 / -1' : 'auto')};

  label {
    font-size: 0.88rem;
    font-weight: 500;
  }

  input,
  textarea {
    width: 100%;
    padding: 13px 16px;
    border: 1px solid ${({ $error, theme }) => ($error ? theme.colors.danger : theme.colors.border)};
    border-radius: ${({ theme }) => theme.radius.sm};
    background: ${({ theme }) => theme.colors.inputBg};
    outline: none;
    transition:
      border-color 0.2s ease,
      box-shadow 0.2s ease;

    &::placeholder {
      color: ${({ theme }) => theme.colors.placeholder};
    }

    &:focus {
      border-color: ${({ theme }) => theme.colors.primary};
      box-shadow: 0 0 0 4px ${({ theme }) => theme.colors.accentSoft};
    }
  }

  textarea {
    min-height: 150px;
    resize: vertical;
  }
`

export const ErrorText = styled.span`
  color: ${({ theme }) => theme.colors.danger};
  font-size: 0.8rem;
`
