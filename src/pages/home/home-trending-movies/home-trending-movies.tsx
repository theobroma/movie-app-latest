import { nanoid } from '@reduxjs/toolkit';

import { Grid } from '@mui/material';

import { MediaCardMovie } from '@/entities/media/ui/MediaCard/MediaCardMovie/MediaCardMovie';
import { MediaCardSkeleton } from '@/entities/media/ui/MediaCard/MediaCardSkeleton/MediaCardSkeleton';
import { useAppSelector } from '@/store/configureStore';
import { useTrendingMoviesQuery } from '@/store/trending/api';
import { timeWindowsSelector } from '@/store/trending/selectors';

import { HomeTrendingMoviesLinks } from './home-trending-movies-links/home-trending-movies-links';

export const HomeTrendingMovies = () => {
  const timeWindows = useAppSelector(timeWindowsSelector);
  const {
    data: moviesData,
    // error,
    isError,
    isLoading,
    // isFetching,
  } = useTrendingMoviesQuery({ page: 1, timeWindows });
  // Slice just first 6
  const trendingMovies =
    moviesData?.results.slice(0, 6) || Array(6).fill('none'); // for skeletons;

  return (
    <Grid container spacing={2} sx={{ mt: '16px' }}>
      <HomeTrendingMoviesLinks />
      {!isError &&
        trendingMovies.length > 0 &&
        trendingMovies.map((movie: any) => (
          <Grid item xs={6} sm={4} md={4} lg={2} key={nanoid()}>
            {isLoading ? (
              <MediaCardSkeleton />
            ) : (
              <MediaCardMovie movie={movie} />
            )}
            {/* DON'T delete. usefull for skeleton debug */}
            {/* {idx % 2 === 0 ? (
              <MediaCardMovie movie={movie} />
            ) : (
              <MediaCardSkeleton />
            )} */}
          </Grid>
        ))}
    </Grid>
  );
};
