/**
 * Imagen Open Graph (1200×630) por idioma, generada en el build con Satori + resvg:
 * fondo papel, el wordmark y el eslogan con la línea de dos tonos del hero.
 */
import { readFileSync } from "node:fs";
import { join } from "node:path";
import type { APIRoute, GetStaticPaths } from "astro";
import satori from "satori";
import { Resvg } from "@resvg/resvg-js";
import { LANGS, getT, isLang } from "../../i18n";

const root = process.cwd();
const read = (p: string) => readFileSync(join(root, p));

export const getStaticPaths: GetStaticPaths = () => LANGS.map((lang) => ({ params: { lang } }));

type Node = { type: string; props: Record<string, unknown> };
const h = (
  type: string,
  style: Record<string, unknown>,
  children?: unknown,
  extra: Record<string, unknown> = {},
): Node => ({
  type,
  props: { style, children, ...extra },
});

export const GET: APIRoute = async ({ params }) => {
  const lang = isLang(params.lang) ? params.lang : "en";
  const t = getT(lang);
  const word = t.hero.words[0] ?? "";
  const wordmark = `data:image/svg+xml;base64,${read("src/assets/landing/logo/aline-wordmark.svg").toString("base64")}`;
  const ink = "#262118";

  const tree = h(
    "div",
    {
      width: "100%",
      height: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      gap: 40,
      padding: "56px 80px",
      backgroundColor: "#FFFDF4",
      backgroundImage: "radial-gradient(circle, #E8DFC6 1.6px, transparent 1.8px)",
      backgroundSize: "28px 28px",
      color: ink,
    },
    [
      h("img", { width: 163, height: 70 }, undefined, { src: wordmark, width: 163, height: 70 }),
      h("div", { display: "flex", flexDirection: "column" }, [
        h("div", { fontFamily: "Nunito", fontSize: 104, lineHeight: 1.04, letterSpacing: -2.5 }, t.hero.line1),
        h("div", { display: "flex", alignItems: "flex-end", fontFamily: "Nunito", fontSize: 104, lineHeight: 1.04 }, [
          h("div", { display: "flex", position: "relative", padding: "0 6px" }, [
            h("div", {
              position: "absolute",
              left: 0,
              right: 0,
              bottom: 22,
              height: 44,
              backgroundColor: "#FFE380",
              borderRadius: 10,
              transform: "rotate(-1.5deg)",
            }),
            h("div", { position: "relative", fontFamily: "Excalifont", fontSize: 122, lineHeight: 1 }, word),
          ]),
          h("div", { letterSpacing: -2.5, whiteSpace: "pre" }, t.hero.suffix),
        ]),
      ]),
      h(
        "div",
        { display: "flex", fontFamily: "Nunito", fontSize: 28, lineHeight: 1.3, color: "#6B6250", maxWidth: 900 },
        t.meta.description,
      ),
    ],
  );

  const svg = await satori(tree as Parameters<typeof satori>[0], {
    width: 1200,
    height: 630,
    fonts: [
      { name: "Nunito", data: read("src/assets/og-fonts/nunito-900.ttf"), weight: 900, style: "normal" },
      { name: "Excalifont", data: read("src/assets/og-fonts/excalifont.ttf"), weight: 400, style: "normal" },
    ],
  });
  const png = new Resvg(svg, { fitTo: { mode: "width", value: 1200 } }).render().asPng();
  return new Response(new Uint8Array(png), { headers: { "Content-Type": "image/png" } });
};
