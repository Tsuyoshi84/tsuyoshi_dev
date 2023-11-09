import { defineConfig } from 'astro/config'
import remarkCodeTitles from 'remark-code-titles'

import mdx from '@astrojs/mdx'

// https://astro.build/config
export default defineConfig({
	markdown: {
		shikiConfig: {
			theme: 'vitesse-dark',
		},
		remarkPlugins: [remarkCodeTitles],
	},
	integrations: [mdx()],
})
