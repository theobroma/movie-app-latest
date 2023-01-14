import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';

import { TimeWindowsEnum } from '@/enums/time-windows.enum';
import { useAppDispatch, useAppSelector } from '@/store/configureStore';
import { timeWindowsSelector } from '@/store/trending/selectors';
import { setTimeWindowsAC } from '@/store/trending/slice';

export const HomeTrendingTabs = () => {
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
        <Tab label="Day" value={TimeWindowsEnum.Day} />
        <Tab label="Week" value={TimeWindowsEnum.Week} />
      </Tabs>
    </Box>
  );
};
