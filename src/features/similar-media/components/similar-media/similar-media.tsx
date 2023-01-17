import { nanoid } from '@reduxjs/toolkit';
import { useEffect } from 'react';

import { Container, Box, Typography, Grid } from '@mui/material';

import { MediaCardMovie } from '@/components/MediaCard/MediaCardMovie/MediaCardMovie';
import { MediaCardSkeleton } from '@/components/MediaCard/MediaCardSkeleton/MediaCardSkeleton';
import { MediaTypeEnum } from '@/enums/media-type.enum';
import { similarMediaSelector } from '@/features/similar-media/store/selectors';
import { getSimilarMediaTC } from '@/features/similar-media/store/slice';
import { useAppDispatch, useAppSelector } from '@/store/configureStore';
import { languageISOSelector } from '@/store/ui/selectors';
// import { useSimilarMediaQuery } from '@/features/similar-media/store/api';

interface Props {
  mediaId: string;
  mediaType: MediaTypeEnum;
}

export const SimilarMedia = ({ mediaId, mediaType }: Props) => {
  // const {
  //   data,
  //   // error,
  //   isError,
  //   isLoading,
  //   // isFetching,
  // } = useSimilarMediaQuery({ mediaId, mediaType });

  // console.log('data :>> ', data);
  const dispatch = useAppDispatch();
  const {
    data: { results = [] },
    // error,
    isError,
    isLoading,
    // isSuccess,
  } = useAppSelector(similarMediaSelector);
  // just for useEffect refetch if changed
  const langISOCode = useAppSelector(languageISOSelector);

  useEffect(() => {
    if (mediaId && mediaType) {
      dispatch(getSimilarMediaTC({ mediaId, mediaType }));
    }
  }, [dispatch, mediaId, mediaType, langISOCode]);

  console.log('results :>> ', results);

  return (
    <Container maxWidth="lg">
      <Box py={4}>
        <Typography component="h3" variant="h4">
          Similar
          {/* <Trans i18nKey="Heading.Similar" /> */}
        </Typography>
        <Grid
          container
          //  spacing={3}
          // style={{ padding: 3 }}
        >
          {/* results */}
          {!isError &&
            results.map((media: any) => (
              <Grid item xs={12} sm={4} md={3} lg={2} key={nanoid()}>
                {isLoading ? (
                  <MediaCardSkeleton />
                ) : (
                  <MediaCardMovie movie={media} parentMediaType={mediaType} />
                )}
              </Grid>
            ))}
          {/* no results */}
          {/* {!!isSuccess && resultsToShow.length === 0 && (
            <Grid item xs={12}>
              <EmptyBlock>There is no data</EmptyBlock>
            </Grid>
          )} */}
          {/* error */}
          {/* {!!isError && (
            <Grid item xs={12}>
              <AppAlert variant="standard" severity="error">
                {error}
              </AppAlert>
            </Grid>
          )} */}
        </Grid>
      </Box>
    </Container>
  );
};
