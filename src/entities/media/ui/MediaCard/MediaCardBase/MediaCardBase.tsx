import { Link } from 'react-router-dom';

import PlayArrowIcon from '@mui/icons-material/PlayArrow';

import { MediaTypeEnum } from '@/enums/media-type.enum';
import { POSTER_300_BASE, POSTER_UNAVAILABLE } from '@/shared/utils/constants';
import { useAppSelector } from '@/store/configureStore';
import { languageSelector } from '@/store/ui/selectors';
import { MovieEntityType } from '@/types';

import { StyledBadge, useStyles } from './MediaCardBase.styles';

interface Props {
  id: MovieEntityType['id'];
  mediaType: MediaTypeEnum;
  originalLanguage: MovieEntityType['originalLanguage'];
  originalTitle: MovieEntityType['originalTitle'];
  posterPath: MovieEntityType['posterPath'];
  releaseYear: string;
  title: MovieEntityType['title'];
  voteAverage: MovieEntityType['voteAverage'];
}

export const MediaCardBase = ({
  id,
  mediaType,
  originalLanguage,
  originalTitle,
  posterPath,
  releaseYear,
  title,
  voteAverage = 0,
}: Props) => {
  const { classes } = useStyles();
  const currentLanguage = useAppSelector(languageSelector);
  const mediaVote = Math.round((voteAverage + Number.EPSILON) * 10) / 10; // 2 digits after comma
  const mediaPoster = posterPath
    ? `${POSTER_300_BASE}${posterPath}`
    : POSTER_UNAVAILABLE;
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
