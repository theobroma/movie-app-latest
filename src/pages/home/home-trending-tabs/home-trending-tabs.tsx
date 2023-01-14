import { useState } from 'react';

import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';

export const HomeTrendingTabs = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{ display: 'flex', justifyContent: 'center', marginBottom: '24px' }}
    >
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="time windows tabs"
      >
        <Tab label="Day" />
        <Tab label="Week" />
      </Tabs>
    </Box>
  );
};
