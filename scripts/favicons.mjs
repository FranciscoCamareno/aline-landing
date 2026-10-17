// Genera public/favicon-32.png y public/apple-touch-icon.png a partir de logo/sticker-a.svg.
// Uso: node scripts/favicons.mjs
import { readFileSync, writeFileSync } from "node:fs";
import { Resvg } from "@resvg/resvg-js";

const sticker = readFileSync("src/assets/landing/logo/sticker-a.svg", "utf8");
const inner = sticker.replace(/^[\s\S]*?<svg[^>]*>/, "").replace(/<\/svg>\s*$/, "");

const render = (svg, size, out) => {
  const png = new Resvg(svg, { fitTo: { mode: "width", value: size } }).render().asPng();
  writeFileSync(out, png);
  console.log(out, png.length, "bytes");
};

render(sticker, 32, "public/favicon-32.png");

// apple-touch-icon: el sticker sobre fondo papel, con margen
const touch = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 180 180" width="180" height="180">
<rect width="180" height="180" fill="#FFFDF4"/>
<g transform="translate(22 22) scale(1.7)">${inner}</g>
</svg>`;
render(touch, 180, "public/apple-touch-icon.png");
