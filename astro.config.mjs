import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://astrolads.com',
  trailingSlash: 'never',
  integrations: [
    sitemap(),
  ],
});