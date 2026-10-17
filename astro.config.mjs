// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

const site = "https://aline.app";

export default defineConfig({
  site,
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
  vite: {
    optimizeDeps: {
      // Se importan dinámicamente desde los scripts de las islas, así que Vite no las encuentra al
      // arrancar: sin esto las descubre tarde, reoptimiza y deja cargas colgadas ("Failed to fetch
      // dynamically imported module"), sobre todo si se ejecuta un build con `pnpm dev` abierto.
      include: ["gsap", "gsap/ScrollTrigger", "gsap/DrawSVGPlugin", "perfect-freehand"],
    },
  },
  integrations: [
    sitemap({
      // /en/ y /es/ enlazadas entre sí con hreflang. Las páginas en blanco (noindex) quedan fuera:
      // quita su slug de esta lista cuando tengan diseño y contenido propios.
      filter: (page) =>
        page !== `${site}/` && !["install", "about", "terms", "privacy"].some((p) => page.includes(`/${p}/`)),
      i18n: { defaultLocale: "en", locales: { en: "en", es: "es" } },
    }),
  ],
});
