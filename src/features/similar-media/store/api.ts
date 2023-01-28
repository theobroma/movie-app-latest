import { MediaTypeEnum } from '@/enums/media-type.enum';
import { emptySplitApi } from '@/shared/api/emptySplitApi';

const similarAPI = emptySplitApi.injectEndpoints({
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
  overrideExisting: false,
});

export const { useSimilarMediaQuery } = similarAPI;
