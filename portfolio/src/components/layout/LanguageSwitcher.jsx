import styled from 'styled-components'
import { motion } from 'motion/react'
import { useTranslation } from 'react-i18next'

import { LANGUAGES } from '../../i18n'

const Wrapper = styled.div`
  display: inline-flex;
  padding: 4px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.full};
  background: ${({ theme }) => theme.colors.surface};
`

const Option = styled.button`
  position: relative;
  padding: 6px 12px;
  border-radius: ${({ theme }) => theme.radius.full};
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.05em;
  color: ${({ $active, theme }) => ($active ? '#fff' : theme.colors.muted)};
  transition: color 0.2s ease;

  &:hover {
    color: ${({ $active, theme }) => ($active ? '#fff' : theme.colors.text)};
  }
`

const Label = styled.span`
  position: relative;
  z-index: 1;
`

// The colored pill that slides between EN and SV
const Pill = styled(motion.span)`
  position: absolute;
  inset: 0;
  border-radius: inherit;
  background: ${({ theme }) => theme.gradient};
`

export default function LanguageSwitcher({ id = 'lang' }) {
  const { i18n, t } = useTranslation()
  const current = i18n.resolvedLanguage

  return (
    <Wrapper role="group" aria-label={t('language.label')}>
      {LANGUAGES.map((lng) => (
        <Option
          key={lng}
          type="button"
          $active={current === lng}
          aria-pressed={current === lng}
          onClick={() => i18n.changeLanguage(lng)}
        >
          {current === lng && (
            <Pill layoutId={`${id}-pill`} transition={{ type: 'spring', stiffness: 400, damping: 30 }} />
          )}
          <Label>{lng.toUpperCase()}</Label>
        </Option>
      ))}
    </Wrapper>
  )
}
