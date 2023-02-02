import { nanoid } from '@reduxjs/toolkit';

import { Alert, Grid, Stack } from '@mui/material';

import { MediaCardMovie } from '@/entities/media/ui/MediaCard/MediaCardMovie/MediaCardMovie';
import { MediaCardSkeleton } from '@/entities/media/ui/MediaCard/MediaCardSkeleton/MediaCardSkeleton';
import { AppError } from '@/shared/uikit/AppError/AppError';
import { isEmptyArray } from '@/shared/utils/is-data';
import { useAppSelector } from '@/store/configureStore';
import { useTrendingMoviesQuery } from '@/store/trending/api';
import { timeWindowsSelector } from '@/store/trending/selectors';

import { HomeTrendingMoviesLinks } from './home-trending-movies-links/home-trending-movies-links';

export const HomeTrendingMovies = () => {
  const timeWindows = useAppSelector(timeWindowsSelector);
  const {
    data: moviesData,
    error,
    isError,
    isSuccess,
    isFetching,
  } = useTrendingMoviesQuery({ page: 1, timeWindows });
  // Slice just first 6
  const trendingMovies = moviesData?.results.slice(0, 6);
  const skeletons = Array(6).fill('none');

  return (
    <Grid container spacing={2} sx={{ mt: '16px' }}>
      <HomeTrendingMoviesLinks />
      {!isError &&
        !isFetching &&
        !isEmptyArray(trendingMovies) &&
        trendingMovies?.map((movie: any) => (
          <>
            <Grid item xs={6} sm={4} md={4} lg={2} key={nanoid()}>
              <MediaCardMovie movie={movie} />
            </Grid>
            {/* <Grid item xs={6} sm={4} md={4} lg={2} key={nanoid()}>
              <MediaCardSkeleton />
            </Grid> */}
          </>
        ))}
      {isFetching &&
        skeletons.map(() => (
          <Grid item xs={6} sm={4} md={4} lg={2} key={nanoid()}>
            <MediaCardSkeleton />
          </Grid>
        ))}
      {/* no results */}
      {isSuccess && isEmptyArray(trendingMovies) && (
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
