import { makeStyles } from 'tss-react/mui';

export const useStyles = makeStyles<void>()((_theme, _params, classes) => ({
  name: {
    fontSize: '1.2em',
    lineHeight: '1.2em',
    fontWeight: 700,
    color: '#000',
  },
  episodes: {
    fontSize: '1em',
    lineHeight: '1em',
  },
  releaseDate: {
    color: '#999',
  },
  poster: {
    width: '100%',
    maxWidth: '94px',
    borderRadius: 10,
  },
}));
