import {
  AnyAction,
  PayloadAction,
  createAsyncThunk,
  createSlice,
} from '@reduxjs/toolkit';

import { moviesAPI } from '@/shared/api/media.api';
import { waitForMe } from '@/utils/waitforme';

const detailsInitialState = {
  data: {} as any,
  // utils
  isLoading: false,
  isSuccess: false,
  isError: false,
  error: '' as string | null,
};

export const getMediaDetailsTC = createAsyncThunk<
  any,
  { mediaId: string; mediaType: string },
  { rejectValue: any }
>('details/getMediaDetails', async (param, thunkAPI) => {
  try {
    await waitForMe(1000);
    const res = await moviesAPI.getMediaDetails(param.mediaId, param.mediaType);

    // ZOD validation
    // try {
    //   if (param.mediaType === MediaTypeEnum.TV) {
    //     SimilarTVResponseSchema.parse(res.data);
    //   }
    //   if (param.mediaType === MediaTypeEnum.Movie) {
    //     SimilarMoviesResponseSchema.parse(res.data);
    //   }
    // } catch (error) {
    //   console.log(error);
    // }

    return res.data;
  } catch (err: any) {
    return thunkAPI.rejectWithValue(err.response.data);
  }
});

export const detailsSlice = createSlice({
  name: 'details',
  initialState: detailsInitialState,
  reducers: {
    resetStateAC: () => detailsInitialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getMediaDetailsTC.pending, (state) => {
        state.isLoading = true;
        //   clear data
        state.data = {} as any;
        state.isSuccess = false;
        state.isError = false;
        state.error = '';
      })
      .addCase(getMediaDetailsTC.fulfilled, (state, action) => {
        if (action.payload) {
          state.data = action.payload;
          // simulate empty results
          // state.data.results = [];
        }
        state.isLoading = false;
        state.isSuccess = true;
      })
      // .addCase(getSimilarMediaTC.rejected, (state, action) => {
      //   state.isFetching = false;
      //   state.isError = true;
      //   if (action.payload) {
      //     state.error = action.payload;
      //   }
      // })
      .addMatcher(isError, (state, action: PayloadAction<string>) => {
        state.error = action.payload;
        state.isError = true;
        state.isLoading = false;
      });
  },
});

function isError(action: AnyAction) {
  return action.type.endsWith('rejected');
}

// const { resetStateAC } = detailsSlice.actions;
