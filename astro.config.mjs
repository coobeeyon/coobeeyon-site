// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: process.env.SITE_URL ?? process.env.URL ?? 'https://coobeeyon.net',
	integrations: [mdx(), sitemap()],
});
