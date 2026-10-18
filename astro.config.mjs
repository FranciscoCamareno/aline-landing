// @ts-check
import { defineConfig } from "astro/config";
import { SITE_URL } from "./src/config/site.ts";

// El dominio vive en src/config/site.ts (SITE_URL): canonical, hreflang, Open Graph, sitemap y robots.
const site = SITE_URL;

export default defineConfig({
  site,
  output: "static",
  trailingSlash: "always",
  i18n: {
    defaultLocale: "en",
    locales: ["en", "es"],
    routing: {
      prefixDefaultLocale: true,
      // La raíz la resuelven worker/index.ts y src/pages/index.astro
      redirectToDefaultLocale: false,
    },
  },
  vite: {
    optimizeDeps: {
      // Se importan dinámicamente desde los scripts de las islas, así que Vite no las encuentra al
      // arrancar: sin esto las descubre tarde, reoptimiza y deja cargas colgadas ("Failed to fetch
      // dynamically imported module"), sobre todo si se ejecuta un build con `pnpm dev` abierto.
      include: ["gsap", "gsap/ScrollTrigger", "gsap/DrawSVGPlugin", "perfect-freehand"],
    },
  },
});
