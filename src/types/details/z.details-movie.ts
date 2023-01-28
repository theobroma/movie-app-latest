import * as z from 'zod';

import {
  GenresSchema,
  ProductionCompaniesSchema,
  ProductionCountriesSchema,
  SpokenLanguagesSchema,
} from './z.details-shared';

export const DetailsMovieSchema = z.object({
  adult: z.boolean(),
  backdropPath: z.string(),
  belongsToCollection: z
    .object({
      id: z.number(),
      name: z.string(),
      posterPath: z.string().nullable(),
      backdropPath: z.string().nullable(),
    })
    .nullable(),
  budget: z.number(),
  genres: GenresSchema,
  homepage: z.string(),
  id: z.number(),
  imdbId: z.string(),
  originalLanguage: z.string(),
  originalTitle: z.string(),
  overview: z.string(),
  popularity: z.number(),
  posterPath: z.string(),
  productionCompanies: ProductionCompaniesSchema,
  productionCountries: ProductionCountriesSchema,
  releaseDate: z.string(),
  revenue: z.number(),
  runtime: z.number(),
  spokenLanguages: SpokenLanguagesSchema,
  status: z.string(),
  tagline: z.string(),
  title: z.string(),
  video: z.boolean(),
  voteAverage: z.number(),
  voteCount: z.number(),
});

export type DetailsMovieType = z.infer<typeof DetailsMovieSchema>;
