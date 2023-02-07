import { Link as RouterLink } from 'react-router-dom';

import { Container, Box, Typography, Link } from '@mui/material';

import { MediaTypeEnum } from '@/enums/media-type.enum';
import { POSTER_HEADER_BASE } from '@/shared/utils/constants';

import { useStyles } from './details-header-base.styles';

interface Props {
  mediaId: number;
  mediaType: MediaTypeEnum;
  mediaTitle: string;
  releaseYear: string;
  posterPath: string;
}

export const DetailsHeaderBase = ({
  mediaId,
  mediaType,
  mediaTitle,
  releaseYear,
  posterPath,
}: Props) => {
  const { classes } = useStyles();

  return (
    <div className={classes.root}>
      <Container maxWidth="lg">
        <Box py={4}>
          <section className={classes.media}>
            {/* Poster */}
            <Link
              component={RouterLink}
              to={`/details/${mediaType}/${mediaId}`}
              sx={{ textDecoration: 'none' }}
            >
              <img
                className={classes.mediaFigure}
                src={`${POSTER_HEADER_BASE}${posterPath}`}
                alt={mediaTitle}
                width="58"
                height="87"
              />
            </Link>
            <div className={classes.mediaBody}>
              {/* Title */}
              <Typography variant="h4" component="h2">
                <Link
                  className={classes.titleMedia}
                  component={RouterLink}
                  to={`/details/${mediaType}/${mediaId}`}
                >
                  {mediaTitle}&nbsp;
                </Link>
                <span className={classes.titleDate}>({releaseYear})</span>
              </Typography>
              {/* Link */}
              <Link
                component={RouterLink}
                to={`/details/${mediaType}/${mediaId}`}
                className={classes.link}
              >
                ← На головну
              </Link>
            </div>
          </section>
        </Box>
      </Container>
    </div>
  );
};
