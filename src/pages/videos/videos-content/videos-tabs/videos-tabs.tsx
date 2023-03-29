import { useEffect, useState } from 'react';

import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { Badge } from '@mui/material';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';

import { VideosItem } from '@/pages/videos/videos-content/videos-item/videos-item';

interface Props {
  groupedVideos: any;
}

export const VideosTabs = ({ groupedVideos }: Props) => {
  const tabKeys = Object.keys(groupedVideos);
  const [value, setValue] = useState('');

  useEffect(() => {
    setValue(tabKeys[0]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [groupedVideos]);

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      {value && (
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              {tabKeys.map((tab, idx: number) => (
                <Tab
                  key={idx}
                  label={
                    <Box sx={{ display: 'flex' }}>
                      <Box>{tab}</Box>
                      <Badge
                        badgeContent={groupedVideos[tab].length}
                        color="primary"
                      />
                    </Box>
                  }
                  value={tab}
                />
              ))}
            </TabList>
          </Box>
          {tabKeys.map((tab, idx: number) => {
            const filteredVideos = groupedVideos[tab];
            return (
              <TabPanel key={idx} value={tab}>
                {filteredVideos.map((video: any, indx: number) => (
                  <VideosItem key={indx} video={video} />
                ))}
              </TabPanel>
            );
          })}
        </TabContext>
      )}
    </Box>
  );
};
