import * as z from 'zod';

import {
  GenresSchema,
  ProductionCompaniesSchema,
  ProductionCountriesSchema,
  SpokenLanguagesSchema,
} from './z.details-shared';

export const SeasonSchema = z.object({
  airDate: z.string(),
  episodeCount: z.number(),
  id: z.number(),
  name: z.string(),
  overview: z.string(),
  posterPath: z.string(),
  seasonNumber: z.number(),
});

export type SeasonType = z.infer<typeof SeasonSchema>;

export const DetailsTVSchema = z.object({
  adult: z.boolean(),
  backdropPath: z.string(),
  createdBy: z.array(
    z.object({
      id: z.number(),
      creditId: z.string(),
      name: z.string(),
      gender: z.number(),
      profilePath: z.string().nullable(),
    }),
  ),
  episodeRunTime: z.array(z.number()),
  firstAirDate: z.string(),
  genres: GenresSchema,
  homepage: z.string(),
  id: z.number(),
  inProduction: z.boolean(),
  languages: z.array(z.string()),
  lastAirDate: z.string(),
  lastEpisodeToAir: z.object({
    airDate: z.string(),
    episodeNumber: z.number(),
    id: z.number(),
    name: z.string(),
    overview: z.string(),
    productionCode: z.string(),
    seasonNumber: z.number(),
    stillPath: z.string().nullable(),
    voteAverage: z.number(),
    voteCount: z.number(),
  }),
  name: z.string(),
  nextEpisodeToAir: z
    .object({
      airDate: z.string(),
      episodeNumber: z.number(),
      id: z.number(),
      name: z.string(),
      overview: z.string(),
      productionCode: z.string(),
      seasonNumber: z.number(),
      stillPath: z.null().nullable(),
      voteAverage: z.number(),
      voteCount: z.number(),
    })
    .nullable(),
  networks: z.array(
    z.object({
      name: z.string(),
      id: z.number(),
      logoPath: z.string(),
      originCountry: z.string(),
    }),
  ),
  numberOfEpisodes: z.number(),
  numberOfSeasons: z.number(),
  originCountry: z.array(z.string()),
  originalLanguage: z.string(),
  originalName: z.string(),
  overview: z.string(),
  popularity: z.number(),
  posterPath: z.string(),
  productionCompanies: ProductionCompaniesSchema,
  productionCountries: ProductionCountriesSchema,
  seasons: z.array(SeasonSchema),
  spokenLanguages: SpokenLanguagesSchema,
  status: z.string(),
  tagline: z.string(),
  type: z.string(),
  voteAverage: z.number(),
  voteCount: z.number(),
});

export type DetailsTVType = z.infer<typeof DetailsTVSchema>;
