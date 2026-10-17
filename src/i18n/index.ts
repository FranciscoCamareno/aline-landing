import { en } from "./en";
import { es } from "./es";

export const LANGS = ["en", "es"] as const;
export type Lang = (typeof LANGS)[number];
export const DEFAULT_LANG: Lang = "en";

/** Forma compartida del copy: si falta una clave en un idioma, falla la compilación. */
export interface Dict {
  meta: { title: string; description: string };
  nav: { label: string; install: string };
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
  peek: {
    aria: string;
    tab1: string;
    tab2: string;
    groupNotes: string;
    groupDocs: string;
    groupCanvases: string;
    groupCalendar: string;
    note1: string;
    note2: string;
    note3: string;
    docs: string;
    calendar: string;
    open: string;
    noteBody: string;
    chapter: string;
    sticky1: string;
    sticky2: string;
    sticky3: string;
    day: string;
    due: string;
    swipe: string;
  };
  ways: {
    title: string;
    sub: string;
    notes: Feature;
    docs: Feature;
    diagrams: Feature;
    calendar: Feature;
  };
  pad: {
    title: string;
    sub: string;
    tag: string;
    /** Líneas manuscritas del bloc: `em` es la parte destacada de cada una. */
    line1: PadLine;
    line2: PadLine;
    line3: PadLine;
    line4: PadLine;
    pick: string;
    tapToDraw: string;
    done: string;
    aria: string;
    tools: string;
    pencil: string;
    highlighter: string;
    eraser: string;
    undo: string;
    clear: string;
  };
  facts: {
    title: string;
    markdown: Fact;
    local: Fact;
    excalidraw: Fact;
    languages: Fact;
  };
  pages: {
    soon: string;
    back: string;
    install: PageCopy;
    about: PageCopy;
    terms: PageCopy;
    privacy: PageCopy;
  };
  footer: {
    navAria: string;
    about: string;
    legal: string;
    terms: string;
    privacy: string;
    copyright: string;
    stickerAria: string;
  };
}

export interface PageCopy {
  title: string;
  body: string;
}

export interface Feature {
  title: string;
  body: string;
  note: string;
}

export interface Fact {
  title: string;
  body: string;
}

export interface PadLine {
  pre: string;
  em: string;
  post: string;
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
