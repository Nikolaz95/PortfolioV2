import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { MotionConfig } from 'motion/react'

import './i18n'
import ThemeModeProvider from './context/ThemeModeProvider'
import GlobalStyles from './styles/GlobalStyles'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeModeProvider>
      {/* reducedMotion="user" turns animations off for people who asked for less motion */}
      <MotionConfig reducedMotion="user">
        <GlobalStyles />
        <App />
      </MotionConfig>
    </ThemeModeProvider>
  </StrictMode>,
)
