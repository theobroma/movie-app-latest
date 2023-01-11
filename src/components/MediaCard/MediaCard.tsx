import { Link } from 'react-router-dom';

import PlayArrowIcon from '@mui/icons-material/PlayArrow';

import { useAppSelector } from '@/store/configureStore';
import { languageSelector } from '@/store/ui/selectors';
import { MovieEntityType } from '@/types';

import { useStyles } from './MediaCard.styles';

const img_300 = 'https://image.tmdb.org/t/p/w300';
const unavailable = 'https://www.movienewz.com/img/films/poster-holder.jpg';

interface Props {
  media: MovieEntityType; // TODO: add TV
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
    media_type,
    title,
    original_title,
    original_language,
    release_date,
    vote_average,
    poster_path,
  } = media;

  const mediaType = media_type || parentMediaType;
  // DIFFERENT FIELDS FOR MOVIE AND TV
  const mediaTitle = title || original_title || 'title';
  const mediaTitleOriginal = original_title || 'title';
  const mediaReleaseDate = release_date;
  // 2 digits after comma
  const mediaVote = Math.round((vote_average + Number.EPSILON) * 10) / 10;

  return (
    <div className={classes.media} color="inherit">
      {/* <StyledBadge
        badgeContent={mediaVote}
        color={mediaVote > 6 ? 'primary' : 'secondary'}
        overlap="rectangular"
      /> */}
      {/* poster */}
      <Link
        to={{
          pathname: `/details/${mediaType}/${id}`,
        }}
        className={classes.posterLink}
      >
        <img
          className={classes.poster}
          src={poster_path ? `${img_300}${poster_path}` : unavailable}
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
        {original_language !== currentLanguage && (
          <>
            &nbsp;•&nbsp;
            <span>{mediaTitleOriginal}</span>
          </>
        )}
      </div>
    </div>
  );
};
