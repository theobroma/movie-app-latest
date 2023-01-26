import { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
// import { QueryParamProvider } from 'use-query-params';
// import { ReactRouter6Adapter } from 'use-query-params/adapters/react-router-6';

import { PageLoader } from '@/atoms/page-loader/page-loader';

export const withRouter = (component: () => React.ReactNode) => () =>
  (
    <BrowserRouter>
      <Suspense fallback={<PageLoader />}>
        {/* <QueryParamProvider adapter={ReactRouter6Adapter}>
          {component()}
        </QueryParamProvider> */}
        {component()}
      </Suspense>
    </BrowserRouter>
  );
