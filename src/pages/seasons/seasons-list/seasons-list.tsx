import { nanoid } from '@reduxjs/toolkit';
import { useParams } from 'react-router-dom';

import { Grid, Box } from '@mui/material';

import { SeasonsCard } from '@/entities/seasons/seasons-card/seasons-card';
import { useDetailsMediaQuery } from '@/store/details/api';
import { MediaDetailsRouteParams } from '@/types';

export const SeasonsList = () => {
  const { mediaId, mediaType } = useParams<
    keyof MediaDetailsRouteParams
  >() as MediaDetailsRouteParams;

  const { data: mediaDetailsData, isFetching } = useDetailsMediaQuery({
    mediaId: Number(mediaId),
    mediaType,
  });

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} key={nanoid()}>
        {mediaDetailsData?.seasons.map((item: any) => (
          <Box mb={3} key={nanoid()}>
            <SeasonsCard season={item} />
          </Box>
        ))}
      </Grid>
    </Grid>
  );
};
