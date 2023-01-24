import { BaseQueryFn } from '@reduxjs/toolkit/query/react';
import { AxiosError } from 'axios';

import { axiosInstance } from '@/api/connection';
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

      // console.log('url :>> ', url);
      // const splittedUrl = url.split('?')[0];
      // console.log('splittedUrl :>> ', splittedUrl);
      // const asPathNestedRoutes = splittedUrl
      //   .split('/')
      //   .filter((v: any) => v.length > 0);
      // console.log('asPathNestedRoutes :>> ', asPathNestedRoutes);

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
