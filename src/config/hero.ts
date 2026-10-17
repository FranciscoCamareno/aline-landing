/**
 * Configuración del hero. Todo lo ajustable a ojo vive aquí.
 */
export const heroConfig = {
  /** Encuadre del fondo pintado (object-position), por breakpoint. */
  bgPosition: { desktop: "50% 50%", mobile: "30% 40%" },
  /** Punta del lápiz en aline-mano.webp (2000×1227), en píxeles de la imagen original. */
  pencilTip: { x: 9, y: 707 },
  handSize: { width: 2000, height: 1227 },
  /**
   * Ancho de la mano en `em` de la palabra manuscrita, para que escale con el titular.
   * En móvil es menor para que no tape la palabra.
   */
  handWidthEm: { desktop: 3.4, mobile: 2.8 },
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
