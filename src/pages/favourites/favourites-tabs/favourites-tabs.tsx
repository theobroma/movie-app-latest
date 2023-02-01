import { useLocation, Link } from 'react-router-dom';

import { Paper, Tabs, Tab } from '@mui/material';

export const FavouritesTabs = () => {
  const location = useLocation();
  const pathArr = location.pathname.split('/');
  const pathValue = pathArr[pathArr.length - 1];

  return (
    <Paper square>
      <Tabs indicatorColor="primary" textColor="primary" value={pathValue}>
        <Tab label="Movies" component={Link} to="movies" value="movies" />
        <Tab label="TV Shows" component={Link} to="tv" value="tv" />
      </Tabs>
    </Paper>
  );
};
