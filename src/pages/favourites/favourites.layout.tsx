import { Outlet } from 'react-router-dom';

import { Container, Grid } from '@mui/material';

import { FavouritesTabs } from './favourites-tabs/favourites-tabs';

const FavouritesLayout = () => (
  <Container maxWidth="lg">
    <Grid container spacing={3}>
      {/* TABS */}
      <Grid item xs={12}>
        <FavouritesTabs />
      </Grid>
      {/* CONTENT */}
      <Outlet />
    </Grid>
  </Container>
);

// eslint-disable-next-line import/no-default-export
export default FavouritesLayout;
