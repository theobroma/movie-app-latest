import { Link as RouterLink } from 'react-router-dom';

import LinkIcon from '@mui/icons-material/Link';
import { Box, Button, Grid } from '@mui/material';

import { PageEnum } from '@/enums/page.enum';

export const HomeTrendingMoviesLinks = () => (
  <Grid item xs={12}>
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: '24px',
      }}
    >
      <RouterLink
        to={PageEnum.TrendingMovies}
        style={{
          textDecoration: 'none',
        }}
      >
        <Button variant="contained" color="primary">
          Movies
          {/* <Trans i18nKey="Movies" /> */}
        </Button>
      </RouterLink>
      <RouterLink
        to={PageEnum.TrendingMovies}
        style={{
          textDecoration: 'none',
        }}
      >
        <Button variant="outlined" color="primary" endIcon={<LinkIcon />}>
          More
          {/* <Trans i18nKey="Btn.More" /> */}
        </Button>
      </RouterLink>
    </Box>
  </Grid>
);
