import { nanoid } from '@reduxjs/toolkit';
import { useParams } from 'react-router-dom';

import { Grid, Box } from '@mui/material';

import { SearchItem } from '@/pages/search/search-content/search-item/search-item';
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

  console.log('mediaDetailsData.seasons :>> ', mediaDetailsData?.seasons);

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} key={nanoid()}>
        {/* {mediaDetailsData.seasons.map((item: any) => (
          <Box mb={3} key={nanoid()}>
            <SearchItem data={item} />
          </Box>
        ))} */}
      </Grid>
    </Grid>
  );
};
