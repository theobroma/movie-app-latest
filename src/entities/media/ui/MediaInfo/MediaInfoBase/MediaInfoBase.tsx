import { Grid, Typography } from '@mui/material';

import { useStyles } from './MediaInfoBase.styles';

interface Props {
  posterPath: any;
  mediaTitle: any;
}

export const MediaInfoBase = ({ posterPath, mediaTitle = 'title' }: Props) => {
  const { classes } = useStyles();

  return (
    <Grid container spacing={3}>
      {/* poster */}
      <Grid item md={3}>
        {!!posterPath && (
          <img
            className={classes.poster}
            src={`https://image.tmdb.org/t/p/original/${posterPath}`}
            alt={`Poster of ${mediaTitle}`}
          />
        )}
      </Grid>
      <Grid item md={8} style={{ color: 'white' }}>
        <Typography variant="h4" style={{ fontWeight: 'bold' }} component="h1">
          {mediaTitle}{' '}
          {/* <span className={classes.titleDate}>
            ({dayjs(mediaReleaseDate).format('YYYY')})
          </span> */}
        </Typography>
      </Grid>
    </Grid>
  );
};
