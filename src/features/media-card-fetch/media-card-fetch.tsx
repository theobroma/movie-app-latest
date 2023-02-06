/* eslint-disable no-nested-ternary */
import { MediaCardMovie } from '@/entities/media/ui/MediaCard/MediaCardMovie/MediaCardMovie';
import { MediaCardSkeleton } from '@/entities/media/ui/MediaCard/MediaCardSkeleton/MediaCardSkeleton';
import { MediaCardTV } from '@/entities/media/ui/MediaCard/MediaCardTV/MediaCardTV';
import { MediaTypeEnum } from '@/enums/media-type.enum';
import { useDetailsMediaQuery } from '@/store/details/api';

interface Props {
  mediaId: number;
  mediaType: MediaTypeEnum;
}

export const MediaCardFetch = ({ mediaId, mediaType }: Props) => {
  const { data, isFetching } = useDetailsMediaQuery({ mediaId, mediaType });

  return (
    <>
      {isFetching ? (
        <MediaCardSkeleton />
      ) : mediaType === MediaTypeEnum.Movie ? (
        <MediaCardMovie movie={data} />
      ) : (
        <MediaCardTV tvshow={data} />
      )}
    </>
  );
};
