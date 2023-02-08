import { Box, Container } from '@mui/material';

import { DetailsHeader } from '@/widgets/details-header/details-header';

const VideosPage = () => (
  <>
    <DetailsHeader />
    <Container maxWidth="lg">
      <Box sx={{ mt: 3 }}>
        videos
        {/* <CastPersons /> */}
      </Box>
    </Container>
  </>
);

// eslint-disable-next-line import/no-default-export
export default VideosPage;
