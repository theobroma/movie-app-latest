import { createSlice } from '@reduxjs/toolkit';

export const favouritesInitialState = {
  tvshows: [] as Array<number>,
  movies: [] as Array<number>,
};

export const favouritesSlice = createSlice({
  name: 'favourites',
  initialState: favouritesInitialState,
  reducers: {
    toggleFavouriteMovieAC(state, action) {
      const { mediaId } = action.payload;
      if (state.movies.includes(mediaId)) {
        state.movies = state.movies.filter((el) => el !== mediaId);
      } else {
        state.movies.push(mediaId);
      }
    },
    toggleFavouriteTVshowAC(state, action) {
      const { mediaId } = action.payload;
      if (state.tvshows.includes(mediaId)) {
        state.tvshows = state.tvshows.filter((el) => el !== mediaId);
      } else {
        state.tvshows.push(mediaId);
      }
    },
  },
});

export const { toggleFavouriteMovieAC, toggleFavouriteTVshowAC } =
  favouritesSlice.actions;
