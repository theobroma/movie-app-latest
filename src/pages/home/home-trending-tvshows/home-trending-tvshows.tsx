import { nanoid } from '@reduxjs/toolkit';

import { Alert, Grid, Stack } from '@mui/material';

import { MediaCardSkeleton } from '@/entities/media/ui/MediaCard/MediaCardSkeleton/MediaCardSkeleton';
import { MediaCardTV } from '@/entities/media/ui/MediaCard/MediaCardTV/MediaCardTV';
import { AppError } from '@/shared/uikit/AppError/AppError';
import { isEmptyArray } from '@/shared/utils/is-data';
import { useAppSelector } from '@/store/configureStore';
import { useTrendingTVQuery } from '@/store/trending/api';
import { timeWindowsSelector } from '@/store/trending/selectors';

import { HomeTrendingTvshowsLinks } from './home-trending-tvshows-links/home-trending-tvshows-links';

export const HomeTrendingTVShows = () => {
  const timeWindows = useAppSelector(timeWindowsSelector);
  const {
    data: tvData,
    error,
    isError,
    isSuccess,
    isFetching,
  } = useTrendingTVQuery({
    page: 1,
    timeWindows,
  });
  // Slice just first 6
  const trendingTVShows = tvData?.results.slice(0, 6);
  const skeletons = Array(6).fill('none');

  return (
    <Grid container spacing={2} sx={{ mt: '16px' }}>
      <HomeTrendingTvshowsLinks />
      {!isError &&
        !isFetching &&
        !isEmptyArray(trendingTVShows) &&
        trendingTVShows?.map((tvshow) => (
          <Grid item xs={6} sm={4} md={4} lg={2} key={nanoid()}>
            <MediaCardTV tvshow={tvshow} />
          </Grid>
        ))}
      {isFetching &&
        skeletons.map(() => (
          <Grid item xs={6} sm={4} md={4} lg={2} key={nanoid()}>
            <MediaCardSkeleton />
          </Grid>
        ))}
      {/* no results */}
      {isSuccess && isEmptyArray(trendingTVShows) && (
        <Grid item xs={12}>
          <Stack sx={{ width: '100%' }} spacing={2}>
            <Alert severity="warning">There is no data</Alert>
          </Stack>
        </Grid>
      )}
      {/* error */}
      {isError && (
        <Grid item xs={12}>
          <AppError error={error} />
        </Grid>
      )}
    </Grid>
  );
};
