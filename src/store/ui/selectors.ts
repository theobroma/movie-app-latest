import { RootState } from '@/store/configureStore';
import { alpha2iso } from '@/utils/alpha2iso';

export const themeSelector = (state: RootState) => {
  return state.ui.theme;
};

export const languageSelector = (state: RootState) => {
  return state.ui.language;
};

export const localeSelector = (state: RootState) => {
  return alpha2iso(state.ui.language);
};
