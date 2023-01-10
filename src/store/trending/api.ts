import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { API_URL, API_KEY } from '@/api/connection';

export const trendingAPI = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: `${API_URL}`,
  }),
  endpoints: (builder) => ({
    trendingTV: builder.query<any, { page: number | void; isoCode: string }>({
      query: ({ page, isoCode }) =>
        `/trending/tv/week?page=${page}&api_key=${API_KEY}&language=${isoCode}`,
    }),
    trendingMovies: builder.query<
      any,
      { page: number | void; isoCode: string }
    >({
      query: ({ page, isoCode }) =>
        `/trending/movie/week?page=${page}&api_key=${API_KEY}&language=${isoCode}`,
    }),
  }),
});

export const { useTrendingTVQuery, useTrendingMoviesQuery } = trendingAPI;
