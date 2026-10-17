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
  /** Punta del lápiz en aline-lapiz.webp (1674×1342), en píxeles de la imagen original. */
  pencilTip: { x: 26, y: 1313 },
  pencilSize: { width: 1674, height: 1342 },
  /** Ancho del lápiz en `em` de la palabra manuscrita, para que escale con el titular. */
  pencilWidthEm: { desktop: 2.6, mobile: 2.3 },
  /** Altura de la línea de escritura dentro de la palabra (0 = arriba, 1 = abajo). */
  baseline: 0.68,
  timings: {
    // ~1.4× más lento que el brief original
    pause: 650,
    writeBase: 450,
    writePerLetter: 140,
    highlight: 530,
    hold: 2100,
    /** El lápiz vuelve desde su sitio apartado al inicio del tachado. */
    approach: 750,
    strike: 850,
    fade: 600,
    reducedMotionInterval: 2600,
  },
  /**
   * Dónde se aparta el lápiz mientras se sostiene la palabra: a la derecha del sufijo,
   * en fracciones del alto de la palabra (x hacia la derecha, y hacia abajo desde la línea).
   */
  away: { x: 0.3, y: 0.1 },
  /**
   * Reposo del lápiz entre palabra y palabra, en fracciones del alto de la palabra: x desde el
   * borde izquierdo del hueco (negativo = fuera, a la izquierda) e y desde la línea de escritura
   * (negativo = encima). Es el mismo para todas las palabras, así el lápiz nunca salta.
   */
  rest: { x: -0.2, y: -0.3 },
  /** Movimiento del lápiz al escribir: fracción del ancho / alto de la palabra. */
  wobble: { x: 0.012, y: 0.08 },
} as const;
