import { useNavigate } from 'react-router-dom';

import FavoriteIcon from '@mui/icons-material/Favorite';
import { Tooltip, IconButton, Badge } from '@mui/material';

import { favouritesCountSelector } from '@/features/favourites/store/selectors';
import { useAppSelector } from '@/store/configureStore';

export const FavouritesBadge = () => {
  const navigate = useNavigate();
  const favouritesCount = useAppSelector(favouritesCountSelector);

  return (
    <Tooltip title="Navigate to favourites">
      <IconButton
        aria-label="show favourites"
        color="inherit"
        // onClick={() => navigate(ROUTES.FAVOURITES_MOVIES)}
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
