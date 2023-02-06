import { useNavigate } from 'react-router-dom';

import FavoriteIcon from '@mui/icons-material/Favorite';
import { Tooltip, IconButton, Badge } from '@mui/material';

import { PageEnum } from '@/enums/page.enum';
import { useAppSelector } from '@/store/configureStore';
import { favouritesCountSelector } from '@/store/favourites/selectors';

export const FavouritesBadge = () => {
  const navigate = useNavigate();
  const favouritesCount = useAppSelector(favouritesCountSelector);

  return (
    <Tooltip title="Navigate to favourites">
      <IconButton
        aria-label="show favourites"
        color="inherit"
        onClick={() => navigate(PageEnum.FavouritesMovies)}
      >
        <Badge
          badgeContent={favouritesCount}
          color="secondary"
          overlap="rectangular"
        >
          <FavoriteIcon />
        </Badge>
      </IconButton>
    </Tooltip>
  );
};
