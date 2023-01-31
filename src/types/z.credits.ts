import * as z from 'zod';

const CastPersonSchema = z.object({
  adult: z.boolean(),
  gender: z.number(),
  id: z.number(),
  knownForDepartment: z.string(),
  name: z.string(),
  originalName: z.string(),
  popularity: z.number(),
  profilePath: z.string().nullable(),
  creditId: z.string(),
  castId: z.optional(z.number()), // none in crew
  character: z.string(), // none in crew
  order: z.number(), // none in crew
});

export type CastPersonType = z.infer<typeof CastPersonSchema>;

const CrewPersonSchema = z.object({
  adult: z.boolean(),
  gender: z.number(),
  id: z.number(),
  knownForDepartment: z.string(),
  name: z.string(),
  originalName: z.string(),
  popularity: z.number(),
  profilePath: z.string().nullable(),
  creditId: z.string(),
  department: z.string(), // none in cast
  job: z.string(), // none in cast
});

export type CrewPersonType = z.infer<typeof CrewPersonSchema>;

export const CreditsResponseSchema = z.object({
  cast: z.array(CastPersonSchema),
  crew: z.array(CrewPersonSchema),
  id: z.number(),
});

export type CreditsResponseType = z.infer<typeof CreditsResponseSchema>;
