import { Link } from 'react-router-dom';

import PlayArrowIcon from '@mui/icons-material/PlayArrow';

import { useAppSelector } from '@/store/configureStore';
import { languageSelector } from '@/store/ui/selectors';

import { StyledBadge, useStyles } from './MediaCardBase.styles';

const posterBase = 'https://image.tmdb.org/t/p/w300';
const posterUnavailable =
  'https://www.movienewz.com/img/films/poster-holder.jpg';

interface Props {
  id: any;
  mediaType: any;
  originalLanguage: any;
  originalTitle: any;
  posterPath: any;
  releaseYear: any;
  title: any;
  voteAverage: any;
}

export const MediaCardBase = ({
  id,
  mediaType,
  originalLanguage,
  originalTitle,
  posterPath,
  releaseYear,
  title,
  voteAverage,
}: Props) => {
  const { classes } = useStyles();
  const currentLanguage = useAppSelector(languageSelector);
  const mediaVote = Math.round((voteAverage + Number.EPSILON) * 10) / 10; // 2 digits after comma
  const mediaPoster = posterPath
    ? `${posterBase}${posterPath}`
    : posterUnavailable;
  const shouldRenderOriginalTitle = originalLanguage !== currentLanguage;

  return (
    <div className={classes.media} color="inherit">
      <StyledBadge
        badgeContent={mediaVote}
        color={mediaVote > 6 ? 'primary' : 'secondary'}
        overlap="rectangular"
      />
      {/* poster */}
      <Link
        to={{
          pathname: `/details/${mediaType}/${id}`,
        }}
        className={classes.posterLink}
      >
        <img className={classes.poster} src={mediaPoster} alt={title} />
        <div className={classes.mask}>
          <div>
            <PlayArrowIcon fontSize="inherit" />
          </div>
        </div>
      </Link>
      {/* title */}
      <Link
        to={{
          pathname: `/details/${mediaType}/${id}`,
        }}
        className={classes.title}
      >
        <b>{title}</b>
      </Link>
      <div className={classes.subTitle}>
        <span>{releaseYear}</span>
        {shouldRenderOriginalTitle && (
          <>
            &nbsp;•&nbsp;
            <span>{originalTitle}</span>
          </>
        )}
      </div>
    </div>
  );
};
