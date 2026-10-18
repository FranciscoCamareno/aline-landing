// Genera los iconos del sitio (pestaña, buscadores, iPhone/iPad, Android) a partir de
// src/assets/landing/logo/sticker-a-512.png.
// Uso: node scripts/favicons.mjs
import { writeFileSync } from "node:fs";
import sharp from "sharp";

const SOURCE = "src/assets/landing/logo/sticker-a-512.png";
const CLEAR = { r: 0, g: 0, b: 0, alpha: 0 };

// El PNG trae mucho margen transparente: se recorta al sticker para que llene el icono
const trimmed = await sharp(SOURCE).trim({ threshold: 1 }).png().toBuffer();

/** Sticker centrado en un cuadrado de `size` px, con `margin` (fracción) alrededor. */
async function icon(size, { margin = 0.04, background = CLEAR } = {}) {
  const inner = Math.round(size * (1 - 2 * margin));
  const body = await sharp(trimmed).resize(inner, inner, { fit: "inside", kernel: "lanczos3" }).png().toBuffer();
  const meta = await sharp(body).metadata();
  const left = Math.floor((size - (meta.width ?? inner)) / 2);
  const top = Math.floor((size - (meta.height ?? inner)) / 2);
  return sharp({ create: { width: size, height: size, channels: 4, background } })
    .composite([{ input: body, left, top }])
    .png({ compressionLevel: 9 })
    .toBuffer();
}

/** .ico con varias imágenes PNG dentro (lo leen todos los navegadores actuales). */
function ico(images) {
  const head = Buffer.alloc(6);
  head.writeUInt16LE(1, 2); // tipo: icono
  head.writeUInt16LE(images.length, 4);
  let offset = 6 + 16 * images.length;
  const dir = images.map(({ size, data }) => {
    const e = Buffer.alloc(16);
    e.writeUInt8(size >= 256 ? 0 : size, 0);
    e.writeUInt8(size >= 256 ? 0 : size, 1);
    e.writeUInt16LE(1, 4); // planos
    e.writeUInt16LE(32, 6); // bits por pixel
    e.writeUInt32LE(data.length, 8);
    e.writeUInt32LE(offset, 12);
    offset += data.length;
    return e;
  });
  return Buffer.concat([head, ...dir, ...images.map((i) => i.data)]);
}

const out = (name, data) => {
  writeFileSync(`public/${name}`, data);
  console.log(name.padEnd(24), data.length, "bytes");
};

// Google pide un favicon cuadrado y múltiplo de 48 px
out("favicon-48x48.png", await icon(48));
out("favicon-192x192.png", await icon(192));
out(
  "favicon.ico",
  ico(await Promise.all([16, 32, 48].map(async (size) => ({ size, data: await icon(size, { margin: 0.02 }) })))),
);
// iPhone/iPad: sin transparencia, sobre papel
out("apple-touch-icon.png", await icon(180, { margin: 0.12, background: { r: 255, g: 253, b: 244, alpha: 1 } }));
