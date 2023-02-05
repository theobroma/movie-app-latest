// https://mui.com/material-ui/react-pagination/#router-integration
import { useLocation } from 'react-router-dom';

import { Container } from '@mui/material';

import { MediaTypeEnum } from '@/enums/media-type.enum';
import { AppPagination } from '@/shared/uikit/AppPagination/AppPagination';
import { useTrendingMoviesQuery } from '@/store/trending/api';
import { MediaList } from '@/widgets/media-list/media-list';

const TrendingMoviesPage = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const page = parseInt(query.get('page') || '1', 10);

  const {
    data: moviesData,
    error,
    isError,
    isSuccess,
    isFetching,
  } = useTrendingMoviesQuery({
    page,
  });

  return (
    <Container maxWidth="lg">
      <span>TrendingMoviesPage</span>
      <MediaList
        mediaData={moviesData}
        mediaType={MediaTypeEnum.Movie}
        isError={isError}
        isFetching={isFetching}
        isSuccess={isSuccess}
        error={error}
      />
      <AppPagination
        page={page}
        count={moviesData?.totalPages}
        relativeBaseUrl="/trending/movies"
      />
    </Container>
  );
};

// eslint-disable-next-line import/no-default-export
export default TrendingMoviesPage;
