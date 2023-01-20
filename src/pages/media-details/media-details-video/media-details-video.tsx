import { useParams } from 'react-router-dom';

import { MediaDetailsRouteParams } from '@/pages/media-details/media-details.interface';
import { useVideosQuery } from '@/store/videos/api';

export const MediaDetailsVideo = () => {
  const { mediaId, mediaType } = useParams<
    keyof MediaDetailsRouteParams
  >() as MediaDetailsRouteParams;

  const {
    data,
    // error,
    isError,
    isLoading,
    // isFetching,
  } = useVideosQuery({ mediaId, mediaType });

  console.log('data :>> ', data);

  return (
    <div>
      <span>MediaDetailsVideo</span>
    </div>
  );
};
