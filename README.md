# aline — landing

Landing de aline. Astro estático + islas en TypeScript vanilla, i18n EN/ES, desplegada en Cloudflare Pages.

## En local

```bash
pnpm install
pnpm dev          # http://localhost:4321/en/ y /es/
pnpm check        # astro check + tipos del middleware
pnpm lint
pnpm build        # salida en dist/ (incluye las imágenes Open Graph y el sitemap)
pnpm pages:dev    # build + wrangler pages dev (prueba el middleware de idioma en /)
node scripts/favicons.mjs   # regenera favicon-32.png y apple-touch-icon.png
```

Con `pnpm dev`, la raíz `/` usa el fallback en cliente (`src/pages/index.astro`). El middleware solo corre con Wrangler o en Cloudflare.

pnpm aplica una edad mínima de publicación a las dependencias: si un `pnpm add` falla con `ERR_PNPM_MINIMUM_RELEASE_AGE_VIOLATION`, fija una versión publicada hace más de un día.

## Despliegue (Cloudflare Pages)

- Comando de build: `pnpm build`
- Directorio de salida: `dist`
- El middleware de idioma vive en `functions/_middleware.ts` y Pages lo detecta solo.

## Dónde se cambia cada cosa

| Qué | Dónde |
|---|---|
| URLs de "Open aline" e "Install" | `src/config/site.ts` (`APP_URL`, `INSTALL_URL`) |
| URLs del footer (Novedades, Privacidad) | `src/config/site.ts` (`CHANGELOG_URL`, `PRIVACY_URL`) |
| Tiempos de la animación del hero | `src/config/hero.ts` → `timings` |
| Punta y tamaño del lápiz del hero | `src/config/hero.ts` → `pencilTip` (px de `aline-lapiz.webp`, 1674×1342) y `pencilWidthEm` |
| Posición y giro de la hoja pintada | `src/config/hero.ts` → `sheet`, `sheetMaxPx` |
| Anclas y forma del hilo de lápiz | `data-thread-anchor` en el DOM + `src/config/thread.ts` (desplazamientos, ondulación, trazo, punto de dibujo, lapicito) |
| Parámetros del lápiz, resaltador y borrador del bloc | `src/config/pad.ts` |
| Copy en inglés / español | `src/i18n/en.ts`, `src/i18n/es.ts` (tipo compartido en `src/i18n/index.ts`) |
| Tokens de diseño | `src/styles/tokens.css` |

### Anclas del hilo

| Ancla | Elemento |
|---|---|
| `start` | Sección del hero (sale del centro de su borde inferior) |
| `peek` | Contenedor de la vista previa (lado izquierdo) |
| `ways` / `ways-end` | Titular de Funciones / cuadrícula (lado derecho) |
| `pad` / `pad-end` | Titular del bloc / bloc (lado izquierdo) |
| `facts` / `facts-end` | Titular de Hechos / cuadrícula (lado derecho) |
| `end` | Titular del CTA final (centro) |

Los tramos que cruzan de un lado a otro empiezan y terminan en el borde del contenido ±8px (`offsets` en `thread.ts`), así los cruces caen siempre en los huecos entre secciones.

## Estructura

- `src/components/Hero.astro`: el contenido va encima de la hoja pintada del fondo, girado con ella y con tamaños en `cqi` relativos a la hoja. Un lápiz escribe la palabra, la resalta y la tacha. Con `prefers-reduced-motion` no hay lápiz y la palabra cambia cada 2.6 s. La versión con la hoja en HTML quedó en el tag `opcion-b`.
- `src/components/ProductPeek.astro`: vista previa de la app en HTML (`role="img"`). Por debajo de 960px hace scroll horizontal.
- `src/components/Features.astro`, `Facts.astro`, `FinalCta.astro`, `Footer.astro`: el resto de secciones.
- `src/components/DrawingPad.astro`: bloc de dibujo con dos canvas (resaltador con `multiply` debajo, lápiz encima) y trazos guardados como datos. `perfect-freehand` se carga al acercarse. Con puntero grueso arranca bloqueado ("Toca para dibujar").
- `src/components/PencilThread.astro`: el hilo de lápiz. La ruta se calcula en JS a partir de las anclas; GSAP (ScrollTrigger + DrawSVG) se carga al acercarse. No se muestra por debajo de 960px.
- `src/components/DrawnButton.astro`, `Nav.astro`, `Sticker.astro`, `LangSwitch.astro`: componentes de la Fase 1.
- `src/pages/og/[lang].png.ts`: imagen Open Graph de 1200×630 por idioma, generada en el build con Satori + resvg (fuentes TTF en `src/assets/og-fonts/`).
- `public/`: fuentes autoalojadas, favicons y `robots.txt`. El sitemap lo genera `@astrojs/sitemap`.
