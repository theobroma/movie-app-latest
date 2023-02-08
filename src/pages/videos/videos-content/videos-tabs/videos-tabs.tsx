import { Badge } from '@mui/material';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';

import { TimeWindowsEnum } from '@/enums/time-windows.enum';
import { useAppDispatch, useAppSelector } from '@/store/configureStore';
import { timeWindowsSelector } from '@/store/trending/selectors';
import { setTimeWindowsAC } from '@/store/trending/slice';

interface Props {
  tabKeys: Array<string>;
}

export const VideosTabs = ({ tabKeys }: Props) => {
  const dispatch = useAppDispatch();
  const timeWindows = useAppSelector(timeWindowsSelector);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    dispatch(setTimeWindowsAC(newValue));
  };

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
                <Badge badgeContent={4} color="primary" />
              </Box>
            }
            value={tab}
          />
        ))}
      </Tabs>
    </Box>
  );
};
