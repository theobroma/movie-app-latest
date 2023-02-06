import { MediaCardBase } from '@/entities/media/ui/MediaCard/MediaCardBase/MediaCardBase';
import { MediaTypeEnum } from '@/enums/media-type.enum';
import { TVEntityType } from '@/types';

interface Props {
  tvshow: TVEntityType;
}

export const MediaCardTV = ({ tvshow }: Props) => {
  const {
    id,
    name,
    originalName,
    originalLanguage,
    firstAirDate = '',
    voteAverage,
    posterPath,
  } = tvshow;

  const tvTitle = name || originalName || 'title';
  const tvOriginalTitle = originalName || 'title';
  const tvReleaseYear = firstAirDate.split('-')[0];

  return (
    <MediaCardBase
      id={id}
      mediaType={MediaTypeEnum.TV}
      originalLanguage={originalLanguage}
      originalTitle={tvOriginalTitle}
      posterPath={posterPath}
      releaseYear={tvReleaseYear}
      title={tvTitle}
      voteAverage={voteAverage}
    />
  );
};
