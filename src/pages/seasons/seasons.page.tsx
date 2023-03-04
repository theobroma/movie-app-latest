import { Box, Container } from '@mui/material';

import { DetailsHeader } from '@/widgets/details-header/details-header';

import { SeasonsList } from './seasons-list/seasons-list';

const SeasonsPage = () => (
  <>
    <DetailsHeader />
    <Container maxWidth="lg">
      <Box sx={{ mt: 3 }}>
        <SeasonsList />
      </Box>
    </Container>
  </>
);

// eslint-disable-next-line import/no-default-export
export default SeasonsPage;
