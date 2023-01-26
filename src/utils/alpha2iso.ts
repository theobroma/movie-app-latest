import { LanguageEnum } from '@/enums/language.enum';
import { LocaleEnum } from '@/enums/locale.enum';

const language2LocaleMap: Record<LanguageEnum, LocaleEnum> = {
  [LanguageEnum.UK]: LocaleEnum.uk_UA,
  [LanguageEnum.EN]: LocaleEnum.en_US,
};

export const language2Locale = (language: LanguageEnum) =>
  language2LocaleMap[language];
