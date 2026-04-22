import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";
import sanity from "@sanity/astro";
import vercel from "@astrojs/vercel";

export default defineConfig({
  adapter: vercel({
    // This tells Vercel: "Do not cache these paths, ever."
    isr: {
      exclude: ['/posts', '/posts/[slug]'] 
    }
  }),
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [
    sanity({
      projectId: "mxuj7pqe",
      dataset: "production",
      useCdn: false, // Always false for fresh data
    }),
  ],
  site: 'https://potscrys.vercel.app/',
});