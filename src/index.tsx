import './wdyr'; // <--- first import
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { App } from '@/app/index';

import * as serviceWorker from './serviceWorker';
import './index.css';

// Open Source fonts
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

// TODO: mb move to app folder
/* eslint-disable @typescript-eslint/no-var-requires */
const countries = require('i18n-iso-countries');
// import all supported languages
countries.registerLocale(require('i18n-iso-countries/langs/en.json'));
countries.registerLocale(require('i18n-iso-countries/langs/uk.json'));
/* eslint-enable @typescript-eslint/no-var-requires */

const container = document.getElementById('root') as HTMLDivElement;
const root = createRoot(container);
root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
