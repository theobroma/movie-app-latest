import dayjs from 'dayjs';

import { Box, Paper, Grid } from '@mui/material';

import { POSTER_300_BASE, POSTER_UNAVAILABLE } from '@/shared/utils/constants';
import { SeasonType } from '@/types';

import { useStyles } from './seasons-card.styles';

interface Props {
  season: SeasonType;
}

export const SeasonsCard = ({ season }: Props) => {
  const { classes } = useStyles();
  const {
    airDate,
    episodeCount,
    // id,
    name,
    overview,
    posterPath,
    // seasonNumber,
  } = season;
  const mediaPoster = posterPath
    ? `${POSTER_300_BASE}${posterPath}`
    : POSTER_UNAVAILABLE;

  return (
    <Box pb={3}>
      <Paper elevation={3}>
        <Grid container>
          <Grid item xs={1}>
            <img className={classes.poster} src={mediaPoster} alt={name} />
          </Grid>
          <Grid item xs={11}>
            <Box p={3}>
              <Box component="span" className={classes.name}>
                {name}&nbsp;
              </Box>
              <Box component="span" className={classes.episodes}>
                {dayjs(airDate).format('YYYY')}&nbsp;|&nbsp;
                {episodeCount}
                &nbsp;Episodes
              </Box>
              <br />
              <Box component="span" className={classes.releaseDate}>
                Premiered on&nbsp;{dayjs(airDate).format('DD MMM YYYY')}.
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
