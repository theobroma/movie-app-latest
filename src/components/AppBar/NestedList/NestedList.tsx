import React from 'react';

import { ExpandLess, ExpandMore } from '@mui/icons-material';
import HomeIcon from '@mui/icons-material/Home';
import MovieIcon from '@mui/icons-material/Movie';
import TvIcon from '@mui/icons-material/Tv';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import {
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Collapse,
} from '@mui/material';
import List from '@mui/material/List';

import { PageEnum } from '@/enums/page.enum';

import { ListItemLink } from './list-item-link/list-item-link';

export const NestedList = () => {
  const [isOpen, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!isOpen);
  };

  return (
    <List aria-label="primary routes">
      <ListItemLink to="/" primary="Home" icon={<HomeIcon />} />
      <ListItemButton onClick={handleClick}>
        <ListItemIcon>
          <WhatshotIcon />
        </ListItemIcon>
        <ListItemText primary="Trending" />
        {isOpen ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={isOpen} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemLink
            to={PageEnum.TrendingMovies}
            primary="Movies"
            icon={<MovieIcon />}
            sx={{ pl: 4 }}
          />
          <ListItemLink
            to={PageEnum.TrendingTV}
            primary="TV Shows"
            icon={<TvIcon />}
            sx={{ pl: 4 }}
          />
        </List>
      </Collapse>
    </List>
  );
};
