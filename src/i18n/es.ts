import type { Dict } from "./index";

// Eslogan provisional: se cambia en meta.title, hero.title, hero.line1 y hero.words.
export const es: Dict = {
  meta: {
    title: "aline — Piénsalo bien. Dibújalo.",
    description: "Notas, documentos, diagramas y tu calendario en un mismo lienzo, todo enlazado.",
  },
  nav: {
    label: "Principal",
    features: "Funciones",
    pencil: "Prueba el lápiz",
    why: "Por qué aline",
    install: "Instalar",
  },
  cta: {
    open: "Abrir aline",
    installApp: "Instalar la app",
  },
  sticker: {
    hint: "psst, despégame",
    aria: "Sticker de aline. Arrástralo a donde quieras o muévelo con las flechas. Doble clic o Escape para volver a pegarlo.",
  },
  lang: {
    aria: "Cambiar idioma",
  },
  hero: {
    title: "Piénsalo bien. Dibújalo.",
    line1: "Piénsalo bien.",
    // La palabra ya incluye el pronombre, así que el sufijo es solo el punto.
    suffix: ".",
    words: ["Dibújalo", "Escríbelo", "Mapéalo", "Planéalo", "Bocétalo", "Ordénalo", "Resuélvelo"],
    sub: "Notas, documentos, diagramas y tu calendario en un mismo lienzo. Todo se enlaza con todo, así cada idea sabe de dónde viene y para cuándo es.",
    runsIn: "funciona en tu navegador, se instala en escritorio y iPad",
  },
};
