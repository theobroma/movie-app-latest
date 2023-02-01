import { MediaInfoBase } from '@/entities/media/ui/MediaInfo/MediaInfoBase/MediaInfoBase';
import { MediaTypeEnum } from '@/enums/media-type.enum';
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
    genres,
    overview,
    voteAverage,
    tagline,
    // runtime,
  } = details;

  //   const mediaType = movieMediaType || parentMediaType || '';
  const tvTitle = name || originalName || 'title';
  //   const movieOriginalTitle = originalTitle || 'title';
  //   const movieReleaseYear = releaseDate.split('-')[0];

  // console.log('details :>> ', details);

  return (
    <MediaInfoBase
      mediaType={MediaTypeEnum.TV}
      mediaId={id}
      posterPath={posterPath}
      mediaTitle={tvTitle}
      productionCountries={productionCountries}
      mediaReleaseDate={firstAirDate}
      genres={genres}
      overview={overview}
      voteAverage={voteAverage}
      tagline={tagline}
      // runtime={runtime}
    />
  );
};
