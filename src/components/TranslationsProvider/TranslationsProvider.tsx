'use client';

import { I18nextProvider } from 'react-i18next'
import i18next from "../../app/i18n";
import { ReactNode } from "react";
/*
export const getStaticPaths = () => ({
  paths: availableLanguage.map(({ webLanguageCode }) => ({
    params: { lang: webLanguageCode }
  })),
  fallback: false
});

export const getStaticProps = () => ({ props: {} });
*/
export default function TranslationsProvider({ children }: { children: ReactNode}) {
  return (
    <I18nextProvider i18n={i18next}>
      {children}
    </I18nextProvider>
  )
}
