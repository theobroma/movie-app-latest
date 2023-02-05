import { Grid } from '@mui/material';

import { MediaTypeEnum } from '@/enums/media-type.enum';
import { useAppSelector } from '@/store/configureStore';
import { useTrendingMoviesQuery } from '@/store/trending/api';
import { timeWindowsSelector } from '@/store/trending/selectors';
import { MediaList } from '@/widgets/media-list/media-list';

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

  return (
    <Grid container spacing={2} sx={{ mt: 2 }}>
      <HomeTrendingMoviesLinks />
      <MediaList
        mediaData={moviesData}
        mediaType={MediaTypeEnum.Movie}
        itemsToShow={6}
        isError={isError}
        isFetching={isFetching}
        isSuccess={isSuccess}
        error={error}
      />
    </Grid>
  );
};
