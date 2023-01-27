import { LanguageEnum } from '@/enums/language.enum';
import { ThemeEnum } from '@/enums/theme.enum';

import { setThemeAC, setLanguageAC, uiSlice, uiInitialState } from './slice';

const uiReducer = uiSlice.reducer;

describe('counter reducer sync actions', () => {
  it('should handle initial state', () => {
    expect(uiReducer(undefined, { type: 'unknown' })).toEqual(uiInitialState);
  });

  it('should handle setTheme', () => {
    const newTheme = ThemeEnum.Dark;
    const actual = uiReducer(uiInitialState, setThemeAC(newTheme));
    expect(actual.theme).toEqual(newTheme);
  });

  it('should handle setLanguage', () => {
    const newLanguage = LanguageEnum.EN;
    const actual = uiReducer(uiInitialState, setLanguageAC(newLanguage));
    expect(actual.language).toEqual(newLanguage);
  });
});
