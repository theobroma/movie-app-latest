import pMinDelay from 'p-min-delay';
import { lazy } from 'react';
import { Outlet, Route, Routes } from 'react-router-dom';

const MIN_LAZY_DELAY = 300;

const AppLayout = lazy(() => pMinDelay(import('./app.layout'), MIN_LAZY_DELAY));
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
const FavouritesLayout = lazy(() =>
  pMinDelay(import('./favourites/favourites.layout'), MIN_LAZY_DELAY),
);
const FavouritesMoviesPage = lazy(() =>
  pMinDelay(
    import('./favourites/favourites-movies/favourites-movies.page'),
    MIN_LAZY_DELAY,
  ),
);
const FavouritesTvshowsPage = lazy(() =>
  pMinDelay(
    import('./favourites/favourites-tvshows/favourites-tvshows.page'),
    MIN_LAZY_DELAY,
  ),
);
const MediaDetailsPage = lazy(() =>
  pMinDelay(import('@/pages/media-details/media-details.page'), MIN_LAZY_DELAY),
);
const CastPage = lazy(() =>
  pMinDelay(import('@/pages/cast/cast.page'), MIN_LAZY_DELAY),
);
const VideosPage = lazy(() =>
  pMinDelay(import('@/pages/videos/videos.page'), MIN_LAZY_DELAY),
);

export const Routing = () => (
  <Routes>
    <Route path="/" element={<AppLayout />}>
      <Route index element={<HomePage />} />
      <Route
        path="/details/:mediaType/:mediaId"
        element={<MediaDetailsPage />}
      />
      <Route path="/details/:mediaType/:mediaId/cast" element={<CastPage />} />
      <Route
        path="/details/:mediaType/:mediaId/videos"
        element={<VideosPage />}
      />
      {/* Trending */}
      <Route path="trending" element={<Outlet />}>
        <Route path="movies" element={<TrendingMoviesPage />} />
        <Route path="tv" element={<TrendingTvshowsPage />} />
        {/* <Route index element={<div>Click any tab.</div>} /> */}
      </Route>
      {/* Favourites */}
      <Route path="favourites" element={<FavouritesLayout />}>
        <Route path="movies" element={<FavouritesMoviesPage />} />
        <Route path="tv" element={<FavouritesTvshowsPage />} />
        <Route index element={<div>Click any tab.</div>} />
      </Route>
      <Route path="*" element={<div>Not Found</div>} />
    </Route>
  </Routes>
);
