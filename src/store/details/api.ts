import { MediaTypeEnum } from '@/enums/media-type.enum';
import { emptySplitApi } from '@/shared/api/emptySplitApi';

const detailsAPI = emptySplitApi.injectEndpoints({
  endpoints: (builder) => ({
    detailsMedia: builder.query<
      any,
      { mediaType: MediaTypeEnum; mediaId: number }
    >({
      query: ({ mediaType, mediaId }) => ({
        url: `/${mediaType}/${mediaId}`,
        method: 'get',
      }),
      // providesTags: ['DetailsMedia'],
    }),
  }),
  overrideExisting: false,
});

export const { useDetailsMediaQuery } = detailsAPI;
