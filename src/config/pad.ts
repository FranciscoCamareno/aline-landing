/** Parámetros de las herramientas del bloc de dibujo. */
export const padConfig = {
  /** Lápiz: opciones de perfect-freehand. */
  pencil: {
    color: "#262118",
    size: 3.5,
    thinning: 0.6,
    smoothing: 0.5,
    streamline: 0.5,
  },
  /** Resaltador: mantequilla opaca, sin variación de grosor. */
  highlighter: {
    color: "#FFE380",
    size: 22,
  },
  /** Borrador: distancia en px a la que un trazo cuenta como tocado. */
  eraser: {
    tolerance: 12,
  },
} as const;
