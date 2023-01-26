import { RootState } from '@/store/configureStore';
import { language2Locale } from '@/utils/alpha2iso';

export const themeSelector = (state: RootState) => {
  return state.ui.theme;
};

export const languageSelector = (state: RootState) => {
  return state.ui.language;
};

export const localeSelector = (state: RootState) => {
  return language2Locale(state.ui.language);
};
