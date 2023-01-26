import { LocaleEnum } from '@/enums/locale.enum';
import { MediaTypeEnum } from '@/enums/media-type.enum';
import { emptySplitApi } from '@/store/emptySplitApi';

const detailsAPI = emptySplitApi.injectEndpoints({
  endpoints: (builder) => ({
    detailsMedia: builder.query<
      any,
      { mediaType: MediaTypeEnum; mediaId: string; locale: LocaleEnum }
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
