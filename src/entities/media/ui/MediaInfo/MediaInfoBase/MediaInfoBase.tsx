import dayjs from 'dayjs';

import { Box, Grid, Rating, Typography } from '@mui/material';

import { MediaTypeEnum } from '@/enums/media-type.enum';
import { ToggleFavourite } from '@/features/toggle-favourite/ui';
import { i18nCountriesConvert } from '@/shared/utils/i18nCountriesConvert';
import { useAppSelector } from '@/store/configureStore';
import { languageSelector } from '@/store/ui/selectors';
import { GenreType, ProductionCountryType } from '@/types';
import { CrewList } from '@/widgets/crew-list/crew-list';

import { useStyles } from './MediaInfoBase.styles';

interface Props {
  mediaType: MediaTypeEnum;
  mediaId: number;
  posterPath: any;
  mediaTitle: any;
  productionCountries: ProductionCountryType[];
  mediaReleaseDate: any;
  genres: GenreType[];
  overview: any;
  voteAverage: any;
  tagline: any;
  runtime?: any;
}

export const MediaInfoBase = ({
  mediaType,
  mediaId,
  posterPath,
  mediaTitle = 'title',
  productionCountries,
  mediaReleaseDate,
  genres,
  overview,
  voteAverage,
  tagline,
  runtime,
}: Props) => {
  const { classes } = useStyles();
  const currentLanguage = useAppSelector(languageSelector);

  const i18nProductionCountries = i18nCountriesConvert(
    productionCountries,
    currentLanguage,
  );

  const releaseDate = dayjs(mediaReleaseDate).format('DD/MM/YYYY');
  const releaseYear = dayjs(mediaReleaseDate).format('YYYY');
  // 2 digits after comma
  const mediaVote = Math.round((voteAverage + Number.EPSILON) * 10) / 10;

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
          {releaseDate}&nbsp;
          {i18nProductionCountries.length > 0 && (
            <>({i18nProductionCountries})</>
          )}
        </div>
        <ul className={classes.genreList}>
          {genres?.map((genre) => (
            <li className={classes.genre} key={genre.id}>
              {genre.name}
            </li>
          ))}
        </ul>
        {/* Rating */}
        <div className={classes.vote}>
          <Rating value={mediaVote / 2} readOnly />
          <span style={{ margin: '2px 0px 0 6px' }}>{mediaVote}/10</span>
          <ToggleFavourite mediaType={mediaType} mediaId={mediaId} />
        </div>
        <Box sx={{ mt: 2 }}>
          {!!runtime && (
            <Typography component="div" sx={{ mr: 2 }}>
              <b>Duration: &nbsp;:&nbsp;</b>
              {`${runtime} min.`}
            </Typography>
          )}
        </Box>
        {!!tagline && (
          <Typography variant="body1" className={classes.tagline}>
            {tagline}
          </Typography>
        )}
        {!!overview && (
          <>
            <h3 className={classes.subtitle}>Overview</h3>
            <Typography variant="body1">{overview}</Typography>
          </>
        )}
        <CrewList mediaType={mediaType} mediaId={mediaId} />
      </Grid>
    </Grid>
  );
};
