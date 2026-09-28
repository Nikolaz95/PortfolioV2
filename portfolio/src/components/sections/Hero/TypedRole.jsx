import styled, { keyframes } from 'styled-components'

import useTypewriter from '../../../hooks/useTypewriter'
import { GradientText } from '../../ui/Layout'

// Types the words one after another, with a blinking cursor
export default function TypedRole({ words }) {
  const text = useTypewriter(words)

  return (
    <GradientText>
      {text}
      <Caret aria-hidden="true" />
    </GradientText>
  )
}

const blink = keyframes`
  50% { opacity: 0; }
`

const Caret = styled.span`
  display: inline-block;
  width: 3px;
  height: 1em;
  margin-left: 4px;
  vertical-align: -0.12em;
  background: ${({ theme }) => theme.colors.secondary};
  animation: ${blink} 1s steps(1) infinite;
`
