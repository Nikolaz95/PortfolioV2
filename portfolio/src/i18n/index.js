import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import en from './en'
import sv from './sv'

export const LANGUAGES = ['en', 'sv']
const STORAGE_KEY = 'portfolio-language'

// English is the default. If the visitor picked Swedish before, remember it.
function getSavedLanguage() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    return LANGUAGES.includes(saved) ? saved : 'en'
  } catch {
    return 'en'
  }
}

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    sv: { translation: sv },
  },
  lng: getSavedLanguage(),
  fallbackLng: 'en',
  interpolation: { escapeValue: false },
})

document.documentElement.lang = i18n.language

i18n.on('languageChanged', (lng) => {
  document.documentElement.lang = lng
  try {
    localStorage.setItem(STORAGE_KEY, lng)
  } catch {
    // Storage can be blocked (private mode) – the site still works, it just won't remember.
  }
})

export default i18n
