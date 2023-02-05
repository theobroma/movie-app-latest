import { Grid } from '@mui/material';

import { MediaTypeEnum } from '@/enums/media-type.enum';
import { useAppSelector } from '@/store/configureStore';
import { useTrendingTVQuery } from '@/store/trending/api';
import { timeWindowsSelector } from '@/store/trending/selectors';
import { MediaList } from '@/widgets/media-list/media-list';

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

  return (
    <Grid container spacing={2} sx={{ mt: 2 }}>
      <HomeTrendingTvshowsLinks />
      <MediaList
        mediaData={tvData}
        mediaType={MediaTypeEnum.TV}
        itemsToShow={6}
        isError={isError}
        isFetching={isFetching}
        isSuccess={isSuccess}
        error={error}
      />
    </Grid>
  );
};
