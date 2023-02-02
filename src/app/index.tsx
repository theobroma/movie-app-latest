import { Routing } from '@/pages';

import './addons/fonts';
import './addons/i18n-countries';
import './addons/interceptors';
import { withProviders } from './providers';

// I don't like idea of re-exporting scss that's weird IMHO that's why I'd go to styles folder
// import './styles/index.scss';

export const App = withProviders(() => <Routing />);
