import * as z from 'zod';

export const TVEntitySchema = z.object({
  backdropPath: z.string().nullable(),
  firstAirDate: z.string(),
  genreIds: z.array(z.number()),
  id: z.number(),
  mediaType: z.string(), // not exist in similar
  name: z.string(),
  originCountry: z.array(z.string()),
  originalLanguage: z.string(),
  originalName: z.string(),
  overview: z.string(),
  popularity: z.number(),
  posterPath: z.string().nullable(),
  voteAverage: z.number(),
  voteCount: z.number(),
});

export type TVEntityType = z.infer<typeof TVEntitySchema>;

export const TVResponseSchema = z.object({
  page: z.number(),
  results: z.array(TVEntitySchema),
  totalPages: z.number(),
  totalResults: z.number(),
});

export type TVResponseType = z.infer<typeof TVResponseSchema>;

// SIMILAR
export const SimilarTVEntitySchema = TVEntitySchema.omit({
  mediaType: true,
});

export type SimilarTVEntityType = z.infer<typeof SimilarTVEntitySchema>;

export const SimilarTVResponseSchema = z.object({
  page: z.number(),
  results: z.array(SimilarTVEntitySchema),
  totalPages: z.number(),
  totalResults: z.number(),
});

export type SimilarTVResponseType = z.infer<typeof SimilarTVResponseSchema>;
