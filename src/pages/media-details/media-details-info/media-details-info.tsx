/* eslint-disable no-nested-ternary */
// import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { Box, Container } from '@mui/material';

import { MediaInfoMovie } from '@/entities/media/ui/MediaInfo/MediaInfoMovie/MediaInfoMovie';
import { MediaInfoSkeleton } from '@/entities/media/ui/MediaInfo/MediaInfoSkeleton/MediaInfoSkeleton';
import { MediaInfoTV } from '@/entities/media/ui/MediaInfo/MediaInfoTV/MediaInfoTV';
import { MediaTypeEnum } from '@/enums/media-type.enum';
import { MediaDetailsRouteParams } from '@/pages/media-details/media-details.interface';
import { useAppDispatch, useAppSelector } from '@/store/configureStore';
import { useDetailsMediaQuery } from '@/store/details/api';
// import { mediaDetailsSelector } from '@/store/details/selectors';
// import { getMediaDetailsTC } from '@/store/details/slice';
import { localeSelector } from '@/store/ui/selectors';

import { useStyles } from './media-details-info.styles';

const backdropBase = 'https://image.tmdb.org/t/p/original';

export const MediaDetailsInfo = () => {
  const dispatch = useAppDispatch();
  const { classes } = useStyles();
  // just for useEffect refetch if changed
  const locale = useAppSelector(localeSelector);
  const { mediaId, mediaType } = useParams<
    keyof MediaDetailsRouteParams
  >() as MediaDetailsRouteParams;

  // const {
  //   data: mediaDetailsData,
  //   error,
  //   isError,
  //   isLoading,
  //   isSuccess,
  // } = useAppSelector(mediaDetailsSelector);

  // useEffect(() => {
  //   if (mediaId && mediaType) {
  //     dispatch(getMediaDetailsTC({ mediaId, mediaType }));
  //   }
  // }, [dispatch, mediaId, mediaType,locale]);

  const {
    data: mediaDetailsData,
    // error,
    // isError,
    // isSuccess,
    // isLoading,
    isFetching,
  } = useDetailsMediaQuery({ mediaId: Number(mediaId), mediaType, locale });

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
            <MediaInfoMovie
              details={mediaDetailsData}
              // media={mediaDetailsData}
              // trailerKey={trailerKey}
              // credits={credits}
              // onFavourite={handleOnFavourite}
              // isFavorite={isFavorite}
            />
          ) : (
            <MediaInfoTV
              details={mediaDetailsData}
              // media={mediaDetailsData}
              // trailerKey={trailerKey}
              // credits={credits}
              // onFavourite={handleOnFavourite}
              // isFavorite={isFavorite}
            />
          )}
        </Box>
      </Container>
    </Box>
  );
};
