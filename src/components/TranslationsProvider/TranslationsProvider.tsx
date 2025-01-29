"use client";

import { I18nextProvider } from 'react-i18next'
import i18next from "../../app/i18n";
import { ReactNode } from "react";

export default function TranslationsProvider({ children }: { children: ReactNode}) {
  return (
    <I18nextProvider i18n={i18next}>
      {children}
    </I18nextProvider>
  )
}
