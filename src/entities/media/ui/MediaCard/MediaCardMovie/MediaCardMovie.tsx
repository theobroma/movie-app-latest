import { MediaCardBase } from '@/entities/media/ui/MediaCard/MediaCardBase/MediaCardBase';
import { MovieEntityType } from '@/types';

interface Props {
  movie: MovieEntityType;
  parentMediaType?: string; // crutch for similar movies
}

export const MediaCardMovie = ({ movie, parentMediaType }: Props) => {
  const {
    id,
    mediaType: movieMediaType,
    title,
    originalTitle,
    originalLanguage,
    releaseDate = '',
    voteAverage,
    posterPath,
  } = movie;

  const mediaType = movieMediaType || parentMediaType || '';
  const movieTitle = title || originalTitle || 'title';
  const movieOriginalTitle = originalTitle || 'title';
  const movieReleaseYear = releaseDate.split('-')[0];

  return (
    <MediaCardBase
      id={id}
      mediaType={mediaType}
      originalLanguage={originalLanguage}
      originalTitle={movieOriginalTitle}
      posterPath={posterPath}
      releaseYear={movieReleaseYear}
      title={movieTitle}
      voteAverage={voteAverage}
    />
  );
};
