// example - https://github.com/theobroma/rtk-query-toptal-example/blob/41ea72e4ad62ff6ec4a1e2a8f84b17301f7577e0/src/shared/redux/store.ts
import { combineReducers, configureStore, Reducer } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { createLogger } from 'redux-logger';

// import { similarAPI } from '@/features/similar-media/store/api';

import { similarSlice } from '@/features/similar-media/store/slice';

import { detailsSlice } from './details/slice';
import { trendingAPI } from './trending/api';
import { trendingSlice } from './trending/slice';
import { uiSlice } from './ui/slice';
import { videosAPI } from './videos/api';
// import { RESET_STATE_ACTION_TYPE } from './actions/resetState';

const logger = createLogger({
  collapsed: true,
});

const reducers = {
  // Slices
  [detailsSlice.name]: detailsSlice.reducer,
  [similarSlice.name]: similarSlice.reducer,
  [trendingSlice.name]: trendingSlice.reducer,
  [uiSlice.name]: uiSlice.reducer,
  // API
  // [similarAPI.reducerPath]: similarAPI.reducer,
  [trendingAPI.reducerPath]: trendingAPI.reducer,
  [videosAPI.reducerPath]: videosAPI.reducer,
};

const combinedReducer = combineReducers<typeof reducers>(reducers);

export const rootReducer: Reducer<RootState> = (state, action) => {
  //   if (action.type === RESET_STATE_ACTION_TYPE) {
  //     state = {} as RootState;
  //   }

  return combinedReducer(state, action);
};

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
      logger,
      // similarAPI.middleware,
      // trendingAPI.middleware,
      videosAPI.middleware,
    ]),
  // devTools: process.env.NODE_ENV === 'development',
  devTools: true,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof combinedReducer>;

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
