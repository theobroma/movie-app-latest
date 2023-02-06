import { Container, Box, Typography } from '@mui/material';

import { MediaTypeEnum } from '@/enums/media-type.enum';
import { useSimilarMediaQuery } from '@/features/similar-media/store/api';
import { MediaList } from '@/widgets/media-list/media-list';

interface Props {
  mediaId: string;
  mediaType: MediaTypeEnum;
}

export const SimilarMediaList = ({ mediaId, mediaType }: Props) => {
  const {
    data: similarMediaData,
    error,
    isError,
    isSuccess,
    isFetching,
  } = useSimilarMediaQuery({ mediaId, mediaType });

  return (
    <Container maxWidth="lg">
      <Box py={4}>
        <Typography component="h3" variant="h4">
          Similar
          {/* <Trans i18nKey="Heading.Similar" /> */}
        </Typography>
        <MediaList
          mediaData={similarMediaData}
          mediaType={mediaType}
          itemsToShow={6}
          isError={isError}
          isFetching={isFetching}
          isSuccess={isSuccess}
          error={error}
        />
      </Box>
    </Container>
  );
};
