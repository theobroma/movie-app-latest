import { LocaleEnum } from '@/enums/locale.enum';
import { MediaTypeEnum } from '@/enums/media-type.enum';
import { emptySplitApi } from '@/shared/api/emptySplitApi';

const creditsAPI = emptySplitApi.injectEndpoints({
  endpoints: (builder) => ({
    creditsMedia: builder.query<
      any,
      { mediaType: MediaTypeEnum; mediaId: string; locale: LocaleEnum }
    >({
      query: ({ mediaType, mediaId, locale }) => ({
        url: `/${mediaType}/${mediaId}/credits?language=${locale}`,
        method: 'get',
      }),
      // providesTags: ['CreditsMedia'],
    }),
  }),
  overrideExisting: false,
});

export const { useCreditsMediaQuery } = creditsAPI;
