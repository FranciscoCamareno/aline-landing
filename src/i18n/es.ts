import type { Dict } from "./index";
import { pagesEs } from "./pages-es";

// Eslogan provisional: se cambia en meta.title, hero.title, hero.line1 y hero.words.
export const es: Dict = {
  meta: {
    title: "aline — Piénsalo bien. Dibújalo.",
    description: "Notas, documentos, diagramas y tu calendario en un mismo lienzo, todo enlazado.",
  },
  nav: {
    label: "Principal",
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
  peek: {
    aria: "Un vistazo a aline: una nota, un documento, un mapa y un evento del calendario que apuntan al mismo capítulo.",
    tab1: "Mapa de tesis",
    tab2: "Notas de lectura.md",
    groupNotes: "Notas",
    groupDocs: "Documentos",
    groupCanvases: "Lienzos",
    groupCalendar: "Calendario",
    note1: "Notas de lectura",
    note2: "Guía de entrevista",
    note3: "Diario de campo",
    docs: "Borrador cap. 2",
    calendar: "Esta semana",
    open: "abierto",
    noteBody: "Las entrevistas semiestructuradas dejan seguir un hilo sin perder el marco.",
    chapter: "Capítulo 2 · Método",
    sticky1: "12 entrevistas para junio",
    sticky2: "¿piloto en mayo?",
    sticky3: "formulario ético: enviado",
    day: "VIE",
    due: "Entrega del borrador",
    swipe: "desliza →",
  },
  ways: {
    title: "Un hilo que lo une todo.",
    sub: "Notas, documentos, mapas y fechas pueden apuntar unos a otros. Sigue la línea hasta donde empezó una idea.",
    notes: {
      title: "Notas.",
      body: "Ideas rápidas en Markdown. Escribe [[ para enlazar lo que sea.",
      note: "los enlaces van y vienen",
    },
    docs: {
      title: "Documentos.",
      body: "Textos largos con estructura, enlazados a las notas y mapas que los sostienen.",
      note: "enlázalos desde donde sea",
    },
    diagrams: {
      title: "Diagramas.",
      body: "Mapas mentales y conceptuales en un lienzo infinito.",
      note: "abre archivos .excalidraw",
    },
    calendar: {
      title: "Calendario.",
      body: "Fechas que recuerdan por qué existen.",
      note: "cada evento enlaza a su origen",
    },
  },
  pad: {
    title: "Esta página también es un lienzo.",
    sub: "Adelante, ráyala. Encierra lo que te guste y tacha lo que no.",
    tag: "los garabatos se borran al recargar",
    line1: { pre: "esta hoja es ", em: "tuya.", post: "" },
    line2: { pre: "garabatea, mapea una idea,", em: "", post: "" },
    line3: { pre: "o ", em: "encierra", post: " lo que te guste." },
    line4: { pre: "aquí también viven los ", em: "[[enlaces]].", post: "" },
    pick: "elige una herramienta",
    tapToDraw: "Toca para dibujar",
    done: "Listo",
    aria: "Bloc de dibujo. Dibuja con el mouse, un lápiz óptico o el dedo.",
    tools: "Herramientas de dibujo",
    pencil: "Lápiz",
    highlighter: "Resaltador",
    eraser: "Borrador",
    undo: "Deshacer",
    clear: "Limpiar",
  },
  facts: {
    title: "Tuyo de principio a fin.",
    markdown: { title: "Markdown simple.", body: "Tus notas son archivos .md. Ábrelos donde quieras, siempre." },
    local: { title: "Primero local.", body: "Funciona sin conexión y se sincroniza con tu propio Google Drive." },
    excalidraw: {
      title: "Compatible con Excalidraw.",
      body: "Trae tus archivos .excalidraw y llévatelos cuando quieras.",
    },
    openSource: {
      title: "Open source.",
      body: "El código de aline es libre (AGPLv3): puedes leerlo, estudiarlo y mejorarlo.",
    },
  },
  pages: pagesEs,
  footer: {
    navAria: "Pie de página",
    about: "Acerca de",
    legal: "Legal",
    terms: "Términos",
    privacy: "Privacidad",
    copyright: "© 2026 aline",
    stickerAria:
      "Sticker de aline. Arrástralo a cualquier parte de la página o muévelo con las flechas. Doble clic o Escape para volver a pegarlo.",
  },
};
