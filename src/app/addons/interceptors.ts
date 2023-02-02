// https://axios-http.com/docs/interceptors
import { axiosInstance } from '@/shared/api/connection';
import { language2locale } from '@/shared/utils/language2locale';
import { store } from '@/store/configureStore';

// Request interceptors for API calls
axiosInstance.interceptors.request.use(
  (config) => {
    // grab current state
    const state = store.getState();
    config.params.language = language2locale(state.ui.language);
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);
// eslint-disable-next-line import/no-default-export
export default axiosInstance;
