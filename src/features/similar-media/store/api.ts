import { createApi } from '@reduxjs/toolkit/query/react';

import { API_URL } from '@/api/connection';
import { MediaTypeEnum } from '@/enums/media-type.enum';

import { baseQuery } from './baseQuery';

export const similarAPI = createApi({
  baseQuery: baseQuery({
    baseUrl: `${API_URL}`,
  }),
  endpoints: (builder) => ({
    similarMedia: builder.query<
      any,
      { page?: number | void; mediaType: MediaTypeEnum; mediaId: string }
    >({
      query: ({ page = 1, mediaType, mediaId }) => ({
        url: `/${mediaType}/${mediaId}/similar?page=${page}`,
        method: 'get',
      }),
    }),
  }),
});

export const { useSimilarMediaQuery } = similarAPI;
