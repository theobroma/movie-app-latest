import { LanguageEnum } from '@/enums/language.enum';
import { LocaleEnum } from '@/enums/locale.enum';

const language2localeMap: Record<LanguageEnum, LocaleEnum> = {
  [LanguageEnum.UK]: LocaleEnum.uk_UA,
  [LanguageEnum.EN]: LocaleEnum.en_US,
};

export const language2locale = (language: LanguageEnum) =>
  language2localeMap[language];
