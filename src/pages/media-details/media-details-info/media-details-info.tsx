import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { Box, Container } from '@mui/material';

import { MediaDetailsRouteParams } from '@/pages/media-details/media-details.interface';
import { useAppDispatch, useAppSelector } from '@/store/configureStore';
import { mediaDetailsSelector } from '@/store/details/selectors';
import { getMediaDetailsTC } from '@/store/details/slice';
import { languageISOSelector } from '@/store/ui/selectors';

import { MediaDetailsInfoDataSkeleton } from './media-details-info-data-skeleton/media-details-info-data-skeleton';
import { MediaDetailsInfoData } from './media-details-info-data/media-details-info-data';
import { useStyles } from './media-details-info.styles';

const backdropBase = 'https://image.tmdb.org/t/p/original';

export const MediaDetailsInfo = () => {
  const { mediaId, mediaType } = useParams<
    keyof MediaDetailsRouteParams
  >() as MediaDetailsRouteParams;

  const { classes } = useStyles();
  const dispatch = useAppDispatch();
  const {
    data: mediaDetailsData,
    error,
    isError,
    isLoading,
    isSuccess,
  } = useAppSelector(mediaDetailsSelector);
  // just for useEffect refetch if changed
  const langISOCode = useAppSelector(languageISOSelector);

  useEffect(() => {
    if (mediaId && mediaType) {
      dispatch(getMediaDetailsTC({ mediaId, mediaType }));
    }
  }, [dispatch, mediaId, mediaType, langISOCode]);

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
        {!!mediaDetailsData?.backdropPath && (
          <img
            className={classes.backdropImage}
            src={`${backdropBase}/${mediaDetailsData.backdropPath}`}
            alt={`Backdrop of ${mediaTitle}`}
          />
        )}
      </div>
      <Container maxWidth="lg">
        <Box py={3}>
          {!isLoading ? (
            <MediaDetailsInfoData
              media={mediaDetailsData}
              // trailerKey={trailerKey}
              // credits={credits}
              // onFavourite={handleOnFavourite}
              // isFavorite={isFavorite}
            />
          ) : (
            <MediaDetailsInfoDataSkeleton />
          )}
          {/* {!isLoading ? (
            <MovieInfo
              movie={movieDetailsData}
              trailerKey={trailerKey}
              credits={credits}
              onFavourite={handleOnFavourite}
              isFavorite={isFavorite}
            />
          ) : (
            <MovieInfoSkeleton />
          )} */}
        </Box>
      </Container>
    </Box>
  );
};