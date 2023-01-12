// https://stackoverflow.com/questions/59339321/how-to-change-visibility-of-another-class-when-hovering-using-jss
// https://docs.tss-react.dev/nested-selectors

import { makeStyles } from 'tss-react/mui';

export const useStyles = makeStyles<void, 'mask'>()(
  (_theme, _params, classes) => ({
    media: {
      display: 'flex',
      flexDirection: 'column',
      padding: 5,
      margin: '5px 0',
      color: 'black',
      position: 'relative',
    },
    poster: {
      width: '100%',
      borderRadius: 10,
      marginBottom: '-5px', // workaround
    },
    posterLink: {
      textDecoration: 'none',
      position: 'relative',

      [`&:hover .${classes.mask}`]: {
        opacity: 1,
      },
    },
    title: {
      display: 'block',
      textDecoration: 'none',
      fontSize: 14,
      fontWeight: 500,
      // color: `${theme.palette.text.primary}`,
      color: 'rgba(0, 0, 0, 0.87)',
      margin: '10px 0 0',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      transition: 'all .3s',
      '&:hover': {
        color: '#31C469',
        // color: `${theme.palette.primary.main}`,
      },
    },
    subTitle: {
      // color: `${theme.palette.text.secondary}`,
      color: '#8f95a3',
      margin: '0 0 5px',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
    },
    mask: {
      display: 'flex ',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'absolute',
      left: 0,
      top: 0,
      width: '100%',
      height: '100%',
      fontSize: 28,
      textAlign: 'center',
      padding: 10,
      borderRadius: 10,
      background: 'linear-gradient(to bottom,#151617b8,#151617b8)',
      opacity: 0,
      zIndex: 5,
      transition: 'all .3s',
      '& > div': {
        position: 'relative',
        height: 60,
        width: 60,
        backgroundColor: '#1e1d21',
        borderRadius: '50%',
        // for icon
        fontSize: '54px',
        color: ' #31C469',
        // color: `${theme.palette.primary.main}`,
      },
    },
  }),
);

// export const StyledBadge = withStyles((theme: Theme) =>
//   createStyles({
//     badge: {
//       right: 30,
//       top: 24,
//       border: `2px solid ${theme.palette.background.paper}`,
//       padding: '0 4px',
//       minWidth: '35px',
//     },
//   }),
// )(Badge);
