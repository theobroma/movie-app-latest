import { BaseQueryFn } from '@reduxjs/toolkit/query/react';
import { AxiosError, AxiosRequestConfig } from 'axios';

import { axiosInstance } from '@/shared/api/connection';
import { language2locale } from '@/shared/utils/language2locale';
import { waitForMe } from '@/shared/utils/waitforme';
import type { RootState } from '@/store/configureStore';
// import { MoviesResponseSchema, TVResponseSchema } from '@/types';

// const axiosBaseQuery =
//   (): BaseQueryFn<any> =>
//   async (requestOpts, { getState }) => {
//     try {
//       const languageAlpha2 = (getState() as RootState).ui.language;
//       const languageISO = alpha2iso(languageAlpha2);

//       console.log('languageISO', languageISO);

//       const result = await axiosInstance({
//         ...requestOpts,
//       });

//       return { data: result.data };
//     } catch (axiosError) {
//       const err = axiosError as AxiosError;
//       return {
//         error: { status: err.response?.status, data: err.response?.data },
//       };
//     }
//   };

// export const moviedbBaseQuery = axiosBaseQuery();

export const moviedbBaseQuery =
  ({ baseUrl }: { baseUrl: string } = { baseUrl: '' }): BaseQueryFn<any> =>
  async ({ url, method, data }) => {
    try {
      await waitForMe(1000);
      const res = await axiosInstance({
        url: baseUrl + url,
        method,
        data,
      });
      // ZOD validation
      try {
        // TVResponseSchema.parse(res.data);
        // MoviesResponseSchema.parse(res.data);
      } catch (error) {
        console.log(error);
      }

      return { data: res.data };
    } catch (axiosError) {
      const err = axiosError as AxiosError;

      return {
        error: { status: err.response?.status, data: err.response?.data },
      };
    }
  };
