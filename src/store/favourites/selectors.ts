import { createSelector } from '@reduxjs/toolkit';

import { RootState } from '@/store/configureStore';

export const favouritesTVSelector = (state: RootState) => {
  return state.favourites.tvshows;
};

export const favouritesMoviesSelector = (state: RootState) => {
  return state.favourites.movies;
};

export const favouritesCountSelector = createSelector(
  favouritesTVSelector,
  favouritesMoviesSelector,
  (tv, movies) => tv.length + movies.length,
);
