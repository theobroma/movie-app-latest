import { LocaleEnum } from '@/enums/locale.enum';
import { TimeWindowsEnum } from '@/enums/time-windows.enum';
import { API_KEY } from '@/shared/api/connection';
import { emptySplitApi } from '@/shared/api/emptySplitApi';

const trendingAPI = emptySplitApi.injectEndpoints({
  endpoints: (builder) => ({
    trendingTV: builder.query<
      any,
      { page: number; timeWindows: TimeWindowsEnum; locale: LocaleEnum }
    >({
      query: ({ page, timeWindows, locale }) => ({
        url: `/trending/tv/${timeWindows}?page=${page}&api_key=${API_KEY}&language=${locale}`,
        method: 'get',
      }),
      // providesTags: ['TrendingTVs'],
    }),
    trendingMovies: builder.query<
      any,
      { page: number; timeWindows: TimeWindowsEnum; locale: LocaleEnum }
    >({
      query: ({ page, timeWindows, locale }) => ({
        url: `/trending/movie/${timeWindows}?page=${page}&api_key=${API_KEY}&language=${locale}`,
        method: 'get',
      }),
      // providesTags: ['TrendingMovies'],
    }),
  }),
  overrideExisting: false,
});

export const { useTrendingTVQuery, useTrendingMoviesQuery } = trendingAPI;
