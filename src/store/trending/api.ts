import { TimeWindowsEnum } from '@/enums/time-windows.enum';
import { emptySplitApi } from '@/shared/api/emptySplitApi';
import { TVResponseType, MoviesResponseType } from '@/types';

const trendingAPI = emptySplitApi.injectEndpoints({
  endpoints: (builder) => ({
    trendingTV: builder.query<
      TVResponseType,
      { page?: number; timeWindows?: TimeWindowsEnum }
    >({
      query: ({ page = 1, timeWindows = TimeWindowsEnum.Week }) => ({
        url: `/trending/tv/${timeWindows}?page=${page}`,
        method: 'get',
      }),
      // providesTags: ['TrendingTVs'],
    }),
    trendingMovies: builder.query<
      MoviesResponseType,
      { page?: number; timeWindows?: TimeWindowsEnum }
    >({
      query: ({ page = 1, timeWindows = TimeWindowsEnum.Week }) => ({
        url: `/trending/movie/${timeWindows}?page=${page}`,
        method: 'get',
      }),
      // providesTags: ['TrendingMovies'],
    }),
  }),
  overrideExisting: false,
});

export const { useTrendingTVQuery, useTrendingMoviesQuery } = trendingAPI;
