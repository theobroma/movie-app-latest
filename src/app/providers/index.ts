import compose from 'compose-function';

import { withRouter } from './with-router';
import { withSnackbar } from './with-snackbar';
import { withStore } from './with-store';
import { withTheme } from './with-theme';

export const withProviders = compose(
  withRouter,
  withSnackbar,
  withTheme,
  withStore,
);
