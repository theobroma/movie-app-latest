import { nanoid } from '@reduxjs/toolkit';

import { Grid, Typography } from '@mui/material';

import { MediaTypeEnum } from '@/enums/media-type.enum';
import { useCreditsMediaQuery } from '@/store/credits/api';

import { useStyles } from './crew-list.styles';

interface Props {
  mediaType: MediaTypeEnum;
  mediaId: number;
}

export const CrewList = ({ mediaType, mediaId }: Props) => {
  const { classes } = useStyles();

  const { data: credits } = useCreditsMediaQuery({ mediaId, mediaType });

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
    </Grid>
  );
};
