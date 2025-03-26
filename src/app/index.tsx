import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { initReactI18next } from 'react-i18next';

import { disableReactDevTools } from '@fvilers/disable-react-devtools';
import { ClickToComponent } from 'click-to-react-component';
import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';

import './index.css';

import { App } from './App';

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    debug: true,
    interpolation: {
      escapeValue: false,
    },
  });

if (import.meta.env.PROD) {
  disableReactDevTools();
}

const container = document.getElementById('root');
const root = createRoot(container as HTMLElement);

root.render(
  <StrictMode>
    <App />
    <ClickToComponent />
  </StrictMode>,
);
