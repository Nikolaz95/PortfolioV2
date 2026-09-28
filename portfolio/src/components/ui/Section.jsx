import styled from 'styled-components'

import Reveal from './Reveal'
import Tag from './Tag'
import { Container } from './Layout'

/**
 * Every page section is wrapped in this: it adds the id (for the menu links), spacing and width.
 *   <Section id="about">...</Section>
 */
export default function Section({ id, children, ...rest }) {
  return (
    <StyledSection id={id} {...rest}>
      <Container>{children}</Container>
    </StyledSection>
  )
}

/**
 * The centered heading at the top of each section.
 *   <SectionHeading eyebrow="About me" title="Who I am" subtitle="Optional text" />
 */
export function SectionHeading({ eyebrow, title, subtitle }) {
  return (
    <Reveal>
      <Heading>
        <Tag $variant="outline">{eyebrow}</Tag>
        <Title>{title}</Title>
        {subtitle && <Subtitle>{subtitle}</Subtitle>}
      </Heading>
    </Reveal>
  )
}

const StyledSection = styled.section`
  padding: 96px 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: 72px 0;
  }
`

const Heading = styled.div`
  max-width: 640px;
  margin: 0 auto 56px;
  text-align: center;
`

const Title = styled.h2`
  margin-top: 12px;
  font-size: clamp(2rem, 5vw, 3rem);
`

const Subtitle = styled.p`
  margin-top: 14px;
  color: ${({ theme }) => theme.colors.muted};
`
