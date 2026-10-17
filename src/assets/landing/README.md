# aline — assets de la landing

SVG listos para la landing (todo lo que no es el arte pintado del hero). Cópialos en `src/assets/landing/` del proyecto.

- **Texto convertido a trazos:** los logotipos no dependen de que Cherry Bomb One o Excalifont estén cargadas.
- **Colores de marca fijos** en logos, lápices, herramientas y doodles.
- **Iconos de línea en `currentColor`:** toman el color del texto que los rodea.
- `preview.png` muestra todo junto.

## Inventario

### `logo/`
| Archivo | Tamaño | Uso |
|---|---|---|
| `aline-sticker.svg` | 140×60 | El sticker del nav en reposo. Aplica `rotate(-4deg)` y la sombra por CSS (`--shadow-sticker`), no van en el SVG |
| `aline-sticker-peeling.svg` | 140×60 | El mismo sticker con la esquina inferior derecha doblada, para el estado de arrastre (o superpón `doodles/peel-corner.svg` sobre el normal) |
| `aline-pencil.svg` | 120×44 | "aline" a lápiz (grafito) con subrayado: lo que queda debajo del sticker al despegarlo |
| `aline-wordmark.svg` | 140×60 | Logotipo con resaltador, para el footer y metadatos sociales |
| `sticker-a.svg` | 80×80 | Sticker de la "a" (decoración sobre el escritorio, futuro personaje) |

### `pencil/`
| Archivo | Tamaño | Uso |
|---|---|---|
| `pencil-thread.svg` | 92×20 | El lapicito en la punta del hilo de lápiz (Fase 2). **Punta en (88, 10)**, también en `data-tip-x` / `data-tip-y` del SVG. Rótalo según la tangente del trazo con `transform-origin` en la punta |
| `pencil-large.svg` | 48×200 | Lápiz vertical grande, punta arriba en (24, 4). Para ilustraciones o el estado vacío del bloc |

### `tools/` (objetos de la bandeja del bloc de dibujo)
`pencil.svg`, `highlighter.svg`, `eraser.svg`, `sticky-pad.svg`, de 48×80 cada uno.

La parte inferior queda tapada por la bandeja. Los estados se hacen con `translateY` y transición de 120ms `ease-out`:
- **Reposo:** `translateY(24px)`
- **Hover:** `translateY(18px)`
- **Activo:** `translateY(6px)`

### `icons/` (24×24, trazo de 2px, `currentColor`)
| Grupo | Iconos |
|---|---|
| Funciones | `notes`, `docs`, `diagrams`, `calendar`, `link` |
| Hechos | `markdown-file`, `cloud-sync`, `swap` (Excalidraw), `globe` (idiomas) |
| Bloc de dibujo | `draw`, `highlighter`, `eraser`, `undo`, `trash` |
| Navegación | `menu`, `close`, `chevron-down`, `arrow-right`, `external`, `install` |

Tamaños: 16px en listas, 20px en botones, 24px en encabezados. En las tarjetas de funciones van a 26px dentro de una casilla de 52px con fondo de sticker (mantequilla, agua, rosa y brote, en ese orden).

### `doodles/`
| Archivo | Uso |
|---|---|
| `button-frame.svg` | Contorno doble del `DrawnButton`. Referencia visual: el componente lo dibuja **inline** (ver abajo) |
| `button-filled-primary.svg` | Cómo se ve el primario relleno. Solo referencia |
| `highlight-bar.svg` | Franja de resaltador detrás de palabras. Se estira (`preserveAspectRatio="none"`) |
| `strike-scribble.svg` | Tachado en zigzag del ciclo del hero |
| `underline-pencil.svg` | Subrayado a lápiz |
| `circle-doodle.svg` | Círculo a mano para encerrar una palabra (en agua profunda) |
| `arrow-curve-up-left.svg` | Flecha de la anotación "psst, peel me off" |
| `arrow-curve-down-left.svg` | Flecha de la anotación "pick a tool" del bloc |
| `washi-tape-yellow/blue/pink.svg` | Cinta para las esquinas de hojas y del bloc. Gírala entre ±5° y ±38° |
| `peel-corner.svg` | Esquina doblada suelta |
| `connector-line.svg` | Línea de conexión entre notas en la vista previa del producto |

### `patterns/`
`dot-grid-paper.svg` (puntos cartón, fondo del lienzo) y `dot-grid-subtle.svg` (más tenue, para la hoja del hero), de 24×24 cada uno.

Úsalos como `background-image` con `background-size: 24px 24px`. También puedes reproducirlos con `radial-gradient(#E8DFC6 1.2px, transparent 1.4px)` y ahorrarte la petición.

## Cómo usarlos en Astro

