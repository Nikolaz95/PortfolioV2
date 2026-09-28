import { FaGithub } from 'react-icons/fa'

import { GmailLogo, LinkedInLogo } from '../components/icons/BrandLogos'

export const EMAIL = 'nikolajoe95@gmail.com'
export const GITHUB_URL = 'https://github.com/Nikolaz95'

// GitHub's logo is black/white, so it follows the text color (black in light mode, white in dark)
const social = [
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/nikola-zovko-a50779247/', icon: LinkedInLogo },
  { name: 'Gmail', href: `mailto:${EMAIL}`, icon: GmailLogo },
  { name: 'GitHub', href: GITHUB_URL, icon: FaGithub },
]

export default social
