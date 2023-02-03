import { MediaTypeEnum } from '@/enums/media-type.enum';
import { emptySplitApi } from '@/shared/api/emptySplitApi';
import { CreditsResponseType } from '@/types';

const creditsAPI = emptySplitApi.injectEndpoints({
  endpoints: (builder) => ({
    creditsMedia: builder.query<
      CreditsResponseType,
      { mediaType: MediaTypeEnum; mediaId: number }
    >({
      query: ({ mediaType, mediaId }) => ({
        url: `/${mediaType}/${mediaId}/credits`,
        method: 'get',
      }),
      // providesTags: ['CreditsMedia'],
    }),
  }),
  overrideExisting: false,
});

export const { useCreditsMediaQuery } = creditsAPI;
