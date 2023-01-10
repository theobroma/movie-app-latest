// https://bobbyhadz.com/blog/typescript-object-with-dynamic-keys

import { LanguageEnum } from '@/enums/language.enum';

const alpha2ISOMap: Record<LanguageEnum, string> = {
  uk: 'uk-UA',
  en: 'en-US',
};

export const alpha2iso = (code: LanguageEnum) => alpha2ISOMap[code];
