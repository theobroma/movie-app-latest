import { nanoid } from '@reduxjs/toolkit';

import { Box, Grid } from '@mui/material';

import { MediaTypeEnum } from '@/enums/media-type.enum';
import { groupBy } from '@/shared/utils/arrays';
import { useSearchQuery } from '@/store/search/api';

import { SearchItem } from './search-item/search-item';

interface Props {
  data: any;
  isFetching: any;
}

export const SearchContent = ({ data, isFetching }: Props) => {
  const groupedData = groupBy(data?.results || [], 'mediaType');
  const moviesData = groupedData[MediaTypeEnum.Movie] || [];

  //   console.log('data :>> ', data);
  //   console.log('groupedData :>> ', groupedData);
  //   console.log('moviesData :>> ', moviesData);

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} key={nanoid()}>
        {moviesData.map((item) => (
          <Box mb={3} key={nanoid()}>
            {/* TODO: tmp just movies */}
            <SearchItem data={item} />
          </Box>
        ))}
      </Grid>
    </Grid>
  );
};
