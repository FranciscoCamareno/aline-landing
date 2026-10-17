/**
 * Hilo de lápiz. Las anclas se marcan en el DOM con data-thread-anchor:
 *   start (hero) · peek · ways + ways-end · pad + pad-end · facts + facts-end · end (CTA final)
 * Los titulares ways, pad y facts quedan encerrados en un bucle a mano, como en una lluvia de ideas.
 * Los cruces de un lado a otro van siempre por los huecos entre secciones.
 */
export const threadConfig = {
  /** Ancho mínimo de viewport para mostrar el hilo. */
  minWidth: 960,
  /** Ancho máximo del contenedor (igual que .container). */
  containerMax: 1240,
  /** X del margen: máx(minEdge, margen del contenedor − inset). */
  minEdge: 12,
  inset: 30,
  /**
   * Desplazamientos verticales de cada ancla, en px. Con ±8 los cruces quedan en los huecos
   * (con +40 / −30 la curva empezaba a cruzar antes de salir del contenido).
   */
  offsets: {
    start: 2,
    sideTop: -8,
    sideBottom: 8,
    waysBottom: 8,
    factsBottom: 8,
    end: -34,
  },
  /** Ondulación de los tramos verticales (± en los puntos de control). */
  wiggle: 9,
  stroke: { color: "#3A342A", width: 2.4 },
  /** El punto de dibujo va a esta fracción del alto del viewport. */
  drawAt: 0.7,

  /** Bucle a mano alrededor de los titulares de sección. */
  loop: {
    /** Margen horizontal entre el texto y el bucle, en px. */
    padX: 34,
    /** Además del margen, el bucle se ensancha esta fracción del ancho del texto (más redondo). */
    widen: 0.22,
    /** Margen vertical mínimo entre el texto y el bucle, en px. */
    minPadY: 18,
    /** …y máximo: si no basta, ese lado del bucle se hace más recto (sube el exponente hasta maxExponent). */
    maxPadY: 30,
    maxExponent: 6,
    /** Exponente de la superelipse: 2 es una elipse; algo más alto la hace abrazar mejor el texto sin perder lo redondo. */
    exponent: 2.6,
    /** Cuánto se pasa del punto de partida al cerrar, en radianes (el cierre a mano nunca es exacto). */
    overlap: 0.45,
    /** Irregularidad del radio (fracción) y crecimiento a lo largo de la vuelta, para que no sea un óvalo perfecto. */
    wobble: 0.02,
    drift: 0.035,
    /** Giro del bucle, en grados. */
    tilt: -1,
    /** Separación del bucle con los márgenes por los que baja el hilo (se usa el doble). */
    edge: 8,
    /** Largo de la tangente con la que el hilo entra al bucle: corto para que no haga pico. */
    entry: 36,
    /** Hueco mínimo entre el texto y el bucle cuando el titular está pegado al borde. */
    minGap: 14,
    /**
     * Scroll que ocupa dibujar el bucle entero, en px: el círculo avanza en proporción al scroll
     * dentro de ese tramo. Después, la salida y la bajada siguiente recuperan el desfase.
     */
    scrollSpan: 340,
  },

  /** Suavizado del trazo respecto al scroll, en segundos (tirones fuera, sin animar por su cuenta). */
  smoothing: 0.12,

  /**
   * Lapicito: punta en (88, 10) de pencil-thread.svg (92×20). No sigue la tangente al 100 %
   * (en los bucles daría vueltas sobre sí mismo): mantiene un giro base y se inclina según
   * hacia dónde avanza.
   */
  pencil: { width: 92, height: 20, tipX: 88, tipY: 10, baseAngle: 62, lean: 22, smoothing: 0.15 },
  debounceMs: 80,
} as const;
