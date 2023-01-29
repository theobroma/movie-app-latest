import { BaseQueryFn } from '@reduxjs/toolkit/query/react';
import { AxiosError } from 'axios';
import { fromZodError } from 'zod-validation-error';

import { axiosInstance } from '@/shared/api/connection';
import { DetailsMovieSchema, DetailsTVSchema } from '@/types';
import { waitForMe } from '@/utils/waitforme';

export const baseQuery =
  ({ baseUrl }: { baseUrl: string } = { baseUrl: '' }): BaseQueryFn<any> =>
  async ({ url, method, data }) => {
    try {
      await waitForMe(1000);
      const res = await axiosInstance({
        url: baseUrl + url,
        method,
        data,
      });

      const splittedUrl = url.split('?')[0];
      const asPathNestedRoutes = splittedUrl
        .split('/')
        .filter((v: any) => v.length > 0);

      // console.log('url :>> ', url);
      // console.log('splittedUrl :>> ', splittedUrl);
      // console.log('asPathNestedRoutes :>> ', asPathNestedRoutes);

      // ZOD validation
      try {
        console.log('res.data :>> ', res.data);
        // TVResponseSchema.parse(res.data);
        // MoviesResponseSchema.parse(res.data);
        // DetailsTVSchema.parse(res1.data);
        // if (param.mediaType === MEDIA_TYPE.TV) {
        //   DetailsTVSchema.parse(res1.data);
        // }
        // if (asPathNestedRoutes[0] === 'movie') {
        //   DetailsMovieSchema.parse(res.data);
        // }
      } catch (error: any) {
        // console.log(error);
        const validationError = fromZodError(error);
        // the error now is readable by the user
        // you may print it to console
        // or return it via an API
        console.log(validationError);
      }

      return { data: res.data };
    } catch (axiosError) {
      const err = axiosError as AxiosError;

      return {
        error: { status: err.response?.status, data: err.response?.data },
      };
    }
  };
