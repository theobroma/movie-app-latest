import { MediaTypeEnum } from '@/enums/media-type.enum';
import { useSimilarMediaQuery } from '@/features/similar-media/store/api';

interface Props {
  mediaId: string;
  mediaType: MediaTypeEnum;
}

export const SimilarMedia = ({ mediaId, mediaType }: Props) => {
  const {
    data,
    // error,
    isError,
    isLoading,
    // isFetching,
  } = useSimilarMediaQuery({ mediaId, mediaType });

  return (
    <div>
      <span>123123</span>
    </div>
  );
};
