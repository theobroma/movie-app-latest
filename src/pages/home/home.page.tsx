import { Container } from '@mui/material';

import { HomeTrendingMovies } from './home-trending-movies/home-trending-movies';
import { HomeTrendingTabs } from './home-trending-tabs/home-trending-tabs';
import { HomeTrendingTVShows } from './home-trending-tvshows/home-trending-tvshows';

const HomePage = () => (
  <Container maxWidth="lg">
    <HomeTrendingTabs />
    <HomeTrendingMovies />
    <HomeTrendingTVShows />
  </Container>
);

// eslint-disable-next-line import/no-default-export
export default HomePage;
