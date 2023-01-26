import { RootState } from '@/store/configureStore';
import { language2locale } from '@/utils/language2locale';

export const themeSelector = (state: RootState) => {
  return state.ui.theme;
};

export const languageSelector = (state: RootState) => {
  return state.ui.language;
};

export const localeSelector = (state: RootState) => {
  return language2locale(state.ui.language);
};
