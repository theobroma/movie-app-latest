import { MediaInfoBase } from '@/entities/media/ui/MediaInfo/MediaInfoBase/MediaInfoBase';
import { DetailsTVType } from '@/types';

interface Props {
  details: DetailsTVType;
}

export const MediaInfoTV = ({ details }: Props) => {
  const {
    id,
    name,
    originalName,
    posterPath,
    productionCountries,
    firstAirDate,
  } = details;

  //   const mediaType = movieMediaType || parentMediaType || '';
  const tvTitle = name || originalName || 'title';
  //   const movieOriginalTitle = originalTitle || 'title';
  //   const movieReleaseYear = releaseDate.split('-')[0];

  // console.log('details :>> ', details);

  return (
    <MediaInfoBase
      posterPath={posterPath}
      mediaTitle={tvTitle}
      productionCountries={productionCountries}
      mediaReleaseDate={firstAirDate}
    />
  );
};
