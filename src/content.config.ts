import { glob } from 'astro/loaders';
import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';

const news = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/news' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
  }),
});

const research = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/research' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    order: z.number(),
  }),
});

// Questions you have answered. Each file: the question is the title, the body is your answer.
const ask = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/ask' }),
  schema: z.object({
    question: z.string(),
    date: z.coerce.date(),
  }),
});

export const collections = { news, research, ask };
