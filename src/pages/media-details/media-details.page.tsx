import { Container } from '@mui/material';

import { MediaDetailsSimilar } from './media-details-similar/media-details-similar';

const MediaDetailsPage = () => (
  <Container maxWidth="lg">
    <span>MediaDetailsPage</span>
    <br />
    <MediaDetailsSimilar />
  </Container>
);

// eslint-disable-next-line import/no-default-export
export default MediaDetailsPage;
