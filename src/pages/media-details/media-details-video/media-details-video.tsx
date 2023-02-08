import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';
import { useParams, Link as RouterLink } from 'react-router-dom';

import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { Box, Container, Grid, Link } from '@mui/material';

import { useVideosQuery } from '@/store/videos/api';
import { MediaDetailsRouteParams } from '@/types';

import { MediaDetailsVideoSkeleton } from './media-details-video-skeleton/media-details-video-skeleton';
import { useStyles } from './media-details-video.styles';

export const MediaDetailsVideo = () => {
  const { classes } = useStyles();
  const { mediaId, mediaType } = useParams<
    keyof MediaDetailsRouteParams
  >() as MediaDetailsRouteParams;

  const {
    data,
    // error,
    // isError,
    // isLoading,
    isFetching,
  } = useVideosQuery({ mediaId: Number(mediaId), mediaType });

  const trailerKey = data?.results[0]?.key;

  return (
    <Container maxWidth="lg">
      {/* no trailer test : http://localhost:3000/details/movie/112160 */}
      <Grid container spacing={3}>
        <Grid item xs={12} md={3}>
          {/* offset */}
        </Grid>
        <Grid item xs={12} md={6}>
          <Box py={3}>
            {isFetching ? (
              <MediaDetailsVideoSkeleton />
            ) : (
              !!trailerKey && (
                <LiteYouTubeEmbed id={trailerKey} title="Trailer" webp />
              )
            )}
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          md={3}
          sx={{ display: 'flex', alignItems: 'center' }}
        >
          <Link
            className={classes.videoLink}
            component={RouterLink}
            to={`/details/${mediaType}/${mediaId}/videos`}
            variant="body2"
          >
            View More &nbsp;
            <ArrowRightAltIcon />
          </Link>
        </Grid>
      </Grid>
    </Container>
  );
};
