/* eslint-disable no-nested-ternary */
import { useParams } from 'react-router-dom';

import { Box, Container } from '@mui/material';

import { MediaInfoMovie } from '@/entities/media/ui/MediaInfo/MediaInfoMovie/MediaInfoMovie';
import { MediaInfoSkeleton } from '@/entities/media/ui/MediaInfo/MediaInfoSkeleton/MediaInfoSkeleton';
import { MediaInfoTV } from '@/entities/media/ui/MediaInfo/MediaInfoTV/MediaInfoTV';
import { MediaTypeEnum } from '@/enums/media-type.enum';
import { MediaDetailsRouteParams } from '@/pages/media-details/media-details.interface';
import { useDetailsMediaQuery } from '@/store/details/api';

import { useStyles } from './media-details-info.styles';

const backdropBase = 'https://image.tmdb.org/t/p/original';

export const MediaDetailsInfo = () => {
  const { classes } = useStyles();
  const { mediaId, mediaType } = useParams<
    keyof MediaDetailsRouteParams
  >() as MediaDetailsRouteParams;

  const { data: mediaDetailsData, isFetching } = useDetailsMediaQuery({
    mediaId: Number(mediaId),
    mediaType,
  });

  const mediaTitle =
    mediaDetailsData?.title ||
    mediaDetailsData?.name ||
    mediaDetailsData?.originalTitle ||
    mediaDetailsData?.originalName ||
    'title';

  return (
    <Box style={{ position: 'relative' }}>
      <div className={classes.backdrop}>
        {/* no backdrop test http://localhost:3000/details/movie/857983 */}
        {!isFetching && !!mediaDetailsData?.backdropPath && (
          <img
            className={classes.backdropImage}
            src={`${backdropBase}/${mediaDetailsData.backdropPath}`}
            alt={`Backdrop of ${mediaTitle}`}
          />
        )}
      </div>
      <Container maxWidth="lg">
        <Box py={3}>
          {isFetching ? (
            <MediaInfoSkeleton />
          ) : mediaType === MediaTypeEnum.Movie ? (
            <MediaInfoMovie details={mediaDetailsData} />
          ) : (
            <MediaInfoTV details={mediaDetailsData} />
          )}
        </Box>
      </Container>
    </Box>
  );
};