- **Iconos e inline:** impórtalos como texto (`import notes from "../assets/landing/icons/notes.svg?raw"`) y pásalos con `set:html`, o usa `astro-icon` apuntando a la carpeta. Así heredan `currentColor` y no generan peticiones.
- **Logos y objetos:** `<img src={sticker.src} alt="aline">` con `import sticker from "...svg"` sirve. Si el sticker es un `<button>`, pon el `<img>` con `alt=""` y el nombre en el `aria-label` del botón.
- **Botón dibujado:** su zigzag usa un `clipPath`, que necesita un **id único por instancia**. Por eso el componente dibuja el SVG inline con un id generado, en lugar de usar el archivo.
- **Escalado:** los doodles que se estiran llevan `preserveAspectRatio="none"` y `vector-effect="non-scaling-stroke"`, así el trazo no engorda al estirarse.

## Paleta usada

| Nombre | Hex | Rol |
|---|---|---|
| Tinta | `#262118` | Contornos |
| Papel | `#FFFDF4` | Fondo |
| Cartón | `#E8DFC6` | Bordes suaves |
| Grafito | `#6B6250` | Texto secundario y lápiz |
| Ocre | `#8A5A00` | Anotaciones |
| Mantequilla | `#FFE380` | Marca |
| Yema | `#F5C842` | Hover |
| Agua | `#BFDFE2` | Secundario |
| Agua profunda | `#3F7F88` | Foco y enlaces |
| Rosa | `#F7AFCB` | Sticker |
| Brote | `#A8D5A2` | Sticker |
| Madera | `#F1D3A6` | Madera del lápiz |

Si ya tienes la carpeta `brand/` del sistema de diseño de la app, sus iconos de herramientas e interfaz son la versión canónica. Estos están hechos a medida de la landing y siguen las mismas reglas, pero si alguno se duplica, gana el de `brand/`.

## Añadidos (nav flotante y notas adhesivas)

### `logo/sticker-backing.svg` (164×80)
La hoja de respaldo del sticker: papel con el troquel punteado donde va pegado. Debajo del sticker, dentro del troquel, va `logo/aline-pencil.svg`. Al despegar el sticker queda a la vista "aline" a lápiz sobre papel, que es lo que resuelve el contraste sobre el arte pintado. En la página se gira −2° y lleva sombra por CSS.

### `nav/`
| Archivo | Uso |
|---|---|
| `notebook-edge.svg` (40×118) | Borde izquierdo de la hoja de libreta: perforaciones y restos de papel arrancado. Va a la izquierda de un `div` del mismo color (`#FBF7EA`) que crece con el contenido, así la hoja se adapta al ancho sin deformar los agujeros |
| `notebook-page.svg` (380×118) | La hoja completa, como referencia visual |

Renglones: líneas de 1px en `#C9D3D3` a 48px y 108px del borde superior. Esquina superior derecha redondeada a 16px.

### `notes/`
| Archivo | Uso |
|---|---|
| `sticky-mantequilla/agua/rosa/brote.svg` (260×280) | Las notas como referencia visual y para usos sueltos. En la página se construyen en CSS (ver el brief), porque tienen que crecer con el texto |
| `note-fold.svg` (34×34) | La esquina doblada. Rellénala con el color de banda de cada nota |
| `note-link.svg` (64×30) | El enlace a mano que une una nota con la siguiente |

| Nota | Cuerpo | Banda y doblez |
|---|---|---|
| Mantequilla | `#FFE380` | `#F7D766` |
| Agua | `#BFDFE2` | `#A8D1D5` |
| Rosa | `#F7AFCB` | `#F09DBE` |
| Brote | `#A8D5A2` | `#95C98E` |

Construcción: contorno de tinta de 1.5px, banda adhesiva de 34px arriba, esquina inferior derecha doblada de 34px. Es la misma construcción que las notas adhesivas de la app (`brand/notes`): si allí la esquina o la banda difieren, iguálalas a las de la app.

## Añadidos (footer)

### `logo/sticker-a-flat.png` y `logo/sticker-a-peeling.png` (512×512)
El sticker de la "a" del footer, a partir de `sticker-a-512.png`:
- `flat`: el sticker sin la sombra pintada, para que la sombra la ponga el CSS y pueda cambiar al levantarlo.
- `peeling`: el mismo con la esquina inferior derecha despegada (reverso en papel `#EFE8D6` con contorno de tinta). Se muestra mientras se arrastra, igual que el sticker del nav.

Se usan a 150px. Sombra en reposo: `drop-shadow(0 4px 0 rgba(15,12,8,.45))`; al arrastrar: `drop-shadow(0 18px 16px rgba(20,16,10,.35))`. Usa `filter: drop-shadow` y no `box-shadow`, porque la silueta es troquelada.

### `icons/social/` (24×24, `currentColor`, relleno)
`instagram.svg`, `linkedin.svg`, `github.svg`. Instagram y GitHub vienen de Simple Icons (CC0). El de LinkedIn está dibujado a mano, porque Simple Icons lo retiró a pedido de la marca: si quieres el oficial, descárgalo del kit de marca de LinkedIn.
