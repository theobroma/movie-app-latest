import { useParams } from 'react-router-dom';

import { SimilarMedia } from '@/features/similar-media/components/similar-media/similar-media';
import { MediaDetailsRouteParams } from '@/pages/media-details/media-details.interface';

export const MediaDetailsSimilar = () => {
  const { mediaId, mediaType } = useParams<
    keyof MediaDetailsRouteParams
  >() as MediaDetailsRouteParams;

  return (
    <>
      <span>Similar</span>
      <SimilarMedia mediaId={mediaId} mediaType={mediaType} />
      <br />
      mediaId:{mediaId}
      <br />
      mediaType :{mediaType}
    </>
  );
};
