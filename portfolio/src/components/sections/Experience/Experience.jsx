import { useTranslation } from 'react-i18next'

import experience from '../../../data/experience'
import Section, { SectionHeading } from '../../ui/Section'
import TimelineItem from './TimelineItem'
import { Timeline } from './Experience.styles'

export default function Experience() {
  const { t } = useTranslation()

  return (
    <Section id="experience">
      <SectionHeading eyebrow={t('experience.eyebrow')} title={t('experience.title')} />

      <Timeline>
        {experience.map((item, i) => (
          <TimelineItem key={item.key} item={item} delay={i * 0.1} />
        ))}
      </Timeline>
    </Section>
  )
}
