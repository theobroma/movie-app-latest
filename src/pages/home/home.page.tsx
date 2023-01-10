import { Container, Box } from '@mui/material';

import { HomeTrendingMovies } from './home-trending-movies/home-trending-movies';

const HomePage = () => (
  <Container maxWidth="lg">
    <Box>HomePage</Box>
    <HomeTrendingMovies />
  </Container>
);

// eslint-disable-next-line import/no-default-export
export default HomePage;
