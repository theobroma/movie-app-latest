import { Container } from '@mui/material';

import { MediaDetailsInfo } from './media-details-info/media-details-info';
import { MediaDetailsSimilar } from './media-details-similar/media-details-similar';

const MediaDetailsPage = () => (
  <Container maxWidth="lg">
    <MediaDetailsInfo />
    <MediaDetailsSimilar />
  </Container>
);

// eslint-disable-next-line import/no-default-export
export default MediaDetailsPage;
