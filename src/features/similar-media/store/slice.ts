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
  data: {} as any,
  // utils
  isFetching: false,
  isSuccess: false,
  isError: false,
  error: '' as string | null,
};

export const getSimilarMediaTC = createAsyncThunk<
  any,
  { mediaId: string; mediaType: string },
  { rejectValue: string }
>('similar/getSimilarMedia', async (param, thunkAPI) => {
  try {
    await waitForMe(500);
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
    // return thunkAPI.rejectWithValue(err.response.data);
    return thunkAPI.rejectWithValue(
      `Server Error fetching similar media.Error: ${JSON.stringify(
        err.response.data,
      )}`,
    );
  }
});

// export type SimilarInitialStateType = typeof similarInitialState;

export const similarSlice = createSlice({
  name: 'similar',
  initialState: similarInitialState,
  reducers: {
    resetStateAC: () => similarInitialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getSimilarMediaTC.pending, (state) => {
        state.isFetching = true;
        //   clear data
        state.data = {} as any;
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
        state.isFetching = false;
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
        state.isFetching = false;
      });
  },
});

function isError(action: AnyAction) {
  return action.type.endsWith('rejected');
}

// export const similarReducer = similarSlice.reducer;
// export const { resetStateAC } = similarSlice.actions;
