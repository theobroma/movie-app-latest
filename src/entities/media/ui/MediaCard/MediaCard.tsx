/* eslint-disable no-nested-ternary */
// import { MovieEntityType, TVEntityType } from '@/types';

import { MediaTypeEnum } from '@/enums/media-type.enum';

import { MediaCardMovie } from './MediaCardMovie/MediaCardMovie';
import { MediaCardSkeleton } from './MediaCardSkeleton/MediaCardSkeleton';
import { MediaCardTV } from './MediaCardTV/MediaCardTV';

interface Props {
  //   media: MovieEntityType | TVEntityType;
  media: any;
  isLoading: boolean;
  parentMediaType: string; // crutch for similar movies
  idx?: number; // for skeleton debug
}

export const MediaCard = ({
  media,
  isLoading,
  parentMediaType,
  idx,
}: Props) => (
  <>
    {isLoading ? (
      <MediaCardSkeleton />
    ) : parentMediaType === MediaTypeEnum.Movie ? (
      <MediaCardMovie movie={media} parentMediaType={parentMediaType} />
    ) : (
      <MediaCardTV tvshow={media} parentMediaType={parentMediaType} />
    )}
    {/* for skeleton debug */}
    {/* {idx % 2 === 0 ? <MediaCardMovie movie={movie} /> : <MediaCardSkeleton />} */}
  </>
);
