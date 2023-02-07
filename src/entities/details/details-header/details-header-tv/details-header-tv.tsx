import { DetailsHeaderBase } from '@/entities/details/details-header/details-header-base/details-header-base';
import { MediaTypeEnum } from '@/enums/media-type.enum';
import { DetailsTVType } from '@/types';

interface Props {
  mediaId: number;
  tvshow: DetailsTVType;
}

export const DetailsHeaderTV = ({
  tvshow = {} as DetailsTVType,
  mediaId,
}: Props) => {
  const { name, originalName, firstAirDate = '', posterPath } = tvshow;

  const tvTitle = name || originalName || 'title';
  const releaseYear = firstAirDate.split('-')[0];

  return (
    <DetailsHeaderBase
      mediaId={mediaId}
      mediaType={MediaTypeEnum.TV}
      mediaTitle={tvTitle}
      releaseYear={releaseYear}
      posterPath={posterPath}
    />
  );
};
