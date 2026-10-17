// @ts-check
import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://aline.app",
  output: "static",
  trailingSlash: "always",
  i18n: {
    defaultLocale: "en",
    locales: ["en", "es"],
    routing: {
      prefixDefaultLocale: true,
      // La raíz la resuelven functions/_middleware.ts y src/pages/index.astro
      redirectToDefaultLocale: false,
    },
  },
});
