/* eslint-disable @typescript-eslint/no-var-requires */
const countries = require('i18n-iso-countries');
// import all supported languages
countries.registerLocale(require('i18n-iso-countries/langs/en.json'));
countries.registerLocale(require('i18n-iso-countries/langs/uk.json'));
// eslint-disable-next-line import/no-default-export
export default countries;
