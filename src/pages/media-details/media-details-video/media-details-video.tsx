import { useParams } from 'react-router-dom';

import YouTubeIcon from '@mui/icons-material/YouTube';
import { Button } from '@mui/material';

import { MediaDetailsRouteParams } from '@/pages/media-details/media-details.interface';
import { useVideosQuery } from '@/store/videos/api';

export const MediaDetailsVideo = () => {
  const { mediaId, mediaType } = useParams<
    keyof MediaDetailsRouteParams
  >() as MediaDetailsRouteParams;

  const {
    data,
    // error,
    isError,
    isLoading,
    // isFetching,
  } = useVideosQuery({ mediaId, mediaType });

  console.log('data :>> ', data);

  const trailerKey = data?.results[0].key;

  return (
    <div>
      <span>MediaDetailsVideo</span>
      <span>{trailerKey}</span>
      <Button
        // className={classes.trailer}
        variant="contained"
        startIcon={<YouTubeIcon />}
        color="secondary"
        target="__blank"
        href={`https://www.youtube.com/watch?v=${trailerKey}`}
      >
        Watch the Trailer
        {/* <Trans i18nKey="Btn.WatchTrailer" /> */}
      </Button>
    </div>
  );
};
