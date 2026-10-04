import { unified } from '@astrojs/markdown-remark'
import mdx from '@astrojs/mdx'
import { defineConfig } from 'astro/config'
import remarkCodeTitles from 'remark-code-titles'

// https://astro.build/config
export default defineConfig({
	compressHTML: true,
	markdown: {
		processor: unified({ remarkPlugins: [remarkCodeTitles] }),
		shikiConfig: {
			theme: 'vitesse-dark',
		},
	},
	integrations: [mdx()],
})
