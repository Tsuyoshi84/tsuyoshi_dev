import { defineCollection } from 'astro:content'
import { blogSchema } from '../schemas.ts'

const blogCollection = defineCollection({
	type: 'content',
	schema: blogSchema,
})

export const collections = {
	blog: blogCollection,
}
