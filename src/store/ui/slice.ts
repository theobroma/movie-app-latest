import { createSlice } from '@reduxjs/toolkit';

import { LanguageEnum } from '@/enums/language.enum';
import { ThemeEnum } from '@/enums/theme.enum';

export const uiInitialState = {
  theme: ThemeEnum.Light,
  language: LanguageEnum.UK,
};

export const uiSlice = createSlice({
  name: 'ui',
  initialState: uiInitialState,
  reducers: {
    setThemeAC(state, action) {
      state.theme = action.payload;
    },
    setLanguageAC(state, action) {
      state.language = action.payload;
    },
  },
});

export const { setThemeAC, setLanguageAC } = uiSlice.actions;
