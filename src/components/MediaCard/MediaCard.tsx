import { Link } from 'react-router-dom';

import PlayArrowIcon from '@mui/icons-material/PlayArrow';

import { useAppSelector } from '@/store/configureStore';
import { languageSelector } from '@/store/ui/selectors';
// import { MovieEntityType, TVEntityType } from '@/types';

import { StyledBadge, useStyles } from './MediaCard.styles';

const posterBase = 'https://image.tmdb.org/t/p/w300';
const posterUnavailable =
  'https://www.movienewz.com/img/films/poster-holder.jpg';

interface Props {
  media: any;
  parentMediaType?: string; // crutch for similar movies
  // isFetching?: boolean;
  //   error: any;
  //   isError: boolean;
  //   isLoading: boolean;
  //   isSuccess: boolean;
}

export const MediaCard = ({ media, parentMediaType }: Props) => {
  const { classes } = useStyles();
  const currentLanguage = useAppSelector(languageSelector);

  const {
    id,
    mediaType: movieMediaType,
    title,
    originalTitle,
    originalLanguage,
    releaseDate,
    voteAverage,
    posterPath,
  } = media;

  const mediaType = movieMediaType || parentMediaType;
  // DIFFERENT FIELDS FOR MOVIE AND TV
  const mediaTitle = title || originalTitle || 'title';
  const mediaTitleOriginal = originalTitle || 'title';
  const mediaReleaseDate = releaseDate;
  // 2 digits after comma
  const mediaVote = Math.round((voteAverage + Number.EPSILON) * 10) / 10;

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
        <img
          className={classes.poster}
          src={posterPath ? `${posterBase}${posterPath}` : posterUnavailable}
          alt={title}
        />
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
        <b>{mediaTitle}</b>
      </Link>
      <div className={classes.subTitle}>
        <span>{mediaReleaseDate.split('-')[0]}</span>
        {originalLanguage !== currentLanguage && (
          <>
            &nbsp;•&nbsp;
            <span>{mediaTitleOriginal}</span>
          </>
        )}
      </div>
    </div>
  );
};
