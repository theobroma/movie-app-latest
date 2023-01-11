import { MovieEntityType } from '@/types';

interface Props {
  media: MovieEntityType; // TODO: add TV
  // isFetching?: boolean;
  //   error: any;
  //   isError: boolean;
  //   isLoading: boolean;
  //   isSuccess: boolean;
}

export const MediaCard = ({ media }: Props) => {
  return (
    <div>
      <span>MediaCard</span>
      <span>{media.title}</span>
    </div>
  );
};
