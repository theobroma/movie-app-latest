import { nanoid } from '@reduxjs/toolkit';

import { Grid, Stack, Alert } from '@mui/material';

import { MediaCardMovie } from '@/entities/media/ui/MediaCard/MediaCardMovie/MediaCardMovie';
import { MediaCardSkeleton } from '@/entities/media/ui/MediaCard/MediaCardSkeleton/MediaCardSkeleton';
import { MediaCardTV } from '@/entities/media/ui/MediaCard/MediaCardTV/MediaCardTV';
import { MediaTypeEnum } from '@/enums/media-type.enum';
import { AppError } from '@/shared/uikit/app-error/app-error';
import { isEmptyArray } from '@/shared/utils/is-data';

interface Props {
  mediaData: any;
  itemsToShow?: number;
  mediaType: MediaTypeEnum;
  isError: any;
  isFetching: any;
  isSuccess: any;
  error: any;
}

const DEFAULT_ITEMS_PER_PAGE = 20;

export const MediaList = ({
  mediaData,
  itemsToShow,
  mediaType,
  isError,
  isFetching,
  isSuccess,
  error,
}: Props) => {
  const mediaArray = itemsToShow
    ? mediaData?.results.slice(0, itemsToShow)
    : mediaData?.results;
  const skeletons = itemsToShow
    ? Array(itemsToShow).fill('none')
    : Array(DEFAULT_ITEMS_PER_PAGE).fill('none');

  return (
    <Grid container spacing={2} sx={{ mt: 2 }}>
      {!isError &&
        !isFetching &&
        !isEmptyArray(mediaArray) &&
        mediaArray?.map((media: any) => (
          <Grid item xs={6} sm={4} md={4} lg={2} key={nanoid()}>
            {mediaType === MediaTypeEnum.Movie ? (
              <MediaCardMovie movie={media} />
            ) : (
              <MediaCardTV tvshow={media} />
            )}
          </Grid>
        ))}
      {isFetching &&
        skeletons.map(() => (
          <Grid item xs={6} sm={4} md={4} lg={2} key={nanoid()}>
            <MediaCardSkeleton />
          </Grid>
        ))}
      {/* no results */}
      {isSuccess && isEmptyArray(mediaArray) && (
        <Grid item xs={12}>
          <Stack sx={{ width: '100%' }} spacing={2}>
            <Alert severity="warning">There is no data</Alert>
          </Stack>
        </Grid>
      )}
      {/* error */}
      {isError && (
        <Grid item xs={12}>
          <AppError error={error} />
        </Grid>
      )}
    </Grid>
  );
};
