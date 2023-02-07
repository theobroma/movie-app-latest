import { DetailsHeaderBase } from '@/entities/details/details-header/details-header-base/details-header-base';
import { MediaTypeEnum } from '@/enums/media-type.enum';
import { DetailsMovieType } from '@/types';

interface Props {
  mediaId: number;
  movie: DetailsMovieType;
}

export const DetailsHeaderMovie = ({
  movie = {} as DetailsMovieType,
  mediaId,
}: Props) => {
  const { title, originalTitle, releaseDate = '', posterPath } = movie;

  const movieTitle = title || originalTitle || 'title';
  const releaseYear = releaseDate.split('-')[0];

  return (
    <DetailsHeaderBase
      mediaId={mediaId}
      mediaType={MediaTypeEnum.Movie}
      mediaTitle={movieTitle}
      releaseYear={releaseYear}
      posterPath={posterPath}
    />
  );
};
