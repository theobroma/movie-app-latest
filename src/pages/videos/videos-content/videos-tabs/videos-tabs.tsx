import { useEffect, useState } from 'react';

import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { Badge } from '@mui/material';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';

interface Props {
  groupedVideos: any;
}

export const VideosTabs = ({ groupedVideos }: Props) => {
  const tabKeys = Object.keys(groupedVideos);
  const [value, setValue] = useState('');

  useEffect(() => {
    setValue(tabKeys[0]);
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
              {tabKeys.map((tab) => (
                <Tab
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
          {tabKeys.map((tab, idx: number) => (
            <TabPanel value={tab}>{idx}</TabPanel>
          ))}
        </TabContext>
      )}
    </Box>
  );
};
