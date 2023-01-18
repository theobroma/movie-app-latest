import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { MediaDetailsRouteParams } from '@/pages/media-details/media-details.interface';
import { useAppDispatch, useAppSelector } from '@/store/configureStore';
import { mediaDetailsSelector } from '@/store/details/selectors';
import { getMediaDetailsTC } from '@/store/details/slice';
import { languageISOSelector } from '@/store/ui/selectors';

export const MediaDetailsInfo = () => {
  const { mediaId, mediaType } = useParams<
    keyof MediaDetailsRouteParams
  >() as MediaDetailsRouteParams;

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
    mediaDetailsData?.original_title ||
    mediaDetailsData?.original_name ||
    'title';

  return <>{mediaTitle}</>;
};
