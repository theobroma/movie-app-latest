// https://redux-toolkit.js.org/rtk-query/usage/code-splitting
// Or from '@reduxjs/toolkit/query' if not using the auto-generated hooks
import { createApi } from '@reduxjs/toolkit/query/react';

import { API_URL } from '@/api/connection';

import { baseQuery } from './baseQuery';

// initialize an empty api service that we'll inject endpoints into later as needed
export const emptySplitApi = createApi({
  baseQuery: baseQuery({ baseUrl: `${API_URL}` }),
  //   tagTypes: ['Videos', 'TrendingTVs', 'TrendingMovies'],
  endpoints: () => ({}),
});
