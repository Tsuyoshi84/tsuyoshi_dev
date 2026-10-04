import { defineCollection } from 'astro:content'
import { glob } from 'astro/loaders'
import { blogSchema } from './schemas.ts'

const blogCollection = defineCollection({
	loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: './src/content/blog' }),
	schema: blogSchema,
})

export const collections = {
	blog: blogCollection,
}
