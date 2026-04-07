// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import sanity from '@sanity/astro';

// https://astro.build/config
export default defineConfig({
    site: 'https://clay-astro-theme.netlify.app',
    integrations: [
        sitemap(), 
        sanity({
            projectId: import.meta.env.SANITY_PROJECT_ID,
            dataset: import.meta.env.SANITY_DATASET || 'production',
            useCdn: true,
            apiVersion: '2024-04-07',
        })
    ],
});