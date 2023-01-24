// https://bobbyhadz.com/blog/typescript-object-with-dynamic-keys

import { LanguageEnum } from '@/enums/language.enum';
import { LocaleEnum } from '@/enums/locale.enum';

const alpha2ISOMap: Record<LanguageEnum, LocaleEnum> = {
  uk: LocaleEnum.uk_UA,
  en: LocaleEnum.en_US,
};

export const alpha2iso = (code: LanguageEnum) => alpha2ISOMap[code];
