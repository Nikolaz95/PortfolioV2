import { useTheme } from 'styled-components'
import { useTranslation } from 'react-i18next'

import skills from '../../../data/skills'
import { popIn, stagger } from '../../../styles/animations'
import Section, { SectionHeading } from '../../ui/Section'
import { Grid, SkillCard } from './Skills.styles'

export default function Skills() {
  const { t } = useTranslation()
  const theme = useTheme()

  return (
    <Section id="skills">
      <SectionHeading eyebrow={t('skills.eyebrow')} title={t('skills.title')} subtitle={t('skills.subtitle')} />

      <Grid variants={stagger(0.04)} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.15 }}>
        {skills.map(({ name, icon: Icon, color }) => (
          <SkillCard
            key={name}
            variants={popIn}
            whileHover={{ y: -6 }}
            // Logos without their own color (null) follow the text color
            style={{ '--skill-color': color ?? theme.colors.text }}
          >
            <Icon aria-hidden="true" />
            <span>{name}</span>
          </SkillCard>
        ))}
      </Grid>
    </Section>
  )
}
