import { Box, Container } from '@mui/material';

import { DetailsHeader } from '@/widgets/details-header/details-header';

import { CastPersons } from './cast-persons/cast-persons';

const CastPage = () => (
  <>
    <DetailsHeader />
    <Container maxWidth="lg">
      <Box sx={{ mt: 3 }}>
        <CastPersons />
      </Box>
    </Container>
  </>
);

// eslint-disable-next-line import/no-default-export
export default CastPage;
