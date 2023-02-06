import { Container } from '@mui/material';

import { CastPersons } from './cast-persons/cast-persons';

const CastPage = () => (
  <Container maxWidth="lg">
    <span>CastPage</span>
    <CastPersons />
  </Container>
);

// eslint-disable-next-line import/no-default-export
export default CastPage;
