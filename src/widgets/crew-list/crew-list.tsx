import { nanoid } from '@reduxjs/toolkit';
import { Link as RouterLink } from 'react-router-dom';

import { Typography, Link, Grid, Box } from '@mui/material';

import { MediaTypeEnum } from '@/enums/media-type.enum';
import { useCreditsMediaQuery } from '@/store/credits/api';

import { useStyles } from './crew-list.styles';

interface Props {
  mediaType: MediaTypeEnum;
  mediaId: number;
}

export const CrewList = ({ mediaType, mediaId }: Props) => {
  const { classes } = useStyles();

  const {
    data: credits,
    isFetching,
    isSuccess,
  } = useCreditsMediaQuery({
    mediaId,
    mediaType,
  });

  return (
    <Grid container spacing={3} component="ul" className={classes.crewList}>
      {credits?.crew?.slice(0, 4).map((person) => (
        <Grid
          item
          md={3}
          sm={6}
          component="li"
          key={nanoid()}
          style={{ paddingRight: 16 }}
        >
          <Typography variant="body2" style={{ fontWeight: 'bold' }}>
            {person.name}
          </Typography>
          <Typography variant="body2" style={{ fontSize: '0.9em' }}>
            {person.department},&nbsp;{person.job}
          </Typography>
        </Grid>
      ))}
      {!isFetching && isSuccess && (
        <Grid item xs={12}>
          <Box>
            <Link
              component={RouterLink}
              to={`/details/${mediaType}/${mediaId}/cast`}
              className={classes.link}
            >
              Full Cast & Crew
            </Link>
          </Box>
        </Grid>
      )}
    </Grid>
  );
};
