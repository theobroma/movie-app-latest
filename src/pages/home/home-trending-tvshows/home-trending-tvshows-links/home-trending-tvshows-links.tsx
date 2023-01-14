import { Link as RouterLink } from 'react-router-dom';

import LinkIcon from '@mui/icons-material/Link';
import { Box, Button, Grid } from '@mui/material';

import { PageEnum } from '@/enums/page.enum';

export const HomeTrendingTvshowsLinks = () => (
  <Grid item xs={12}>
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        py: '12px',
      }}
    >
      <RouterLink
        to={PageEnum.TrendingTV}
        style={{
          textDecoration: 'none',
        }}
      >
        <Button variant="contained" color="primary">
          TV Shows
          {/* <Trans i18nKey="Movies" /> */}
        </Button>
      </RouterLink>
      <RouterLink
        to={PageEnum.TrendingTV}
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
