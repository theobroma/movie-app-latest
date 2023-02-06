import { MediaCardBase } from '@/entities/media/ui/MediaCard/MediaCardBase/MediaCardBase';
import { MediaTypeEnum } from '@/enums/media-type.enum';
import { MovieEntityType } from '@/types';

interface Props {
  movie: MovieEntityType;
}

export const MediaCardMovie = ({ movie }: Props) => {
  const {
    id,
    title,
    originalTitle,
    originalLanguage,
    releaseDate = '',
    voteAverage,
    posterPath,
  } = movie;

  const movieTitle = title || originalTitle || 'title';
  const movieOriginalTitle = originalTitle || 'title';
  const movieReleaseYear = releaseDate.split('-')[0];

  return (
    <MediaCardBase
      id={id}
      mediaType={MediaTypeEnum.Movie}
      originalLanguage={originalLanguage}
      originalTitle={movieOriginalTitle}
      posterPath={posterPath}
      releaseYear={movieReleaseYear}
      title={movieTitle}
      voteAverage={voteAverage}
    />
  );
};
