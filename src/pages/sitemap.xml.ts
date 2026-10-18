/**
 * sitemap.xml para Google Search Console (se publica en /sitemap.xml).
 * Lista cada página indexable con sus versiones en otros idiomas (hreflang). Las páginas en
 * NOINDEX_SLUGS no entran: llevan `noindex` y Google avisaría de la contradicción.
 */
import type { APIRoute } from "astro";
import { NOINDEX_SLUGS, PAGE_SLUGS, SITE_URL } from "../config/site";
import { LANGS } from "../i18n";

const abs = (path: string) => new URL(path, SITE_URL).href;
const escape = (s: string) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

export const GET: APIRoute = () => {
  // "" es la portada; el resto, las páginas interiores que se pueden indexar
  const paths = ["", ...PAGE_SLUGS.filter((slug) => !NOINDEX_SLUGS.includes(slug)).map((slug) => `${slug}/`)];

  const urls = paths.flatMap((path) =>
    LANGS.map((lang) => {
      const alternates = [
        ...LANGS.map(
          (l) => `    <xhtml:link rel="alternate" hreflang="${l}" href="${escape(abs(`/${l}/${path}`))}" />`,
        ),
        // x-default: en la portada es la raíz (que redirige según el idioma); en las demás, el inglés
        `    <xhtml:link rel="alternate" hreflang="x-default" href="${escape(abs(path ? `/en/${path}` : "/"))}" />`,
      ];
      return `  <url>\n    <loc>${escape(abs(`/${lang}/${path}`))}</loc>\n${alternates.join("\n")}\n  </url>`;
    }),
  );

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls.join("\n")}
</urlset>
`;
  return new Response(xml, { headers: { "Content-Type": "application/xml; charset=utf-8" } });
};
