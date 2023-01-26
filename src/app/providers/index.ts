import compose from 'compose-function';

// import { withQuery } from './with-query';
import { withRouter } from './with-router';
// import { withStore } from './with-router';

export const withProviders = compose(
  // withQuery,
  withRouter,
  //   withStore
);
