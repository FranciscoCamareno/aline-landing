/**
 * Configuración del hero. Todo lo ajustable a ojo vive aquí.
 */
export const heroConfig = {
  /** Tamaño original de aline-hero-img.jpg. */
  bgSize: { width: 2752, height: 1536 },
  /**
   * Hoja pintada dentro del fondo (opción A), en % de la imagen: centro, ancho (sobre el ancho
   * de la imagen), alto (sobre el alto) y giro. Medida ajustando rectas a sus bordes.
   */
  sheet: { cx: 49.45, cy: 50.03, w: 30.5, h: 70.8, rotate: -6.5 },
  /** Ancho máximo que queremos para la hoja en pantalla; el fondo escala para conseguirlo. */
  sheetMaxPx: 600,
  /** Punta del lápiz en aline-mano.webp (2000×1227), en píxeles de la imagen original. */
  pencilTip: { x: 9, y: 707 },
  handSize: { width: 2000, height: 1227 },
  /**
   * Ancho de la mano en `em` de la palabra manuscrita, para que escale con el titular.
   * En móvil es menor para que no tape la palabra.
   */
  handWidthEm: { desktop: 4.4, mobile: 3.6 },
  /** Altura de la línea de escritura dentro de la palabra (0 = arriba, 1 = abajo). */
  baseline: 0.68,
  timings: {
    pause: 350,
    writeBase: 320,
    writePerLetter: 100,
    highlight: 380,
    hold: 1500,
    strike: 500,
    fade: 420,
    reducedMotionInterval: 2600,
  },
  /** Movimiento de la mano al escribir: fracción del ancho / alto de la palabra. */
  wobble: { x: 0.012, y: 0.08 },
} as const;
