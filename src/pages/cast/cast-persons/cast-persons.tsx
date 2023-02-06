import { nanoid } from '@reduxjs/toolkit';
import { useParams } from 'react-router-dom';

import { Grid, Typography, Box } from '@mui/material';

import { CastCard } from '@/entities/cast/cast-card/cast-card';
import { useCreditsMediaQuery } from '@/store/credits/api';
import { MediaDetailsRouteParams } from '@/types';

import { useStyles } from './cast-persons.styles';

export const CastPersons = () => {
  const { classes } = useStyles();
  const { mediaId, mediaType } = useParams<
    keyof MediaDetailsRouteParams
  >() as MediaDetailsRouteParams;

  const { data: credits } = useCreditsMediaQuery({
    mediaId: Number(mediaId),
    mediaType,
  });

  const castCount = credits?.cast?.length || 0;
  const crewCount = credits?.crew?.length || 0;

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={6} key={nanoid()}>
        <Typography className={classes.title} component="h3" variant="h4">
          Series Cast&nbsp;
          <span className={classes.count}>{castCount}</span>
        </Typography>
        {credits?.cast?.map((person) => (
          <Box mb={3} key={nanoid()}>
            <CastCard
              profilePath={person.profilePath}
              name={person.name}
              gender={person.gender}
              role={person.character}
            />
          </Box>
        ))}
      </Grid>
      <Grid item xs={12} sm={6} key={nanoid()}>
        <Typography className={classes.title} component="h3" variant="h4">
          Series Crew&nbsp;
          <span className={classes.count}>{crewCount}</span>
        </Typography>
        {credits?.crew?.map((person) => (
          <Box mb={3} key={nanoid()}>
            <CastCard
              profilePath={person.profilePath}
              name={person.name}
              gender={person.gender}
              role={person.job}
            />
          </Box>
        ))}
        {/* {CrewBlock} */}
      </Grid>
    </Grid>
  );
};
