// https://axios-http.com/docs/interceptors
// https://stackoverflow.com/questions/35637770/how-to-avoid-no-param-reassign-when-setting-a-property-on-a-dom-object
import { axiosInstance } from '@/shared/api/connection';
import { language2locale } from '@/shared/utils/language2locale';
import { store } from '@/store/configureStore';

// Request interceptors for API calls
axiosInstance.interceptors.request.use(
  (config) => {
    const newConfig = { ...config }; // decouple instance
    // grab current state
    const state = store.getState();
    newConfig.params.language = language2locale(state.ui.language); // assign a property
    return newConfig; // replace original with new instance
  },
  (error) => {
    return Promise.reject(error);
  },
);
// eslint-disable-next-line import/no-default-export
export default axiosInstance;
