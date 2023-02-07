import { useParams } from 'react-router-dom';

import { DetailsHeaderMovie } from '@/entities/details/details-header/details-header-movie/details-header-movie';
import { useDetailsMediaQuery } from '@/store/details/api';
import { MediaDetailsRouteParams } from '@/types';

export const DetailsHeader = () => {
  const { mediaId, mediaType } = useParams<
    keyof MediaDetailsRouteParams
  >() as MediaDetailsRouteParams;

  const { data, isFetching } = useDetailsMediaQuery({
    mediaId: Number(mediaId),
    mediaType,
  });

  return <DetailsHeaderMovie movie={data} mediaId={Number(mediaId)} />;
};
