import { en } from "./en";
import { es } from "./es";

export const LANGS = ["en", "es"] as const;
export type Lang = (typeof LANGS)[number];
export const DEFAULT_LANG: Lang = "en";

/** Forma compartida del copy: si falta una clave en un idioma, falla la compilación. */
export interface Dict {
  meta: { title: string; description: string };
  nav: { label: string; features: string; pencil: string; why: string; install: string };
  cta: { open: string; installApp: string };
  sticker: { hint: string; aria: string };
  lang: { aria: string };
  hero: {
    title: string;
    line1: string;
    suffix: string;
    /** Palabras que rotan en la animación de escritura. */
    words: readonly string[];
    sub: string;
    runsIn: string;
  };
}

const dicts: Record<Lang, Dict> = { en, es };

export function getT(lang: Lang): Dict {
  return dicts[lang];
}

export function isLang(value: unknown): value is Lang {
  return typeof value === "string" && (LANGS as readonly string[]).includes(value);
}

export function otherLang(lang: Lang): Lang {
  return lang === "en" ? "es" : "en";
}
