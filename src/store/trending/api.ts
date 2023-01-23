import { API_KEY } from '@/api/connection';
import { TimeWindowsEnum } from '@/enums/time-windows.enum';
import { emptySplitApi } from '@/store/emptySplitApi';

// export const { useTrendingTVQuery, useTrendingMoviesQuery } = trendingAPI;

const trendingAPI = emptySplitApi.injectEndpoints({
  endpoints: (builder) => ({
    trendingTV: builder.query<
      any,
      { page: number | void; timeWindows: TimeWindowsEnum; isoCode: string }
    >({
      query: ({ page, timeWindows, isoCode }) => ({
        url: `/trending/tv/${timeWindows}?page=${page}&api_key=${API_KEY}&language=${isoCode}`,
        method: 'get',
      }),
      // providesTags: ['TrendingTVs'],
    }),
    trendingMovies: builder.query<
      any,
      { page: number | void; timeWindows: TimeWindowsEnum; isoCode: string }
    >({
      query: ({ page, timeWindows, isoCode }) => ({
        url: `/trending/movie/${timeWindows}?page=${page}&api_key=${API_KEY}&language=${isoCode}`,
        method: 'get',
      }),
      // providesTags: ['TrendingMovies'],
    }),
  }),
  overrideExisting: false,
});

export const { useTrendingTVQuery, useTrendingMoviesQuery } = trendingAPI;
