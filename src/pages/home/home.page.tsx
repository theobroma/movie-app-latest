import { Container, Box } from '@mui/material';

import { HomeTrendingMovies } from './home-trending-movies/home-trending-movies';
import { HomeTrendingTVShows } from './home-trending-tvshows/home-trending-tvshows';

const HomePage = () => (
  <Container maxWidth="lg">
    <Box>HomePage</Box>
    <HomeTrendingMovies />
    <HomeTrendingTVShows />
  </Container>
);

// eslint-disable-next-line import/no-default-export
export default HomePage;
