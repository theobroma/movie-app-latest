import { nanoid } from '@reduxjs/toolkit';
import { Link as RouterLink } from 'react-router-dom';

import { Grid } from '@mui/material';

import { MediaCard } from '@/components/MediaCard/MediaCard';
import { MediaCardSkeleton } from '@/components/MediaCard/MediaCardSkeleton/MediaCardSkeleton';
import { useAppSelector } from '@/store/configureStore';
import { useTrendingMoviesQuery } from '@/store/trending/api';
import { languageISOSelector } from '@/store/ui/selectors';

export const HomeTrendingMovies = () => {
  const langISOCode = useAppSelector(languageISOSelector);
  const {
    data: moviesData,
    // error,
    isError,
    isLoading,
    // isFetching,
  } = useTrendingMoviesQuery({ page: 1, isoCode: langISOCode });
  // Slice just first 6
  const trendingMovies =
    moviesData?.results.slice(0, 6) || Array(6).fill('none');

  console.log('trendingMovies', trendingMovies);

  return (
    <>
      {!isError &&
        trendingMovies.length > 0 &&
        trendingMovies.map((movie: any, idx: number) => (
          <Grid item xs={12} md={6} lg={4} key={nanoid()}>
            {isLoading ? (
              <MediaCardSkeleton />
            ) : (
              <RouterLink
                key={movie.uuid}
                to={`/cryptocurrencies/${movie.uuid}`}
                style={{
                  textDecoration: 'none',
                }}
              >
                <MediaCard media={movie} />
              </RouterLink>
            )}
            {/* DON'T delete. usefull for skeleton debug */}
            {/* {idx % 2 === 0 ? (
               <MediaCard media={movie} />
            ) : (
              <MediaCardSkeleton />
            )} */}
          </Grid>
        ))}
    </>
  );
};
