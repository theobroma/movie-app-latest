import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';
import { useParams } from 'react-router-dom';

import { Box, Grid } from '@mui/material';

import { MediaDetailsRouteParams } from '@/pages/media-details/media-details.interface';
import { useVideosQuery } from '@/store/videos/api';

export const MediaDetailsVideo = () => {
  const { mediaId, mediaType } = useParams<
    keyof MediaDetailsRouteParams
  >() as MediaDetailsRouteParams;

  const {
    data,
    // error,
    // isError,
    isLoading,
    // isFetching,
  } = useVideosQuery({ mediaId, mediaType });

  const trailerKey = data?.results[0].key;

  return (
    <div>
      {/* no trailer test : http://localhost:3000/details/movie/112160 */}
      {!isLoading && !!trailerKey && (
        <Grid container spacing={3}>
          <Grid item xs={12} md={3}>
            {/* offset */}
          </Grid>
          <Grid item xs={12} md={6}>
            <Box py={3}>
              <LiteYouTubeEmbed id={trailerKey} title="Trailer" webp />
            </Box>
          </Grid>
          <Grid item xs={12} md={3}>
            {/* TODO: add link to more videos */}
          </Grid>
        </Grid>
      )}
    </div>
  );
};
