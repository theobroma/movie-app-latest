import { Box, Pagination } from '@mui/material';
import { UsePaginationProps } from '@mui/material/usePagination/usePagination';

export const AppPagination = ({
  onChange,
  count = 10,
  page,
  ...rest
}: UsePaginationProps) => (
  <Box sx={{ display: 'flex', justifyContent: 'center', my: '12px' }}>
    <Pagination
      color="primary"
      page={page}
      onChange={onChange}
      count={count}
      {...rest}
    />
  </Box>
);
