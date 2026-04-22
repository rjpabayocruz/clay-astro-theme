import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

import sanity from "@sanity/astro";

// https://astro.build/config
export default defineConfig({
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
