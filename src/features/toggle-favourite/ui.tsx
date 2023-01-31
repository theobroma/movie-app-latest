import { useSnackbar } from 'notistack';

import FavoriteIcon from '@mui/icons-material/Favorite';
import { Tooltip, Button } from '@mui/material';

import { MediaTypeEnum } from '@/enums/media-type.enum';
import {
  favouritesTVSelector,
  favouritesMoviesSelector,
} from '@/features/favourites/store/selectors';
import { toggleMediaFavoriteAC } from '@/features/favourites/store/slice';
import { useAppDispatch, useAppSelector } from '@/store/configureStore';

interface Props {
  mediaType: MediaTypeEnum;
  mediaId: number;
}

export const ToggleFavourite = ({ mediaType, mediaId }: Props) => {
  const dispatch = useAppDispatch();
  const { enqueueSnackbar } = useSnackbar();
  const favouritesTV = useAppSelector(favouritesTVSelector);
  const favouritesMovies = useAppSelector(favouritesMoviesSelector);
  const favouritesMedia =
    mediaType === MediaTypeEnum.Movie ? favouritesMovies : favouritesTV;
  //   const isFavorite = true;
  const isFavorite = checkIfFavorite(favouritesMedia, mediaId);

  const handleOnFavourite = () => {
    dispatch(toggleMediaFavoriteAC({ mediaId, mediaType }));
    if (!isFavorite) {
      enqueueSnackbar('Added to favourites', { variant: 'success' });
    } else {
      enqueueSnackbar('Removed from favourites', { variant: 'success' });
    }
  };

  return (
    <Tooltip
      title={isFavorite ? 'Remove from favourites' : 'Add to favourites'}
    >
      <Button
        style={{ marginLeft: 16 }}
        onClick={handleOnFavourite}
        variant={isFavorite ? 'contained' : 'outlined'}
        // variant="outlined"
        color="secondary"
        aria-label="like"
      >
        <FavoriteIcon style={{ color: isFavorite ? 'white' : 'secondary' }} />
      </Button>
    </Tooltip>
  );
};

const checkIfFavorite = (arr: Array<number>, mediaId: number) => {
  const index = arr.findIndex((element) => element === mediaId);

  return index !== -1;
};
