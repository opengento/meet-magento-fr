"use client";

import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import resourcesToBackend from 'i18next-resources-to-backend'

i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(resourcesToBackend((language: string, namespace: string) =>
    import(`/public/locales/${language}/${namespace}.json`)
  ))
  .init({
    defaultNS: 'common',
    fallbackLng: 'fr',
    supportedLngs: ['fr', 'en'],
    lng: 'fr', // default language
    ns: ['common', 'hero', 'place', 'speakers', 'sponsors'],
    interpolation: {
      escapeValue: false,
    },
  })

export default i18next
