import { LocaleEnum } from '@/enums/locale.enum';
import { MediaTypeEnum } from '@/enums/media-type.enum';
import { emptySplitApi } from '@/shared/api/emptySplitApi';

const detailsAPI = emptySplitApi.injectEndpoints({
  endpoints: (builder) => ({
    detailsMedia: builder.query<
      any,
      { mediaType: MediaTypeEnum; mediaId: number; locale: LocaleEnum }
    >({
      query: ({ mediaType, mediaId, locale }) => ({
        url: `/${mediaType}/${mediaId}?language=${locale}`,
        method: 'get',
      }),
      // providesTags: ['DetailsMedia'],
    }),
  }),
  overrideExisting: false,
});

export const { useDetailsMediaQuery } = detailsAPI;
