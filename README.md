# aline — landing

Landing de aline. Astro estático + islas en TypeScript vanilla, i18n EN/ES, desplegada en Cloudflare Pages.

## En local

```bash
pnpm install
pnpm dev          # http://localhost:4321/en/ y /es/
pnpm check        # astro check + tipos del middleware
pnpm lint
pnpm build        # salida en dist/
pnpm pages:dev    # build + wrangler pages dev (prueba el middleware de idioma en /)
```

Con `pnpm dev`, la raíz `/` usa el fallback en cliente (`src/pages/index.astro`). El middleware solo corre con Wrangler o en Cloudflare.

## Despliegue (Cloudflare Pages)

- Comando de build: `pnpm build`
- Directorio de salida: `dist`
- El middleware de idioma vive en `functions/_middleware.ts` y Pages lo detecta solo.

## Dónde se cambia cada cosa

| Qué | Dónde |
|---|---|
| URLs de "Open aline" e "Install" | `src/config/site.ts` (`APP_URL`, `INSTALL_URL`) |
| Tiempos de la animación del hero | `src/config/hero.ts` → `timings` |
| Punta del lápiz de la mano | `src/config/hero.ts` → `pencilTip` (px de `aline-mano.webp`, 2000×1227) |
| Tamaño de la mano (escritorio / móvil) | `src/config/hero.ts` → `handWidthEm` (en `em` de la palabra manuscrita) |
| Posición y giro de la hoja pintada (opción A) | `src/config/hero.ts` → `sheet`, `sheetMaxPx` |
| Copy en inglés / español | `src/i18n/en.ts`, `src/i18n/es.ts` (tipo compartido en `src/i18n/index.ts`) |
| Tokens de diseño | `src/styles/tokens.css` |

## Estructura

- `src/components/DrawnButton.astro`: botón dibujado (primario relleno, secundario se colorea al hover/foco).
- `src/components/Nav.astro`, `Sticker.astro`, `LangSwitch.astro`: navegación, sticker despegable, cambio de idioma (cookie `lang`).
- `src/components/Hero.astro` (rama `opcion-a`): el contenido va encima de la hoja pintada del fondo, girado con ella y con tamaños en `cqi` relativos a la hoja. El fondo escala para que la hoja mida hasta `sheetMaxPx`. La opción B (hoja en HTML con washi tape) está en `main` y en el tag `opcion-b`. Incluye la isla de escritura (mano, resaltado y tachado). Con `prefers-reduced-motion` no hay mano y la palabra cambia cada 2.6 s.
- `src/layouts/Base.astro`: `<html lang>`, hreflang, preload de fuentes y el `<svg class="pencil-thread">` vacío para la Fase 2.
- `public/fonts/`: Nunito (variable 600–900), Cherry Bomb One y Excalifont (subset latín de `@excalidraw/excalidraw@0.18.0`, OFL), autoalojadas.
- `src/assets/landing/`: SVG de la marca (ver su `README.md`). `src/assets/hero/`: arte pintado del hero.
