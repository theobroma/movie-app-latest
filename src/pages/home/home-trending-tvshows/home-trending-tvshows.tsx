import { nanoid } from '@reduxjs/toolkit';

import { Grid } from '@mui/material';

import { MediaCardSkeleton } from '@/entities/media/ui/MediaCard/MediaCardSkeleton/MediaCardSkeleton';
import { MediaCardTV } from '@/entities/media/ui/MediaCard/MediaCardTV/MediaCardTV';
import { useAppSelector } from '@/store/configureStore';
import { useTrendingTVQuery } from '@/store/trending/api';
import { timeWindowsSelector } from '@/store/trending/selectors';

import { HomeTrendingTvshowsLinks } from './home-trending-tvshows-links/home-trending-tvshows-links';

export const HomeTrendingTVShows = () => {
  const timeWindows = useAppSelector(timeWindowsSelector);
  const {
    data: tvData,
    // error,
    isError,
    isLoading,
    // isFetching,
  } = useTrendingTVQuery({
    page: 1,
    timeWindows,
  });
  // Slice just first 6
  const trendingTVShows = tvData?.results.slice(0, 6) || Array(6).fill('none');

  return (
    <Grid container spacing={2} sx={{ mt: '16px' }}>
      <HomeTrendingTvshowsLinks />
      {!isError &&
        trendingTVShows.length > 0 &&
        trendingTVShows.map((tvshow: any) => (
          <Grid item xs={6} sm={4} md={4} lg={2} key={nanoid()}>
            {isLoading ? (
              <MediaCardSkeleton />
            ) : (
              <MediaCardTV tvshow={tvshow} />
            )}
            {/* DON'T delete. usefull for skeleton debug */}
            {/* {idx % 2 === 0 ? (
              <MediaCardTV tvshow={tvshow} />
            ) : (
              <MediaCardSkeleton />
            )} */}
          </Grid>
        ))}
    </Grid>
  );
};
