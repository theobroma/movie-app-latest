import dayjs from 'dayjs';
import LiteYouTubeEmbed from 'react-lite-youtube-embed';

import { Box, Paper, Grid } from '@mui/material';

interface Props {
  video: any;
}

export const VideosItem = ({ video }: Props) => {
  return (
    <Box pb={3}>
      <Paper elevation={3}>
        {/* <Grid item xs={12}> */}
        <Grid container>
          <Grid item xs={4}>
            <LiteYouTubeEmbed id={video.key} title="Trailer" webp />
          </Grid>
          <Grid item xs={8}>
            <Box p={3}>
              <Box
                component="span"
                // className={classes.title}
              >
                {video.name}
              </Box>
              <br />
              {video.type}
              &nbsp;-&nbsp;
              {/* {video.published_at} */}
              {dayjs(video.published_at).format('DD MMMM YYYY')}
            </Box>
          </Grid>
        </Grid>
        {/* </Grid> */}
      </Paper>
    </Box>
  );
};
