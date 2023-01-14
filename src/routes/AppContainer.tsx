import pMinDelay from 'p-min-delay';
import { lazy, Suspense } from 'react';
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';

import { PageLoader } from '@/atoms/page-loader/page-loader';

const MIN_LAZY_DELAY = 300;

const AppLayout = lazy(() => pMinDelay(import('./AppLayout'), MIN_LAZY_DELAY));
const HomePage = lazy(() =>
  pMinDelay(import('@/pages/home/home.page'), MIN_LAZY_DELAY),
);
const TrendingMoviesPage = lazy(() =>
  pMinDelay(
    import('@/pages/trending/trending-movies/trending-movies.page'),
    MIN_LAZY_DELAY,
  ),
);
const TrendingTvshowsPage = lazy(() =>
  pMinDelay(
    import('@/pages/trending/trending-tvshows/trending-tvshows.page'),
    MIN_LAZY_DELAY,
  ),
);

export const AppContainer = () => (
  <Suspense fallback={<PageLoader />}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<HomePage />} />
          {/* Trending */}
          <Route path="trending" element={<Outlet />}>
            <Route path="movies" element={<TrendingMoviesPage />} />
            <Route path="tv" element={<TrendingTvshowsPage />} />
            {/* <Route index element={<div>Click any tab.</div>} /> */}
          </Route>
          <Route path="*" element={<div>Not Found</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  </Suspense>
);
