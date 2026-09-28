import { motion } from 'motion/react'
import { useTranslation } from 'react-i18next'
import { FaGithub } from 'react-icons/fa'
import { HiCheckCircle, HiExternalLink } from 'react-icons/hi'

import { fadeLeft, stagger } from '../../../styles/animations'
import Button from '../../ui/Button'
import Tag from '../../ui/Tag'
import TechBadge from '../../ui/TechBadge'
import { Features, Info, Label, Layout, Links, Media, TechList, Title } from './ProjectDetails.styles'

// What's shown inside the modal: screenshot on the left, info on the right
export default function ProjectDetails({ project, titleId }) {
  const { t } = useTranslation()
  const text = (field, options) => t(`projects.items.${project.key}.${field}`, options)
  const title = text('title')

  return (
    <Layout>
      <Media>
        <img src={project.image} alt={title} />
      </Media>

      <Info variants={stagger(0.06, 0.15)} initial="hidden" animate="show">
        <motion.div variants={fadeLeft}>
          <Tag $variant="accent">{t(`projects.categories.${project.category}`)}</Tag>
        </motion.div>

        <Title id={titleId} variants={fadeLeft}>
          {title}
        </Title>

        <Block label={t('projects.about')}>
          <p>{text('description')}</p>
        </Block>

        <Block label={t('projects.features')}>
          <Features>
            {text('features', { returnObjects: true }).map((feature) => (
              <li key={feature}>
                <HiCheckCircle aria-hidden="true" /> {feature}
              </li>
            ))}
          </Features>
        </Block>

        <Block label={t('projects.techStack')}>
          <TechList>
            {project.tech.map((name) => (
              <li key={name}>
                <TechBadge name={name} />
              </li>
            ))}
          </TechList>
        </Block>

        <Links variants={fadeLeft}>
          {project.demo && (
            <Button href={project.demo} external icon={HiExternalLink}>
              {t('projects.demo')}
            </Button>
          )}
          <Button href={project.source} external variant="outline" icon={FaGithub}>
            {t('projects.code')}
          </Button>
        </Links>
      </Info>
    </Layout>
  )
}

// A small heading ("KEY FEATURES") with its content, animated in with the rest
function Block({ label, children }) {
  return (
    <motion.div variants={fadeLeft}>
      <Label>{label}</Label>
      {children}
    </motion.div>
  )
}
