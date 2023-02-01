import { MediaCard } from '@/entities/media/ui/MediaCard/MediaCard';
import { MediaTypeEnum } from '@/enums/media-type.enum';
import { useAppSelector } from '@/store/configureStore';
import { useDetailsMediaQuery } from '@/store/details/api';
import { localeSelector } from '@/store/ui/selectors';

interface Props {
  mediaId: number;
  mediaType: MediaTypeEnum;
}

export const MediaCardFetch = ({ mediaId, mediaType }: Props) => {
  const locale = useAppSelector(localeSelector);

  const {
    data,
    // error,
    // isError,
    // isSuccess,
    // isLoading,
    isFetching,
  } = useDetailsMediaQuery({ mediaId, mediaType, locale });

  return (
    <MediaCard
      media={data}
      isLoading={isFetching}
      parentMediaType={mediaType}
    />
  );
};
