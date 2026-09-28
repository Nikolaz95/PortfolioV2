import { useTranslation } from 'react-i18next'
import { HiArrowRight } from 'react-icons/hi'

import Tag from '../../ui/Tag'
import { Card, CategoryTag, More, Overlay, Tags, Title } from './ProjectCard.styles'

const MAX_TAGS = 4

// Clickable project card in the slider. Clicking it calls onOpen(project).
export default function ProjectCard({ project, onOpen }) {
  const { t } = useTranslation()
  const visibleTech = project.tech.slice(0, MAX_TAGS)
  const hiddenCount = project.tech.length - visibleTech.length

  return (
    <Card type="button" onClick={() => onOpen(project)} aria-haspopup="dialog">
      <img src={project.image} alt="" loading="lazy" />
      <CategoryTag $variant="glass">{t(`projects.categories.${project.category}`)}</CategoryTag>

      <Overlay>
        <Title>{t(`projects.items.${project.key}.title`)}</Title>
        <Tags>
          {visibleTech.map((name) => (
            <Tag key={name} $variant="glass">
              {name}
            </Tag>
          ))}
          {hiddenCount > 0 && <Tag $variant="glass">+{hiddenCount}</Tag>}
        </Tags>
        <More>
          {t('projects.viewDetails')} <HiArrowRight />
        </More>
      </Overlay>
    </Card>
  )
}
