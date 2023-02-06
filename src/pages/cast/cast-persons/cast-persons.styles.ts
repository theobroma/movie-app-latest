import { makeStyles } from 'tss-react/mui';

export const useStyles = makeStyles<void>()((_theme, _params, classes) => ({
  title: {
    fontWeight: 600,
    fontSize: '1.4em',
    marginBottom: '18px',
  },
  departmentTitle: {
    fontWeight: 600,
    fontSize: '1.2em',
    marginBottom: '8px',
  },
  count: {
    fontWeight: 400,
    opacity: 0.6,
  },
}));
