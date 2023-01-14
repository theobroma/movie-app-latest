import { createSlice } from '@reduxjs/toolkit';

import { TimeWindowsEnum } from '@/enums/time-windows.enum';

export const trendingInitialState = {
  timeWindows: TimeWindowsEnum.Day,
};

export const trendingSlice = createSlice({
  name: 'trending',
  initialState: trendingInitialState,
  reducers: {
    setTimeWindowsAC(state, action) {
      state.timeWindows = action.payload;
    },
  },
});

export const { setTimeWindowsAC } = trendingSlice.actions;
