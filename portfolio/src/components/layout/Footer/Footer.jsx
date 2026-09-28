import { useTranslation } from 'react-i18next'
import { HiArrowUp } from 'react-icons/hi'

import SECTIONS from '../../../data/sections'
import { Container, GradientText } from '../../ui/Layout'
import { Bottom, Brand, FooterSocials, Links, ToTop, Top, Wrapper } from './Footer.styles'

export default function Footer() {
  const { t } = useTranslation()
  // Read from the visitor's clock every time the page loads, so it switches to 2027 by itself
  const year = new Date().getFullYear()

  return (
    <Wrapper>
      <Container>
        <Top>
          <Brand>
            <a href="#home">
              <GradientText>Nikola Zovko</GradientText>
            </a>
            <p>{t('footer.tagline')}</p>
          </Brand>

          <nav aria-label="Footer">
            <Links>
              {SECTIONS.map((id) => (
                <li key={id}>
                  <a href={`#${id}`}>{t(`nav.${id}`)}</a>
                </li>
              ))}
            </Links>
          </nav>

          <FooterSocials />
        </Top>

        <Bottom>
          <p>
            © {year} Nikola Zovko. {t('footer.rights')}
          </p>
          <ToTop href="#home">
            {t('footer.backToTop')} <HiArrowUp />
          </ToTop>
        </Bottom>
      </Container>
    </Wrapper>
  )
}
