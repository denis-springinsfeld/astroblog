// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";

import sitemap from "@astrojs/sitemap";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://denis-springinsfeld.github.io",
  base: "astroblog",
  integrations: [mdx(), sitemap(), tailwind()],
});
