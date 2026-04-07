// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

import sanity from '@sanity/astro';

// https://astro.build/config
export default defineConfig({
    site: 'https://clay-astro-theme.netlify.app',
    integrations: [sitemap(), sanity()],
});

sanity({
  projectId: import.meta.env.SANITY_PROJECT_ID, // Is this name correct?
})