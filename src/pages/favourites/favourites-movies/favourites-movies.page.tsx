import { nanoid } from '@reduxjs/toolkit';

import { Grid } from '@mui/material';

import { MediaTypeEnum } from '@/enums/media-type.enum';
import { favouritesMoviesSelector } from '@/features/favourites/store/selectors';
import { MediaCardFetch } from '@/features/media-card-fetch/media-card-fetch';
import { useAppSelector } from '@/store/configureStore';

const FavouritesMoviesPage = () => {
  const favouritesMovies = useAppSelector(favouritesMoviesSelector);

  return (
    <>
      <span>FavouritesMoviesPage</span>
      <Grid container spacing={2} sx={{ mt: '16px' }}>
        {favouritesMovies.map((movieId: any, idx: number) => (
          <Grid item xs={6} sm={4} md={4} lg={2} key={nanoid()}>
            <MediaCardFetch mediaId={movieId} mediaType={MediaTypeEnum.Movie} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};
// eslint-disable-next-line import/no-default-export
export default FavouritesMoviesPage;
