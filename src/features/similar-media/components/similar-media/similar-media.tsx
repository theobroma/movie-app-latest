import { nanoid } from '@reduxjs/toolkit';
// import { useEffect } from 'react';

import { Container, Box, Typography, Grid, Alert, Stack } from '@mui/material';

import { AppError } from '@/atoms/AppError/AppError';
import { MediaCard } from '@/components/MediaCard/MediaCard';
import { MediaTypeEnum } from '@/enums/media-type.enum';
import { useSimilarMediaQuery } from '@/features/similar-media/store/api';
// import { similarMediaSelector } from '@/features/similar-media/store/selectors';
// import { getSimilarMediaTC } from '@/features/similar-media/store/slice';
import { useAppDispatch, useAppSelector } from '@/store/configureStore';
import { languageISOSelector } from '@/store/ui/selectors';

interface Props {
  mediaId: string;
  mediaType: MediaTypeEnum;
}

export const SimilarMedia = ({ mediaId, mediaType }: Props) => {
  const dispatch = useAppDispatch();
  // just for useEffect refetch if changed
  const langISOCode = useAppSelector(languageISOSelector);
  const {
    data: similarMediaData,
    error,
    isError,
    isSuccess,
    isLoading,
    // isFetching,
  } = useSimilarMediaQuery({ mediaId, mediaType });

  // const {
  //   data: { results },
  //   error,
  //   isError,
  //   isLoading,
  //   isSuccess,
  // } = useAppSelector(similarMediaSelector);

  // useEffect(() => {
  //   if (mediaId && mediaType) {
  //     dispatch(getSimilarMediaTC({ mediaId, mediaType }));
  //   }
  // }, [dispatch, mediaId, mediaType, langISOCode]);

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
                  isLoading={isLoading}
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
