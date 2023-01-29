import { nanoid } from '@reduxjs/toolkit';

import { Grid, Rating, Skeleton } from '@mui/material';

import { useStyles } from './MediaInfoSkeleton.styles';

export const MediaInfoSkeleton = () => {
  const { classes } = useStyles();

  const subtitle = (width: number) => (
    <Skeleton
      variant="text"
      width={width}
      height={28}
      className={classes.skeleton}
    />
  );

  const text = (rows: number) =>
    Array.from(new Array(rows)).map(() => (
      <Skeleton
        key={nanoid()}
        variant="text"
        width={`${100 - Math.random() * 8}%`}
        height={20}
        className={classes.skeleton}
      />
    ));

  return (
    <Grid container spacing={7}>
      <Grid item md={3}>
        <Skeleton
          variant="rectangular"
          height={432}
          style={{ borderRadius: 10 }}
          width="100%"
          className={classes.skeleton}
        />
      </Grid>
      <Grid item md={8} style={{ color: 'white' }}>
        <Skeleton
          variant="text"
          width={100}
          height={20}
          className={classes.skeleton}
        />
        <Skeleton
          variant="text"
          width={300}
          height={34}
          className={classes.skeleton}
        />
        <div>
          <Rating value={0} classes={{ iconEmpty: classes.icon }} readOnly />
        </div>
        {subtitle(50)}
        {text(4)}
        <br />
        {subtitle(70)}
        {text(3)}
        <br />
        {subtitle(50)}
        {text(2)}
      </Grid>
    </Grid>
  );
};
