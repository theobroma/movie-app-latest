// https://mui.com/material-ui/react-pagination/#router-integration
import { useLocation, Link } from 'react-router-dom';

import { Container } from '@mui/material';
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';

const TrendingTvshowsPage = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const page = parseInt(query.get('page') || '1', 10);

  return (
    <Container maxWidth="lg">
      <span>TrendingTvshowsPage</span>
      <Pagination
        page={page}
        count={10}
        renderItem={(item) => (
          <PaginationItem
            component={Link}
            to={`/trending/tv/${item.page === 1 ? '' : `?page=${item.page}`}`}
            {...item}
          />
        )}
      />
    </Container>
  );
};

// eslint-disable-next-line import/no-default-export
export default TrendingTvshowsPage;
