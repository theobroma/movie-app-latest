import { nanoid } from '@reduxjs/toolkit';

import { Grid, Typography } from '@mui/material';

import { MediaTypeEnum } from '@/enums/media-type.enum';
import { useAppSelector } from '@/store/configureStore';
import { useCreditsMediaQuery } from '@/store/credits/api';
import { localeSelector } from '@/store/ui/selectors';

import { useStyles } from './crew-list.styles';

interface Props {
  mediaType: MediaTypeEnum;
  mediaId: number;
}

export const CrewList = ({ mediaType, mediaId }: Props) => {
  const { classes } = useStyles();
  const locale = useAppSelector(localeSelector);

  const {
    data: credits,
    // error,
    // isError,
    // isSuccess,
    // isLoading,
    // isFetching,
  } = useCreditsMediaQuery({ mediaId, mediaType, locale });

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
