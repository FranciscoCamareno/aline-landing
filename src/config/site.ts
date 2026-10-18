/** Destino de "Open aline": la aplicación. */
export const APP_URL = "https://app.aline.website/";

/**
 * Destinos de los enlaces internos. Un valor que empieza por "/" es una página de este sitio y se
 * le antepone el idioma ("/install/" → "/en/install/"); cualquier otra cosa (https://…, #) se usa
 * tal cual. Para apuntar a otro sitio, cambia el valor por la URL completa.
 */
export const INSTALL_URL = "/install/";

/** Páginas internas que no se indexan todavía (meta noindex y fuera del sitemap). Quita un slug cuando esté lista. */
export const NOINDEX_SLUGS: readonly PageSlug[] = ["install", "about", "terms", "privacy"];

/** Páginas internas que existen (/{idioma}/{slug}/). Mientras no tengan diseño propio se muestran en blanco. */
export const PAGE_SLUGS = ["install", "about", "terms", "privacy"] as const;
export type PageSlug = (typeof PAGE_SLUGS)[number];

/** Antepone el idioma a las rutas internas; deja intactas las URLs externas y los "#". */
export function localizeUrl(url: string, lang: string): string {
  return url.startsWith("/") ? `/${lang}${url}` : url;
}

/**
 * Cuándo vuelve la hoja de libreta del nav tras irse con el scroll:
 * "top" solo al volver arriba del todo; "scrollUp" también al subir en cualquier punto.
 */
export const NAV_PAPER_RETURN: "top" | "scrollUp" = "top";

/** Enlaces del footer. */
export const ABOUT_URL = "/about/";
export const TERMS_URL = "/terms/";
export const PRIVACY_URL = "/privacy/";

/** Redes del footer. */
// Instagram aún no existe: el icono (src/assets/landing/icons/social/instagram.svg) y esta URL se
// quedan listos y no se muestran en el footer. Cuando exista la cuenta, pon aquí su URL y añade
// "instagram" a la lista `socials` de src/components/Footer.astro.
export const INSTAGRAM_URL = "#";
export const LINKEDIN_URL = "https://www.linkedin.com/in/franciscocamareno/";
export const GITHUB_URL = "https://github.com/FranciscoCamareno/aline";

/** Fecha de la última revisión de los textos legales (Términos y Privacidad), en ISO. */
export const LEGAL_UPDATED = "2026-10-17";

/** Dominio público, para canonical y hreflang. */
export const SITE_URL = "https://aline.website";
