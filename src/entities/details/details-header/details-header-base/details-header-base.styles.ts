import { makeStyles } from 'tss-react/mui';

export const useStyles = makeStyles<void>()((_theme, _params, classes) => ({
  root: {
    background: 'rgb(56 56 56)',
  },
  media: {
    display: 'flex',
    alignItems: 'center',
  },
  mediaBody: {
    flex: 1,
  },
  mediaFigure: {
    borderRadius: 4,
    marginRight: '1em',
  },
  titleMedia: {
    fontWeight: 700,
    color: '#fff',
    textDecoration: 'none',
    '&:hover': {
      color: 'rgba(255, 255, 255, 0.7)',
      textDecoration: 'none',
    },
  },
  titleDate: {
    opacity: 0.8,
    fontWeight: 400,
    color: '#fff',
  },
  link: {
    color: '#fff',
    // fontFamily: 'Source Sans Pro', Arial, sans-serif,
    fontSize: '1.1em',
    fontWeight: 600,
    margin: 0,
    opacity: 0.6,
    '&:hover': {
      color: 'rgba(255, 255, 255, 0.7)',
      textDecoration: 'none',
    },
  },
}));
