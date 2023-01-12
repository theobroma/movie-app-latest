import { nanoid } from '@reduxjs/toolkit';
import { Link as RouterLink } from 'react-router-dom';

import { Grid } from '@mui/material';

import { MediaCard } from '@/components/MediaCard/MediaCard';
import { MediaCardSkeleton } from '@/components/MediaCard/MediaCardSkeleton/MediaCardSkeleton';
import { useAppSelector } from '@/store/configureStore';
import { useTrendingTVQuery } from '@/store/trending/api';
import { languageISOSelector } from '@/store/ui/selectors';

export const HomeTrendingTVShows = () => {
  const langISOCode = useAppSelector(languageISOSelector);
  const {
    data: moviesData,
    // error,
    isError,
    isLoading,
    // isFetching,
  } = useTrendingTVQuery({ page: 1, isoCode: langISOCode });
  // Slice just first 6
  const trendingTVShows =
    moviesData?.results.slice(0, 6) || Array(6).fill('none');

  console.log('trendingTVShows', trendingTVShows);

  return (
    <Grid container spacing={2}>
      {!isError &&
        trendingTVShows.length > 0 &&
        trendingTVShows.map((movie: any, idx: number) => (
          <Grid item xs={6} sm={4} md={4} lg={2} key={nanoid()}>
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
                {/* <MediaCard media={movie} /> */}
                MediaCard
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
    </Grid>
  );
};
