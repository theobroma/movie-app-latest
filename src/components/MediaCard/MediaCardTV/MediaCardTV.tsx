import { MediaCardBase } from '@/components/MediaCard/MediaCardBase/MediaCardBase';
import { TVEntityType } from '@/types';

interface Props {
  tvshow: TVEntityType;
  parentMediaType?: string; // crutch for similar movies
}

export const MediaCardTV = ({ tvshow, parentMediaType }: Props) => {
  const {
    id,
    mediaType: tvMediaType,
    name,
    originalName,
    originalLanguage,
    firstAirDate = '',
    voteAverage,
    posterPath,
  } = tvshow;

  const mediaType = tvMediaType || parentMediaType;
  const tvTitle = name || originalName || 'title';
  const tvOriginalTitle = originalName || 'title';
  const tvReleaseYear = firstAirDate.split('-')[0];

  return (
    <MediaCardBase
      id={id}
      mediaType={mediaType}
      originalLanguage={originalLanguage}
      originalTitle={tvOriginalTitle}
      posterPath={posterPath}
      releaseYear={tvReleaseYear}
      title={tvTitle}
      voteAverage={voteAverage}
    />
  );
};
