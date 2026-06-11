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

const col = (base: string) =>
  defineCollection({ loader: glob({ pattern: '**/*.md', base }), schema });

export const collections = {
  markets_notes: col('./src/content/markets/notes'),
  markets_exercises: col('./src/content/markets/exercises'),
  agt_notes: col('./src/content/game-theory/notes'),
  agt_exercises: col('./src/content/game-theory/exercises'),
  micro_notes: col('./src/content/microeconomics/notes'),
  micro_exercises: col('./src/content/microeconomics/exercises'),
};
