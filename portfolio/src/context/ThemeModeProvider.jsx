import { useEffect, useMemo, useState } from 'react'
import { ThemeProvider } from 'styled-components'

import { darkTheme, lightTheme } from '../styles/theme'
import { THEME_STORAGE_KEY, ThemeModeContext } from './themeModeContext'

// Light is the default. If the visitor switched to dark before, remember it.
function getSavedMode() {
  try {
    return localStorage.getItem(THEME_STORAGE_KEY) === 'dark' ? 'dark' : 'light'
  } catch {
    return 'light'
  }
}

export default function ThemeModeProvider({ children }) {
  const [mode, setMode] = useState(getSavedMode)

  useEffect(() => {
    document.documentElement.dataset.theme = mode
    document.documentElement.style.background = ''
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', mode === 'dark' ? '#07080f' : '#f6f6fb')
    try {
      localStorage.setItem(THEME_STORAGE_KEY, mode)
    } catch {
      // Storage can be blocked (private mode) – the toggle still works for this visit.
    }
  }, [mode])

  const value = useMemo(
    () => ({ mode, toggleMode: () => setMode((m) => (m === 'light' ? 'dark' : 'light')) }),
    [mode],
  )

  return (
    <ThemeModeContext.Provider value={value}>
      <ThemeProvider theme={mode === 'dark' ? darkTheme : lightTheme}>{children}</ThemeProvider>
    </ThemeModeContext.Provider>
  )
}
