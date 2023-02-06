// https://redux-toolkit.js.org/rtk-query/usage/code-splitting
// https://github.com/reduxjs/redux-toolkit/issues/1510#issuecomment-953571681
import { createApi } from '@reduxjs/toolkit/query/react';

import { API_URL } from '@/shared/api/connection';

import { baseQuery } from './baseQuery';

// initialize an empty api service that we'll inject endpoints into later as needed
export const emptySplitApi = createApi({
  baseQuery: baseQuery({ baseUrl: `${API_URL}` }),
  // tagTypes: ['Videos', 'TrendingTVs', 'TrendingMovies'],
  endpoints: () => ({}),
});
