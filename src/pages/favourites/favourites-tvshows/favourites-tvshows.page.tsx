import { nanoid } from '@reduxjs/toolkit';

import { Grid } from '@mui/material';

import { MediaTypeEnum } from '@/enums/media-type.enum';
import { MediaCardFetch } from '@/features/media-card-fetch/media-card-fetch';
import { useAppSelector } from '@/store/configureStore';
import { favouritesTVSelector } from '@/store/favourites/selectors';

const FavouritesTvshowsPage = () => {
  const favouritesTV = useAppSelector(favouritesTVSelector);

  return (
    <>
      <span>FavouritesMoviesPage</span>
      <Grid container spacing={2} sx={{ mt: '16px' }}>
        {favouritesTV.map((tvId: any, idx: number) => (
          <Grid item xs={6} sm={4} md={4} lg={2} key={nanoid()}>
            <MediaCardFetch mediaId={tvId} mediaType={MediaTypeEnum.TV} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};
// eslint-disable-next-line import/no-default-export
export default FavouritesTvshowsPage;
