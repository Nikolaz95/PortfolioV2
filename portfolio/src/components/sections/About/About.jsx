import { useTranslation } from 'react-i18next'
import { HiAcademicCap, HiCode, HiLocationMarker } from 'react-icons/hi'

import experience from '../../../data/experience'
import projects from '../../../data/projects'
import skills from '../../../data/skills'
import Card from '../../ui/Card'
import { GradientText } from '../../ui/Layout'
import Reveal from '../../ui/Reveal'
import Section, { SectionHeading } from '../../ui/Section'
import { Fact, FactIcon, FactLabel, FactValue, Grid, Paragraphs, Side, Stat, Stats } from './About.styles'

export default function About() {
  const { t } = useTranslation()
  const paragraphs = t('about.paragraphs', { returnObjects: true })

  const facts = [
    { icon: HiLocationMarker, label: t('about.facts.location'), value: t('about.facts.locationValue') },
    { icon: HiAcademicCap, label: t('about.facts.education'), value: t('about.facts.educationValue') },
    { icon: HiCode, label: t('about.facts.focus'), value: t('about.facts.focusValue') },
  ]

  // Numbers come from the data files, so they update automatically when you add things
  const stats = [
    { value: `${projects.length}+`, label: t('about.stats.projects') },
    { value: `${skills.length}+`, label: t('about.stats.technologies') },
    { value: experience.filter((item) => item.type === 'work').length, label: t('about.stats.internships') },
  ]

  return (
    <Section id="about">
      <SectionHeading eyebrow={t('about.eyebrow')} title={t('about.title')} />

      <Grid>
        <Paragraphs>
          {paragraphs.map((text, i) => (
            <Reveal key={i} as="p" delay={i * 0.1}>
              {text}
            </Reveal>
          ))}
        </Paragraphs>

        <Side>
          <Reveal delay={0.1}>
            <Card>
              {facts.map(({ icon: Icon, label, value }) => (
                <Fact key={label}>
                  <FactIcon>
                    <Icon />
                  </FactIcon>
                  <div>
                    <FactLabel>{label}</FactLabel>
                    <FactValue>{value}</FactValue>
                  </div>
                </Fact>
              ))}
            </Card>
          </Reveal>

          <Reveal delay={0.2}>
            <Stats>
              {stats.map(({ value, label }) => (
                <Stat key={label}>
                  <GradientText as="strong">{value}</GradientText>
                  <span>{label}</span>
                </Stat>
              ))}
            </Stats>
          </Reveal>
        </Side>
      </Grid>
    </Section>
  )
}
