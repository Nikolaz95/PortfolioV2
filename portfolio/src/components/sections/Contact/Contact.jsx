import { useTranslation } from 'react-i18next'
import { HiLocationMarker, HiMail } from 'react-icons/hi'

import { EMAIL } from '../../../data/social'
import Reveal from '../../ui/Reveal'
import Section, { SectionHeading } from '../../ui/Section'
import SocialLinks from '../../ui/SocialLinks'
import ContactForm from './ContactForm'
import { Grid, Info, InfoItem } from './Contact.styles'

export default function Contact() {
  const { t } = useTranslation()

  return (
    <Section id="contact">
      <SectionHeading eyebrow={t('contact.eyebrow')} title={t('contact.title')} />

      <Grid>
        <Reveal>
          <Info>
            <p>{t('contact.text')}</p>

            <InfoItem as="a" href={`mailto:${EMAIL}`}>
              <HiMail />
              <div>
                <small>{t('contact.emailLabel')}</small>
                <span>{EMAIL}</span>
              </div>
            </InfoItem>

            <InfoItem>
              <HiLocationMarker />
              <div>
                <small>{t('contact.locationLabel')}</small>
                <span>{t('about.facts.locationValue')}</span>
              </div>
            </InfoItem>

            <SocialLinks />
          </Info>
        </Reveal>

        <Reveal delay={0.15}>
          <ContactForm />
        </Reveal>
      </Grid>
    </Section>
  )
}
