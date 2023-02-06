import { MediaTypeEnum } from '@/enums/media-type.enum';

export interface MediaDetailsRouteParams {
  mediaId: string;
  mediaType: MediaTypeEnum;
}
