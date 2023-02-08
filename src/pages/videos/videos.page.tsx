import { Box, Container } from '@mui/material';

import { DetailsHeader } from '@/widgets/details-header/details-header';

import { VideosContent } from './videos-content/videos-content';

const VideosPage = () => (
  <>
    <DetailsHeader />
    <Container maxWidth="lg">
      <Box sx={{ mt: 3 }}>
        <VideosContent />
      </Box>
    </Container>
  </>
);

// eslint-disable-next-line import/no-default-export
export default VideosPage;
