import { Grid, Typography } from '@mui/material';

import { useAppSelector } from '@/store/configureStore';
import { languageSelector } from '@/store/ui/selectors';
import { ProductionCountryType } from '@/types';

import { useStyles } from './MediaInfoBase.styles';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const countries = require('i18n-iso-countries');

interface Props {
  posterPath: any;
  mediaTitle: any;
  productionCountries: any;
}

export const MediaInfoBase = ({
  posterPath,
  mediaTitle = 'title',
  productionCountries,
}: Props) => {
  const { classes } = useStyles();
  const currentLanguage = useAppSelector(languageSelector);

  const i18nProductionCountries = productionCountries
    ?.map((item: ProductionCountryType) => {
      return countries.getName(item.iso_3166_1, currentLanguage, {
        select: 'official',
      });
    })
    .join(', ');

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
