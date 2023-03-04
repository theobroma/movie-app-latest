import { Box, Container } from '@mui/material';

import { DetailsHeader } from '@/widgets/details-header/details-header';

const SeasonsPage = () => (
  <>
    <DetailsHeader />
    <Container maxWidth="lg">
      <Box sx={{ mt: 3 }}>SeasonsPage</Box>
    </Container>
  </>
);

// eslint-disable-next-line import/no-default-export
export default SeasonsPage;
