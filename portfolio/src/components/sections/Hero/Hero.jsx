import { motion } from 'motion/react'
import { useTranslation } from 'react-i18next'
import { HiArrowDown, HiDownload } from 'react-icons/hi'

import { getCv } from '../../../data/cv'
import { fadeUp, stagger } from '../../../styles/animations'
import Button from '../../ui/Button'
import ProfileBadge from './ProfileBadge'
import TypedRole from './TypedRole'
import { Actions, Badge, Greeting, Grid, HeroSocials, Intro, Name, Role, ScrollHint, Text, Wrapper } from './Hero.styles'

export default function Hero() {
  const { t, i18n } = useTranslation()
  const lang = i18n.resolvedLanguage

  return (
    <Wrapper id="home">
      <Grid>
        <Text variants={stagger(0.12, 0.2)} initial="hidden" animate="show">
          <Badge variants={fadeUp}>{t('hero.available')}</Badge>
          <Greeting variants={fadeUp}>{t('hero.greeting')}</Greeting>
          <Name variants={fadeUp}>Nikola Zovko</Name>

          <Role variants={fadeUp}>
            {t('hero.rolePrefix')}{' '}
            {/* key={lang} restarts the typing when the language changes */}
            <TypedRole key={lang} words={t('hero.roles', { returnObjects: true })} />
          </Role>

          <Intro variants={fadeUp}>{t('hero.intro')}</Intro>

          <Actions variants={fadeUp}>
            <Button href="#projects">{t('hero.ctaProjects')}</Button>
            <Button href={getCv(lang)} download variant="outline" icon={HiDownload}>
              {t('hero.ctaCv')}
            </Button>
          </Actions>

          <motion.div variants={fadeUp}>
            <HeroSocials />
          </motion.div>
        </Text>

        <ProfileBadge />
      </Grid>

      <ScrollHint
        href="#about"
        aria-label={t('hero.scroll')}
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <HiArrowDown size={20} />
      </ScrollHint>
    </Wrapper>
  )
}
