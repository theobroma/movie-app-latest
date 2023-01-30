import dayjs from 'dayjs';

import { Grid, Typography } from '@mui/material';

import { i18nCountriesConvert } from '@/shared/utils/i18nCountriesConvert';
import { useAppSelector } from '@/store/configureStore';
import { languageSelector } from '@/store/ui/selectors';
import { GenreType, ProductionCountryType } from '@/types';

import { useStyles } from './MediaInfoBase.styles';

interface Props {
  posterPath: any;
  mediaTitle: any;
  productionCountries: ProductionCountryType[];
  mediaReleaseDate: any;
  genres: GenreType[];
}

export const MediaInfoBase = ({
  posterPath,
  mediaTitle = 'title',
  productionCountries,
  mediaReleaseDate,
  genres,
}: Props) => {
  const { classes } = useStyles();
  const currentLanguage = useAppSelector(languageSelector);

  const i18nProductionCountries = i18nCountriesConvert(
    productionCountries,
    currentLanguage,
  );

  const releaseDate = dayjs(mediaReleaseDate).format('DD/MM/YYYY');
  const releaseYear = dayjs(mediaReleaseDate).format('YYYY');

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
        <Typography variant="h4" component="h1" style={{ fontWeight: 'bold' }}>
          {mediaTitle}&nbsp;
          <span className={classes.titleDate}>({releaseYear})</span>
        </Typography>
        <div className={classes.releaseDate}>
          {releaseDate}&nbsp;({i18nProductionCountries})
        </div>
        <ul className={classes.genreList}>
          {genres?.map((genre) => (
            <li className={classes.genre} key={genre.id}>
              {genre.name}
            </li>
          ))}
        </ul>
      </Grid>
    </Grid>
  );
};
