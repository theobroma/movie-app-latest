import { useParams } from 'react-router-dom';

import { MediaDetailsRouteParams } from '@/types';
import { SimilarMediaList } from '@/widgets/similar-media-list/similar-media-list';

export const MediaDetailsSimilar = () => {
  const { mediaId, mediaType } = useParams<
    keyof MediaDetailsRouteParams
  >() as MediaDetailsRouteParams;

  return <SimilarMediaList mediaId={mediaId} mediaType={mediaType} />;
};
