import PopupState, { bindPopper, bindToggle } from 'material-ui-popup-state';
import { useSnackbar } from 'notistack';
import { FaRegShareSquare } from 'react-icons/fa';
import { makeStyles } from 'tss-react/mui';

import { ClickAwayListener } from '@mui/base';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkIcon from '@mui/icons-material/Link';
import RedditIcon from '@mui/icons-material/Reddit';
import TwitterIcon from '@mui/icons-material/Twitter';
import {
  alpha,
  Button,
  Fade,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  Popper,
} from '@mui/material';

const useStyles = makeStyles()((theme, _params, classes) => ({
  typography: {
    padding: theme.spacing(2),
  },
  btn: {
    backgroundColor: '#26a27b',
    color: 'rgba(255,255,255,0.9)',
    fontWeight: 500,
    '&:hover': {
      backgroundColor: alpha('#26a27b', 0.9085),
    },
  },
}));

export const DropdownShareButton = () => {
  const { classes } = useStyles();
  const { enqueueSnackbar } = useSnackbar();

  const handleShare = (e: any) => {
    e.preventDefault();
    const ahref = window.location.href;
    const encodedAhref = encodeURIComponent(ahref);
    let link;
    switch (e.currentTarget.id) {
      case 'facebook':
        link = `https://www.facebook.com/sharer/sharer.php?u=${ahref}`;
        open(link);
        break;
      case 'twitter':
        link = `https://twitter.com/intent/tweet?url=${encodedAhref}`;
        open(link);
        break;
      case 'reddit':
        link = `https://www.reddit.com/submit?url=${encodedAhref}`;
        open(link);
        break;
      case 'copy':
        navigator.clipboard.writeText(ahref);
        enqueueSnackbar('Link copied to clipboard', {
          variant: 'success',
        });
        break;
      default:
        break;
    }
  };

  const open = (socialLink: string) => {
    window.open(socialLink, '_blank');
  };

  return (
    <PopupState variant="popper" popupId="demo-popup-popper">
      {(popupState) => (
        <ClickAwayListener onClickAway={popupState.close}>
          <div>
            <Button
              className={classes.btn}
              color="inherit"
              {...bindToggle(popupState)}
            >
              <FaRegShareSquare />
              Share Article
            </Button>
            <Popper {...bindPopper(popupState)} transition>
              {({ TransitionProps }) => (
                <Fade {...TransitionProps} timeout={350}>
                  <Paper>
                    <List
                      dense
                      // className={classes.paper}
                    >
                      <ListItem button id="facebook" onClick={handleShare}>
                        <ListItemIcon>
                          <FacebookIcon />
                        </ListItemIcon>
                        <ListItemText primary="Facebook" />
                      </ListItem>
                      <ListItem button id="twitter" onClick={handleShare}>
                        <ListItemIcon>
                          <TwitterIcon />
                        </ListItemIcon>
                        <ListItemText primary="Twitter" />
                      </ListItem>
                      <ListItem button id="reddit" onClick={handleShare}>
                        <ListItemIcon>
                          <RedditIcon />
                        </ListItemIcon>
                        <ListItemText primary="Reddit" />
                      </ListItem>
                      <ListItem button id="copy" onClick={handleShare}>
                        <ListItemIcon>
                          <LinkIcon />
                        </ListItemIcon>
                        <ListItemText primary="Copy Link" />
                      </ListItem>
                    </List>
                  </Paper>
                </Fade>
              )}
            </Popper>
          </div>
        </ClickAwayListener>
      )}
    </PopupState>
  );
};
