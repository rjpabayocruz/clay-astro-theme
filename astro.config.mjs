import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";
import sanity from "@sanity/astro";
import vercel from "@astrojs/vercel"; // 1. Change this from /serverless

export default defineConfig({
  // 2. REMOVE the 'output' line entirely (it defaults to static now)
  adapter: vercel(), 
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [
    sanity({
      projectId: "mxuj7pqe",
      dataset: "production",
      useCdn: false, 
    }),
  ],
  site: 'https://potscrys.vercel.app/',
});