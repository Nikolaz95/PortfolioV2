import { useRef, useState } from 'react'
import { useMotionValue, useTransform } from 'motion/react'
import { useTranslation } from 'react-i18next'
import { HiCode, HiCollection, HiLightningBolt, HiLocationMarker } from 'react-icons/hi'
import { SiJavascript, SiMongodb, SiNodedotjs, SiReact, SiRedux } from 'react-icons/si'

import profile from '../../../assets/images/profile.webp'
import projects from '../../../data/projects'
import Barcode from './Barcode'
import {
  Card,
  CardFooter,
  CardHeader,
  Chip,
  Clip,
  DragHint,
  Fact,
  Facts,
  Hanger,
  IdNumber,
  Identity,
  Name,
  PassLabel,
  Photo,
  RoleText,
  Scene,
  Shine,
  Stack,
  Strap,
  Swing,
} from './ProfileBadge.styles'

const CODING_SINCE = 2022 // used for the ID number on the card
const MAX_DRAG = 35 // how far (px) the badge can be pulled to each side

// Small logos on the card
const STACK = [
  { name: 'React', icon: SiReact, color: '#61dafb' },
  { name: 'JavaScript', icon: SiJavascript, color: '#f7df1e' },
  { name: 'Node.js', icon: SiNodedotjs, color: '#5fa04e' },
  { name: 'MongoDB', icon: SiMongodb, color: '#47a248' },
  { name: 'Redux', icon: SiRedux, color: '#764abc' },
]

// Office-style ID badge hanging from a lanyard. Drag it sideways and it swings back.
export default function ProfileBadge() {
  const { t } = useTranslation()
  const [hasDragged, setHasDragged] = useState(false)
  const cardRef = useRef(null)

  // Dragging sideways tilts the badge, like pulling a real badge on a lanyard
  const x = useMotionValue(0)
  const rotate = useTransform(x, [-MAX_DRAG, MAX_DRAG], [5, -5])

  // Moves the shiny "hologram" light to where the mouse is on the card
  const moveShine = (event) => {
    const card = cardRef.current
    const rect = card.getBoundingClientRect()
    card.style.setProperty('--mx', `${((event.clientX - rect.left) / rect.width) * 100}%`)
    card.style.setProperty('--my', `${((event.clientY - rect.top) / rect.height) * 100}%`)
  }

  const facts = [
    { icon: HiLocationMarker, label: t('badge.location'), value: t('badge.locationValue') },
    { icon: HiCode, label: t('badge.focus'), value: t('badge.focusValue') },
    // Counted from src/data/projects.js, so it grows when you add a project
    { icon: HiCollection, label: t('badge.projects'), value: t('badge.projectsValue', { count: projects.length }) },
    { icon: HiLightningBolt, label: t('badge.available'), value: t('badge.availableValue') },
  ]

  return (
    // The badge drops in from above when the page loads
    <Scene
      initial={{ opacity: 0, y: -120 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: 'spring', stiffness: 80, damping: 11, delay: 0.3 }}
    >
      {/* Gentle idle swinging */}
      <Swing animate={{ rotate: [-1.5, 1.5, -1.5] }} transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}>
        <Hanger
          drag="x"
          // Can only be pulled a short way, so it never covers the text on the left
          dragConstraints={{ left: -MAX_DRAG, right: MAX_DRAG }}
          dragElastic={0.05}
          dragSnapToOrigin
          style={{ x, rotate }}
          onDragStart={() => setHasDragged(true)}
        >
          <Strap aria-hidden="true">
            <span>NIKOLA ZOVKO · DEVELOPER · NIKOLA ZOVKO · DEVELOPER</span>
          </Strap>
          <Clip aria-hidden="true" />

          <Card ref={cardRef} onPointerMove={moveShine}>
            <CardHeader>
              <strong>NZ.</strong>
              <PassLabel>{t('badge.pass')}</PassLabel>
              <Chip aria-hidden="true" />
            </CardHeader>

            <Identity>
              <Photo>
                <img src={profile} alt={t('hero.photoAlt')} width="540" height="720" draggable="false" />
              </Photo>
              <div>
                <Name>Nikola Zovko</Name>
                <RoleText>{t('badge.role')}</RoleText>
              </div>
            </Identity>

            <Stack>
              {STACK.map(({ name, icon: Icon, color }) => (
                <li key={name} title={name} style={{ color }}>
                  <Icon aria-label={name} />
                </li>
              ))}
            </Stack>

            <Facts>
              {facts.map(({ icon: Icon, label, value }) => (
                <Fact key={label}>
                  <Icon aria-hidden="true" />
                  <div>
                    <small>{label}</small>
                    <strong>{value}</strong>
                  </div>
                </Fact>
              ))}
            </Facts>

            <CardFooter>
              <Barcode value={`NIKOLA-ZOVKO-${CODING_SINCE}`} />
              <IdNumber>ID · NZ-{CODING_SINCE}-FE</IdNumber>
            </CardFooter>

            <Shine aria-hidden="true" />
          </Card>
        </Hanger>
      </Swing>

      <DragHint aria-hidden="true" animate={{ opacity: hasDragged ? 0 : 1 }}>
        ← {t('badge.dragHint')} →
      </DragHint>
    </Scene>
  )
}
