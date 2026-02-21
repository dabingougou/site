import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    tools: z.array(z.string()).default([]),
    date: z.coerce.date(),
    links: z.object({ repo: z.string().url().optional(), demo: z.string().url().optional() }).optional(),
    featured: z.boolean().default(false),
  }),
});

const posts = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    date: z.coerce.date(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { projects, posts };
