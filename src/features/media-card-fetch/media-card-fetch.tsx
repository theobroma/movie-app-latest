import { MediaCard } from '@/entities/media/ui/MediaCard/MediaCard';
import { MediaTypeEnum } from '@/enums/media-type.enum';
import { useDetailsMediaQuery } from '@/store/details/api';

interface Props {
  mediaId: number;
  mediaType: MediaTypeEnum;
}

export const MediaCardFetch = ({ mediaId, mediaType }: Props) => {
  const { data, isFetching } = useDetailsMediaQuery({ mediaId, mediaType });

  return (
    <MediaCard
      media={data}
      isLoading={isFetching}
      parentMediaType={mediaType}
    />
  );
};
