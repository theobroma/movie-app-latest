import { nanoid } from '@reduxjs/toolkit';
import { useParams } from 'react-router-dom';

import { Grid, Typography } from '@mui/material';

import { groupBy } from '@/shared/utils/arrays';
import { useVideosQuery } from '@/store/videos/api';
import { MediaDetailsRouteParams } from '@/types';

export const VideosContent = () => {
  //   const { classes } = useStyles();
  const { mediaId, mediaType } = useParams<
    keyof MediaDetailsRouteParams
  >() as MediaDetailsRouteParams;

  const {
    data,
    // error,
    // isError,
    // isLoading,
    isFetching,
  } = useVideosQuery({ mediaId: Number(mediaId), mediaType });

  const groupedVideos = groupBy(data?.results || [], 'type');

  console.log('groupedVideos', groupedVideos);

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={6} key={nanoid()}>
        <Typography component="h3" variant="h4">
          Videos Content&nbsp;
        </Typography>
        {/* {credits?.cast?.map((person) => (
          <Box mb={3} key={nanoid()}>
            <CastCard
              profilePath={person.profilePath}
              name={person.name}
              gender={person.gender}
              role={person.character}
            />
          </Box>
        ))} */}
      </Grid>
    </Grid>
  );
};
