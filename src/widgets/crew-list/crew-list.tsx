import { MediaTypeEnum } from '@/enums/media-type.enum';

import { useStyles } from './crew-list.styles';

interface Props {
  mediaType: MediaTypeEnum;
  mediaId: number;
}

export const CrewList = ({ mediaType, mediaId }: Props) => {
  const { classes } = useStyles();

  return (
    <div>
      <span>crew-list</span>
    </div>
  );
};
