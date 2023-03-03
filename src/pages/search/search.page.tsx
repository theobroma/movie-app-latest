import { Box, Container } from '@mui/material';

import { SearchInput } from './search-input/search-input';

const SearchPage = () => (
  <Container maxWidth="lg">
    <Box sx={{ mt: 3 }}>
      <SearchInput />
    </Box>
  </Container>
);

// eslint-disable-next-line import/no-default-export
export default SearchPage;
