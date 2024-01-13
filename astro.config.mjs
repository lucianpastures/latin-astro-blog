import { defineConfig } from "astro/config";
import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://polite-rugelach-69d56b.netlify.app/",
  integrations: [preact()],
});
