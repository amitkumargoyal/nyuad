import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const schema = z.object({
  title: z.string(),
  description: z.string(),
  date: z.coerce.date(),
  // Optional explicit ordering on the course page; lower numbers first.
  // Falls back to date order when omitted.
  order: z.number().optional(),
  draft: z.boolean().default(false),
});

const notes = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/notes' }),
  schema,
});

const exercises = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/exercises' }),
  schema,
});

export const collections = { notes, exercises };
