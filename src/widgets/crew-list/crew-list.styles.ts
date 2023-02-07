import { makeStyles } from 'tss-react/mui';

export const useStyles = makeStyles<void>()((_theme, _params, classes) => ({
  crewList: {
    marginTop: '20px',
    padding: 0,
    listStyle: 'none',
  },
  link: {
    color: '#fff',
    fontWeight: 600,
    fontSize: '1.1em',
    margin: 0,
    textDecoration: 'none',
    '&:hover': {
      color: 'rgba(255, 255, 255, 0.7)',
    },
  },
}));
