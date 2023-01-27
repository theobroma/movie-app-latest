import { Provider } from 'react-redux';

import { store } from '@/store/configureStore';

export const withStore = (component: () => React.ReactNode) => () =>
  <Provider store={store}>{component()}</Provider>;
