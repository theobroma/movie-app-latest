import { MediaInfoBase } from '@/entities/media/ui/MediaInfo/MediaInfoBase/MediaInfoBase';
import { DetailsMovieType } from '@/types';

interface Props {
  details: DetailsMovieType;
}

export const MediaInfoMovie = ({ details }: Props) => {
  const {
    id,
    title,
    originalTitle,
    posterPath,
    productionCountries,
    releaseDate,
    genres,
  } = details;

  //   const mediaType = movieMediaType || parentMediaType || '';
  const movieTitle = title || originalTitle || 'title';
  //   const movieOriginalTitle = originalTitle || 'title';
  //   const movieReleaseYear = releaseDate.split('-')[0];

  // console.log('details :>> ', details);

  return (
    <MediaInfoBase
      posterPath={posterPath}
      mediaTitle={movieTitle}
      productionCountries={productionCountries}
      mediaReleaseDate={releaseDate}
      genres={genres}
    />
  );
};
