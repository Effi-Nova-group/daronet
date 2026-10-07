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

const caseStudies = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/case-studies' }),
  schema: ({ image }) =>
    z.object({
      order: z.number(),
      client: z.string(),
      sector: z.string(),
      title: z.string(),
      subtitle: z.string(),
      logo: image().optional(),
      // Background of the logo file itself, so a plate can extend it edge to edge
      // instead of upscaling a small raster to cover the field.
      logoBg: z.string().optional(),
      heroImage: image().optional(),
      stats: z.array(z.object({ label: z.string(), value: z.string() })).default([]),
      featured: z.boolean().default(false),
      publishedAt: z.coerce.date(),
      metaTitle: z.string(),
      metaDescription: z.string(),
      ctaHeading: z.string(),
      ctaBody: z.string(),
    }),
});

export const collections = { blog, caseStudies };
