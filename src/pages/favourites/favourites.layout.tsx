import { Outlet } from 'react-router-dom';

import { Box, Container, Grid } from '@mui/material';

import { FavouritesTabs } from './favourites-tabs/favourites-tabs';

const FavouritesLayout = () => (
  <Container maxWidth="lg">
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <FavouritesTabs />
      </Grid>
    </Grid>
    <Box sx={{ mt: 3 }}>
      <Outlet />
    </Box>
  </Container>
);

// eslint-disable-next-line import/no-default-export
export default FavouritesLayout;
