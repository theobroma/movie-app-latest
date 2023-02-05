// https://mui.com/material-ui/react-pagination/#router-integration
import { useLocation, Link } from 'react-router-dom';

import { Container } from '@mui/material';
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';

import { MediaTypeEnum } from '@/enums/media-type.enum';
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
      <span>TrendingTvshowsPage</span>
      <MediaList
        mediaData={moviesData}
        mediaType={MediaTypeEnum.Movie}
        isError={isError}
        isFetching={isFetching}
        isSuccess={isSuccess}
        error={error}
      />
      <Pagination
        page={page}
        count={moviesData?.totalPages}
        renderItem={(item) => (
          <PaginationItem
            component={Link}
            to={`/trending/movies${
              item.page === 1 ? '' : `?page=${item.page}`
            }`}
            {...item}
          />
        )}
      />
    </Container>
  );
};

// eslint-disable-next-line import/no-default-export
export default TrendingMoviesPage;
