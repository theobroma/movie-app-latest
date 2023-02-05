// https://mui.com/material-ui/react-pagination/#router-integration
import { useLocation } from 'react-router-dom';

import { Container } from '@mui/material';

import { MediaTypeEnum } from '@/enums/media-type.enum';
import { AppPagination } from '@/shared/uikit/AppPagination/AppPagination';
import { useTrendingTVQuery } from '@/store/trending/api';
import { MediaList } from '@/widgets/media-list/media-list';

const TrendingTvshowsPage = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const page = parseInt(query.get('page') || '1', 10);

  const {
    data: tvData,
    error,
    isError,
    isSuccess,
    isFetching,
  } = useTrendingTVQuery({
    page,
  });

  return (
    <Container maxWidth="lg">
      <span>TrendingTvshowsPage</span>
      <MediaList
        mediaData={tvData}
        mediaType={MediaTypeEnum.TV}
        isError={isError}
        isFetching={isFetching}
        isSuccess={isSuccess}
        error={error}
      />
      <AppPagination
        page={page}
        count={tvData?.totalPages}
        relativeBaseUrl="/trending/tv"
      />
    </Container>
  );
};

// eslint-disable-next-line import/no-default-export
export default TrendingTvshowsPage;
