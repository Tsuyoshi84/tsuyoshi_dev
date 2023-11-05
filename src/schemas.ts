import { z } from 'astro:content'

const blogTagSchema = z.enum(['astro', 'vue'])

export const blogSchema = z.object({
	/** Blog title */
	title: z.string(),
	/** Blog description */
	description: z.string().optional(),
	/** Published date */
	publishDate: z.string().datetime(),
	/** Tags */
	tags: blogTagSchema.array(),
})

export type Blog = z.infer<typeof blogSchema>
