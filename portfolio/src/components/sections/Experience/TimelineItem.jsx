import { useTranslation } from 'react-i18next'
import { HiAcademicCap, HiBriefcase, HiLocationMarker } from 'react-icons/hi'

import Reveal from '../../ui/Reveal'
import Tag from '../../ui/Tag'
import { Description, Dot, Item, ItemCard, Meta, Title } from './Experience.styles'

// One job or school on the timeline. Texts come from experience.items.<key> in the language files.
export default function TimelineItem({ item, delay }) {
  const { t } = useTranslation()
  const text = (field) => t(`experience.items.${item.key}.${field}`)
  const Icon = item.type === 'work' ? HiBriefcase : HiAcademicCap

  return (
    <Item>
      <Reveal delay={delay} y={24}>
        <Dot aria-hidden="true">
          <Icon />
        </Dot>

        <ItemCard>
          <Tag $variant="accent">{text('period')}</Tag>
          <Title>{text('title')}</Title>
          <Meta>
            <strong>{text('company')}</strong>
            <span>
              <HiLocationMarker aria-hidden="true" /> {text('location')}
            </span>
          </Meta>
          <Description>{text('description')}</Description>
        </ItemCard>
      </Reveal>
    </Item>
  )
}
