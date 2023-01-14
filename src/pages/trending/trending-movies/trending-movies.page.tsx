import { Container } from '@mui/material';

import { AppPagination } from '@/components/AppPagination/AppPagination';

const TrendingMoviesPage = () => (
  <Container maxWidth="lg">
    <span>TrendingMoviesPage</span>
    <AppPagination />
  </Container>
);

// eslint-disable-next-line import/no-default-export
export default TrendingMoviesPage;
