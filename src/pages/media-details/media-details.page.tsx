import { MediaDetailsInfo } from './media-details-info/media-details-info';
import { MediaDetailsSimilar } from './media-details-similar/media-details-similar';
import { MediaDetailsVideo } from './media-details-video/media-details-video';

const MediaDetailsPage = () => (
  <>
    <MediaDetailsInfo />
    <MediaDetailsVideo />
    <MediaDetailsSimilar />
  </>
);

// eslint-disable-next-line import/no-default-export
export default MediaDetailsPage;
