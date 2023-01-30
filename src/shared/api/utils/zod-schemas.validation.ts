// ! for Schema debug
import { fromZodError } from 'zod-validation-error';

import {
  TVResponseSchema,
  MoviesResponseSchema,
  DetailsMovieSchema,
  DetailsTVSchema,
  TrailersResponseSchema,
  SimilarTVResponseSchema,
  SimilarMoviesResponseSchema,
} from '@/types';

export const ZodSchemasValidation = (url: string, res: any) => {
  const splittedUrl = url.split('?')[0];
  const asPathNestedRoutes = splittedUrl
    .split('/')
    .filter((v: string) => v.length > 0);

  // console.log('url :>> ', url);
  // console.log('splittedUrl :>> ', splittedUrl);
  // console.log('asPathNestedRoutes :>> ', asPathNestedRoutes);

  try {
    if (
      asPathNestedRoutes[0] === 'trending' &&
      asPathNestedRoutes[1] === 'tv'
    ) {
      console.log('TVResponseSchema Trending:>> ');
      TVResponseSchema.parse(res.data);
    }
    // ============================================
    if (
      asPathNestedRoutes[0] === 'trending' &&
      asPathNestedRoutes[1] === 'movie'
    ) {
      console.log('MoviesResponseSchema Trending:>> ');
      MoviesResponseSchema.parse(res.data);
    }
    // ============================================
    if (
      asPathNestedRoutes[0] === 'movie' &&
      typeof asPathNestedRoutes[1] !== 'undefined' &&
      typeof asPathNestedRoutes[2] === 'undefined'
    ) {
      console.log('DetailsMovieSchema :>> ');
      DetailsMovieSchema.parse(res.data);
    }
    // ============================================
    if (
      asPathNestedRoutes[0] === 'tv' &&
      typeof asPathNestedRoutes[1] !== 'undefined' &&
      typeof asPathNestedRoutes[2] === 'undefined'
    ) {
      console.log('DetailsTVSchema :>> ');
      DetailsTVSchema.parse(res.data);
    }
    // ============================================
    if (
      (asPathNestedRoutes[0] === 'movie' || asPathNestedRoutes[0] === 'tv') &&
      asPathNestedRoutes[2] === 'videos'
    ) {
      console.log('TrailersResponseSchema :>> ');
      TrailersResponseSchema.parse(res.data);
    }
    // ============================================
    if (asPathNestedRoutes[0] === 'tv' && asPathNestedRoutes[2] === 'similar') {
      console.log('SimilarTVResponseSchema :>> ');
      SimilarTVResponseSchema.parse(res.data);
    }
    // ============================================
    if (
      asPathNestedRoutes[0] === 'movie' &&
      asPathNestedRoutes[2] === 'similar'
    ) {
      console.log('SimilarMoviesResponseSchema :>> ');
      SimilarMoviesResponseSchema.parse(res.data);
    }
    // ============================================
    // console.log('res.data :>> ', res.data);
  } catch (error: any) {
    // console.log(error);
    const validationError = fromZodError(error);
    // the error now is readable by the user
    // you may print it to console
    // or return it via an API
    console.log(validationError);
  }
};
