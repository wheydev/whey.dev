import { defineCollection, z } from 'astro:content'

const changelog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    description: z.string(),
    tags: z.array(z.string()).optional().default([]),
    product: z.string().optional(),
  }),
})

export const collections = { changelog }
