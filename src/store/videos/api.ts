import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { API_KEY, API_URL } from '@/api/connection';
import { MediaTypeEnum } from '@/enums/media-type.enum';
import { TrailersResponseType } from '@/types';

export const videosAPI = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: `${API_URL}`,
  }),
  tagTypes: ['Videos'],
  endpoints: (builder) => ({
    videos: builder.query<
      TrailersResponseType,
      { mediaType: MediaTypeEnum; mediaId: string }
    >({
      query: ({ mediaType, mediaId }) => ({
        url: `/${mediaType}/${mediaId}/videos?api_key=${API_KEY}`,
        method: 'get',
      }),
      providesTags: ['Videos'],
    }),
  }),
});

export const { useVideosQuery } = videosAPI;
