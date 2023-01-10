import { createSlice } from '@reduxjs/toolkit';

import { ThemeColorsEnum } from '@/types';

export const uiInitialState = {
  theme: ThemeColorsEnum.LIGHT,
  language: 'uk' as any,
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
