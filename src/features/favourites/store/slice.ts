import { createSlice } from '@reduxjs/toolkit';

export const favouritesInitialState = {
  tvshows: [100088] as Array<number>,
  movies: [877703] as Array<number>,
};

export const favouritesSlice = createSlice({
  name: 'favourites',
  initialState: favouritesInitialState,
  reducers: {
    toggleMediaFavoriteAC(state, action) {
      const { id, mediaType } = action.payload;
      console.log('action.payload :>> ', action.payload);
      //   const index = state.favoriteMediaIds.findIndex(
      //     (element) => element.id === id && element.mediaType === mediaType,
      //   );
      //   const isFavorite = index !== -1;

      //   if (isFavorite) {
      //     state.favoriteMediaIds.splice(index, 1);
      //   } else {
      //     state.favoriteMediaIds.push({ id, mediaType });
      //   }
    },
    // setThemeAC(state, action) {
    //   state.theme = action.payload;
    // },
    // setLanguageAC(state, action) {
    //   state.language = action.payload;
    // },
  },
});

// export const { setThemeAC, setLanguageAC } = favouritesSlice.actions;
