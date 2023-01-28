import { MediaTypeEnum } from '@/enums/media-type.enum';
import { API_KEY } from '@/shared/api/connection';
import { emptySplitApi } from '@/store/emptySplitApi';
import { TrailersResponseType } from '@/types';

const videosAPI = emptySplitApi.injectEndpoints({
  endpoints: (builder) => ({
    videos: builder.query<
      TrailersResponseType,
      { mediaType: MediaTypeEnum; mediaId: string }
    >({
      query: ({ mediaType, mediaId }) => ({
        url: `/${mediaType}/${mediaId}/videos?api_key=${API_KEY}`,
        method: 'get',
      }),
      // providesTags: ['Videos'],
    }),
  }),
  overrideExisting: false,
});

export const { useVideosQuery } = videosAPI;
