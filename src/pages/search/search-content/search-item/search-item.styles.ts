import { makeStyles } from 'tss-react/mui';

export const useStyles = makeStyles<void>()((_theme, _params, classes) => ({
  poster: {
    width: '100%',
    maxWidth: '94px',
    borderRadius: 10,
  },
}));
