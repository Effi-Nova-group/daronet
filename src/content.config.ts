import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      tag: z.string(),
      image: image(),
      author: z.string(),
      authorRole: z.string(),
      publishDate: z.coerce.date(),
      order: z.number(),
    }),
});

export const collections = { blog };
