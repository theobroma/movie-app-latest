import { Grid, Typography } from '@mui/material';

import { i18nCountriesConvert } from '@/shared/utils/i18nCountriesConvert';
import { useAppSelector } from '@/store/configureStore';
import { languageSelector } from '@/store/ui/selectors';
import { ProductionCountryType } from '@/types';

import { useStyles } from './MediaInfoBase.styles';

interface Props {
  posterPath: any;
  mediaTitle: any;
  productionCountries: ProductionCountryType[];
}

export const MediaInfoBase = ({
  posterPath,
  mediaTitle = 'title',
  productionCountries,
}: Props) => {
  const { classes } = useStyles();
  const currentLanguage = useAppSelector(languageSelector);

  const i18nProductionCountries = i18nCountriesConvert(
    productionCountries,
    currentLanguage,
  );

  console.log('i18nProductionCountries :>> ', i18nProductionCountries);

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
