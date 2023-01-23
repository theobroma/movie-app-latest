import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { API_URL, API_KEY } from '@/api/connection';
import { TimeWindowsEnum } from '@/enums/time-windows.enum';

import { moviedbBaseQuery } from './axiosBaseQuery';

export const trendingAPI = createApi({
  baseQuery: moviedbBaseQuery({
    baseUrl: `${API_URL}`,
  }),
  tagTypes: ['TrendingTVs', 'TrendingMovies'],
  endpoints: (builder) => ({
    trendingTV: builder.query<
      any,
      { page: number | void; timeWindows: TimeWindowsEnum; isoCode: string }
    >({
      query: ({ page, timeWindows, isoCode }) => ({
        url: `/trending/tv/week?page=${page}&time_window=${timeWindows}&api_key=${API_KEY}&language=${isoCode}`,
        method: 'get',
      }),
      providesTags: ['TrendingTVs'],
    }),
    trendingMovies: builder.query<
      any,
      { page: number | void; timeWindows: TimeWindowsEnum; isoCode: string }
    >({
      query: ({ page, timeWindows, isoCode }) => ({
        url: `/trending/movie/week?page=${page}&time_window=${timeWindows}&api_key=${API_KEY}&language=${isoCode}`,
        method: 'get',
      }),
      providesTags: ['TrendingMovies'],
    }),
  }),
});

export const { useTrendingTVQuery, useTrendingMoviesQuery } = trendingAPI;
