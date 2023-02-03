import { nanoid } from '@reduxjs/toolkit';

import { Container, Box, Typography, Grid, Alert, Stack } from '@mui/material';

import { MediaCard } from '@/entities/media/ui/MediaCard/MediaCard';
import { MediaTypeEnum } from '@/enums/media-type.enum';
import { useSimilarMediaQuery } from '@/features/similar-media/store/api';
import { AppError } from '@/shared/uikit/AppError/AppError';

interface Props {
  mediaId: string;
  mediaType: MediaTypeEnum;
}

export const SimilarMedia = ({ mediaId, mediaType }: Props) => {
  const {
    data: similarMediaData,
    error,
    isError,
    isSuccess,
    isFetching,
  } = useSimilarMediaQuery({ mediaId, mediaType });

  // Slice just first 6
  const similarMedia =
    similarMediaData?.results?.slice(0, 6) || Array(6).fill('none'); // for skeletons;

  return (
    <Container maxWidth="lg">
      <Box py={4}>
        <Typography component="h3" variant="h4">
          Similar
          {/* <Trans i18nKey="Heading.Similar" /> */}
        </Typography>
        <Grid container spacing={2}>
          {/* results */}
          {!isError &&
            similarMedia.length > 0 &&
            similarMedia.map((media: any, idx: number) => (
              <Grid item xs={12} sm={4} md={3} lg={2} key={nanoid()}>
                <MediaCard
                  media={media}
                  isLoading={isFetching}
                  parentMediaType={mediaType}
                  // idx={idx}
                />
              </Grid>
            ))}
          {/* no results */}
          {isSuccess && similarMedia.length === 0 && (
            <Grid item xs={12}>
              <Stack sx={{ width: '100%' }} spacing={2}>
                <Alert severity="warning">There is no data</Alert>
              </Stack>
            </Grid>
          )}
          {/* error */}
          {isError && (
            <Grid item xs={12}>
              <AppError error={error} />
            </Grid>
          )}
        </Grid>
      </Box>
    </Container>
  );
};
