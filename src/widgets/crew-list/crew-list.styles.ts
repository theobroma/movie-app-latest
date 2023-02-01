import { makeStyles } from 'tss-react/mui';

export const useStyles = makeStyles<void>()((_theme, _params, classes) => ({
  crewList: {
    marginTop: '20px',
    padding: 0,
    listStyle: 'none',
  },
}));
