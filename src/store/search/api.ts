import { emptySplitApi } from '@/shared/api/emptySplitApi';

const apiWithTag = emptySplitApi.enhanceEndpoints({ addTagTypes: ['Search'] });

const searchAPI = apiWithTag.injectEndpoints({
  endpoints: (builder) => ({
    search: builder.query<
      any,
      {
        searchText: string;
        page?: number | void;
      }
    >({
      query: ({ page = 1, searchText }) => ({
        url: `/search/multi?query=${searchText}&page=${page}`,
        method: 'get',
      }),
      providesTags: ['Search'],
    }),
  }),
  overrideExisting: false,
});

export const { useSearchQuery } = searchAPI;
