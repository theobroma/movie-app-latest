import {
  createAsyncThunk,
  createSlice,
  PayloadAction,
  AnyAction,
} from '@reduxjs/toolkit';

import { moviesAPI } from '@/api/media.api';
// import { SimilarTVResponseSchema, SimilarMoviesResponseSchema } from '@/types';
import { waitForMe } from '@/utils/waitforme';

const similarInitialState = {
  data: [] as any,
  // utils
  isLoading: false,
  isSuccess: false,
  isError: false,
  error: '' as string | null,
};

export const getSimilarMediaTC = createAsyncThunk<
  any,
  { mediaId: string; mediaType: string },
  { rejectValue: any }
>('similar/getSimilarMedia', async (param, thunkAPI) => {
  try {
    await waitForMe(1000);
    const res = await moviesAPI.getSimilar(param.mediaId, param.mediaType);

    // ZOD validation
    try {
      //   SimilarTVResponseSchema.parse(res.data);
      //   SimilarMoviesResponseSchema.parse(res.data);
    } catch (error) {
      console.log(error);
    }

    return res.data;
  } catch (err: any) {
    return thunkAPI.rejectWithValue(err.response.data);
  }
});

export const similarSlice = createSlice({
  name: 'similar',
  initialState: similarInitialState,
  reducers: {
    resetStateAC: () => similarInitialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getSimilarMediaTC.pending, (state) => {
        state.isLoading = true;
        //   clear data
        state.data = [] as any;
        state.isSuccess = false;
        state.isError = false;
        state.error = '';
      })
      .addCase(getSimilarMediaTC.fulfilled, (state, action) => {
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

// export const { resetStateAC } = similarSlice.actions;
