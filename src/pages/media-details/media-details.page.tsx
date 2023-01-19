import { Container } from '@mui/material';

import { MediaDetailsInfo } from './media-details-info/media-details-info';
import { MediaDetailsSimilar } from './media-details-similar/media-details-similar';
import { MediaDetailsVideo } from './media-details-video/media-details-video';

const MediaDetailsPage = () => (
  <Container maxWidth="lg">
    <MediaDetailsInfo />
    <MediaDetailsVideo />
    <MediaDetailsSimilar />
  </Container>
);

// eslint-disable-next-line import/no-default-export
export default MediaDetailsPage;
