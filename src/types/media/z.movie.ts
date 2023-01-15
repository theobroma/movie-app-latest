import * as z from 'zod';

export const MovieEntitySchema = z.object({
  adult: z.boolean(),
  backdropPath: z.string().nullable(),
  genreIds: z.array(z.number()),
  id: z.number(),
  mediaType: z.string(), // not exist in similar
  originalLanguage: z.string(),
  originalTitle: z.string(),
  overview: z.string(),
  popularity: z.number(),
  posterPath: z.string().nullable(),
  releaseDate: z.string(),
  title: z.string(),
  video: z.boolean(),
  voteAverage: z.number(),
  voteCount: z.number(),
});
export type MovieEntityType = z.infer<typeof MovieEntitySchema>;

export const MoviesResponseSchema = z.object({
  page: z.number(),
  results: z.array(MovieEntitySchema),
  totalPages: z.number(),
  totalResults: z.number(),
});

export type MoviesResponseType = z.infer<typeof MoviesResponseSchema>;

// SIMILAR
export const SimilarMovieEntitySchema = MovieEntitySchema.omit({
  mediaType: true,
});

export type SimilarMovieEntityType = z.infer<typeof SimilarMovieEntitySchema>;

export const SimilarMoviesResponseSchema = z.object({
  page: z.number(),
  results: z.array(SimilarMovieEntitySchema),
  total_pages: z.number(),
  total_results: z.number(),
});

export type SimilarMoviesResponseType = z.infer<
  typeof SimilarMoviesResponseSchema
>;
