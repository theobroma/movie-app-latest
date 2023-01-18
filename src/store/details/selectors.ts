import { RootState } from '@/store/configureStore';

export const mediaDetailsSelector = (state: RootState) => {
  return state.details;
};
