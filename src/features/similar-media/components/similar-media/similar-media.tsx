import { useEffect } from 'react';

import { MediaTypeEnum } from '@/enums/media-type.enum';
import { similarMediaSelector } from '@/features/similar-media/store/selectors';
import { getSimilarMediaTC } from '@/features/similar-media/store/slice';
import { useAppDispatch, useAppSelector } from '@/store/configureStore';
import { languageISOSelector } from '@/store/ui/selectors';
// import { useSimilarMediaQuery } from '@/features/similar-media/store/api';

interface Props {
  mediaId: string;
  mediaType: MediaTypeEnum;
}

export const SimilarMedia = ({ mediaId, mediaType }: Props) => {
  // const {
  //   data,
  //   // error,
  //   isError,
  //   isLoading,
  //   // isFetching,
  // } = useSimilarMediaQuery({ mediaId, mediaType });

  // console.log('data :>> ', data);
  const dispatch = useAppDispatch();
  const {
    data: { results },
    // error,
    // isError,
    // isFetching,
    // isSuccess,
  } = useAppSelector(similarMediaSelector);
  // just for useEffect refetch if changed
  const langISOCode = useAppSelector(languageISOSelector);

  useEffect(() => {
    if (mediaId && mediaType) {
      dispatch(getSimilarMediaTC({ mediaId, mediaType }));
    }
  }, [dispatch, mediaId, mediaType, langISOCode]);

  console.log('results :>> ', results);

  return (
    <div>
      <span>123123</span>
    </div>
  );
};
