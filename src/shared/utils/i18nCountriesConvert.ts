import { LanguageEnum } from '@/enums/language.enum';
import { ProductionCountryType } from '@/types';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const countries = require('i18n-iso-countries');

export const i18nCountriesConvert = (
  productionCountries: ProductionCountryType[],
  language: LanguageEnum,
) =>
  productionCountries
    ?.map((item: ProductionCountryType) => {
      return countries.getName(item.iso_3166_1, language, {
        // select: 'official',
        select: 'alias',
      });
    })
    .join(', ');
