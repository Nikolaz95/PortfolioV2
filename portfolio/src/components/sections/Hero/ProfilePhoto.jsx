import { SiJavascript, SiNodedotjs, SiReact } from 'react-icons/si'

import profile from '../../../assets/images/profile.webp'
import { EASE_OUT } from '../../../styles/animations'
import { FloatingBadge, Photo, PhotoWrap, Ring } from './ProfilePhoto.styles'

// Small logos floating around the photo
const floatingBadges = [
  { icon: SiReact, color: '#61dafb', position: { top: '4%', left: '-4%' } },
  { icon: SiJavascript, color: '#f7df1e', position: { top: '42%', right: '-8%' } },
  { icon: SiNodedotjs, color: '#5fa04e', position: { bottom: '2%', left: '8%' } },
]

// Round photo with a spinning gradient ring and floating tech logos
export default function ProfilePhoto({ alt }) {
  return (
    <PhotoWrap
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.9, ease: EASE_OUT, delay: 0.2 }}
    >
      <Ring />
      <Photo>
        <img src={profile} alt={alt} width="540" height="720" />
      </Photo>

      {floatingBadges.map(({ icon: Icon, color, position }, i) => (
        <FloatingBadge
          key={i}
          style={{ ...position, color }}
          aria-hidden="true"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1, y: [0, -12, 0] }}
          transition={{
            opacity: { delay: 0.8 + i * 0.15 },
            scale: { delay: 0.8 + i * 0.15 },
            y: { duration: 4, repeat: Infinity, ease: 'easeInOut', delay: i * 0.8 },
          }}
        >
          <Icon />
        </FloatingBadge>
      ))}
    </PhotoWrap>
  )
}
