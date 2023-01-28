import { Box, Skeleton } from '@mui/material';

export const MediaCardSkeleton = () => (
  <Box pt={0.5}>
    <Skeleton variant="rectangular" width="100%" height={260} />
    <Skeleton />
    <Skeleton width="60%" />
  </Box>
);
