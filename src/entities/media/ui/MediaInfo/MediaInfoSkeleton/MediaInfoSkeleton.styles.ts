import { makeStyles } from 'tss-react/mui';

export const useStyles = makeStyles<void>()((_theme, _params, classes) => ({
  skeleton: {
    background: 'rgb(181, 181, 181)',
  },
  icon: {
    color: 'rgb(181, 181, 181)',
  },
}));
