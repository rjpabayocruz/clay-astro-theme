import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

import sanity from "@sanity/astro";
import vercel from "@astrojs/vercel/serverless"; // 1. Import the adapter
//test something
// https://astro.build/config
export default defineConfig({
  output: 'hybrid', // or 'server'
  adapter: vercel(),
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [
    // 👇 update these lines
    sanity({
      projectId: "mxuj7pqe",
      dataset: "production",
      apiVersion: "2024-04-21",
      useCdn: false, // for static builds
    }),
  ],
  site: 'https://potscrys.vercel.app/',
});
