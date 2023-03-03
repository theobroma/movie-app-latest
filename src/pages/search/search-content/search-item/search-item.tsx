import dayjs from 'dayjs';

import { Box, Paper, Grid } from '@mui/material';

import { POSTER_300_BASE, POSTER_UNAVAILABLE } from '@/shared/utils/constants';

import { useStyles } from './search-item.styles';
// import { MovieEntityType } from '@/types';

interface Props {
  //   data: MovieEntityType;
  data: any;
}

export const SearchItem = ({ data }: Props) => {
  const { classes } = useStyles();
  const { posterPath, originalTitle, overview, releaseDate } = data;
  const mediaPoster = posterPath
    ? `${POSTER_300_BASE}${posterPath}`
    : POSTER_UNAVAILABLE;

  return (
    <Box pb={3}>
      <Paper elevation={3}>
        <Grid container>
          <Grid item xs={1}>
            <img
              className={classes.poster}
              src={mediaPoster}
              alt={originalTitle}
            />
          </Grid>
          <Grid item xs={11}>
            <Box p={3}>
              <Box component="span" className={classes.name}>
                {originalTitle}
              </Box>
              <br />
              <Box component="span" className={classes.releaseDate}>
                {dayjs(releaseDate).format('DD MMMM YYYY')}
              </Box>
              <br />
              <Box mt={2}>{overview}</Box>
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};
