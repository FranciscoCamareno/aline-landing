/**
 * Hilo de lápiz. Las anclas se marcan en el DOM con data-thread-anchor:
 *   start (hero) · peek · ways + ways-end · pad + pad-end · facts + facts-end · end (CTA final)
 * Los tramos que cruzan de lado empiezan en el titular de la sección, así nunca pisan texto.
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
   * Desplazamientos verticales de cada ancla, en px. El brief proponía +40 / −30, pero con
   * tangentes verticales la curva empieza a cruzar antes de salir del contenido y pisa la
   * ventana y las tarjetas; con ±8 los cruces quedan siempre en los huecos.
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
  scrub: 0.6,
  /** Lapicito: punta en (88, 10) de pencil-thread.svg (92×20) y giro extra. */
  pencil: { width: 92, height: 20, tipX: 88, tipY: 10, rotateOffset: -28 },
  debounceMs: 80,
} as const;
