// https://docs.tss-react.dev/nested-selectors

import { makeStyles } from 'tss-react/mui';

export const useStyles = makeStyles<void>()((_theme, _params, classes) => ({
  videoLink: {
    display: 'flex',
    fontWeight: 'bold',
    color: '#000',
    fontSize: '1.1em',
    textDecoration: 'none',
    '&:hover': {
      color: 'rgba(0, 0, 0, 0.65)',
    },
  },
}));
