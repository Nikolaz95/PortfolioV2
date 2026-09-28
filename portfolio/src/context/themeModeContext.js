import { createContext, useContext } from 'react'

export const THEME_STORAGE_KEY = 'portfolio-theme'

export const ThemeModeContext = createContext({ mode: 'light', toggleMode: () => {} })

// Use in any component: const { mode, toggleMode } = useThemeMode()
export function useThemeMode() {
  return useContext(ThemeModeContext)
}
