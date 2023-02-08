import { Badge } from '@mui/material';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';

import { useAppDispatch, useAppSelector } from '@/store/configureStore';
import { timeWindowsSelector } from '@/store/trending/selectors';
import { setTimeWindowsAC } from '@/store/trending/slice';

interface Props {
  groupedVideos: any;
}

export const VideosTabs = ({ groupedVideos }: Props) => {
  const dispatch = useAppDispatch();
  const timeWindows = useAppSelector(timeWindowsSelector);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    dispatch(setTimeWindowsAC(newValue));
  };

  console.log('groupedVideos', groupedVideos);
  const tabKeys = Object.keys(groupedVideos);

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
      <Tabs
        value={timeWindows}
        onChange={handleChange}
        aria-label="time windows tabs"
      >
        {/* <Tab label="Day" value={TimeWindowsEnum.Day} />
        <Tab label="Week" value={TimeWindowsEnum.Week} /> */}
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
      </Tabs>
    </Box>
  );
};
