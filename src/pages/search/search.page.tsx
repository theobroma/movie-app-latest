import { Box, Container } from '@mui/material';

import { SearchContent } from './search-content/search-content';

const SearchPage = () => (
  <Container maxWidth="lg">
    <Box sx={{ mt: 3 }}>
      <SearchContent />
    </Box>
  </Container>
);

// eslint-disable-next-line import/no-default-export
export default SearchPage;
