import { RootState } from '@/store/configureStore';

export const timeWindowsSelector = (state: RootState) => {
  return state.trending;
};
