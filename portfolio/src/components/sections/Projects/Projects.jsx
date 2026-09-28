import { useCallback, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { FaGithub } from 'react-icons/fa'

import projects from '../../../data/projects'
import { GITHUB_URL } from '../../../data/social'
import Button from '../../ui/Button'
import Carousel from '../../ui/Carousel'
import Modal from '../../ui/Modal'
import Reveal from '../../ui/Reveal'
import Section, { SectionHeading } from '../../ui/Section'
import ProjectCard from './ProjectCard'
import ProjectDetails from './ProjectDetails'

const MODAL_TITLE_ID = 'project-modal-title'

export default function Projects() {
  const { t } = useTranslation()
  const [selected, setSelected] = useState(null)
  const closeModal = useCallback(() => setSelected(null), [])

  return (
    <Section id="projects">
      <SectionHeading eyebrow={t('projects.eyebrow')} title={t('projects.title')} subtitle={t('projects.subtitle')} />

      <Reveal>
        <Carousel
          items={projects}
          getKey={(project) => project.key}
          renderItem={(project) => <ProjectCard project={project} onOpen={setSelected} />}
          paused={!!selected}
          prevLabel={t('projects.prev')}
          nextLabel={t('projects.next')}
        >
          <Button href={GITHUB_URL} external variant="outline" icon={FaGithub}>
            {t('projects.moreOnGithub')}
          </Button>
        </Carousel>
      </Reveal>

      <Modal open={!!selected} onClose={closeModal} labelledBy={MODAL_TITLE_ID} closeLabel={t('projects.close')}>
        {selected && <ProjectDetails project={selected} titleId={MODAL_TITLE_ID} />}
      </Modal>
    </Section>
  )
}
