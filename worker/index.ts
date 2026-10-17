/**
 * Worker de la landing (Cloudflare Workers con assets estáticos, ver wrangler.jsonc).
 * Solo se ejecuta para la raíz "/" (`run_worker_first`); todo lo demás lo sirve Cloudflare
 * directamente desde dist/, sin pasar por aquí.
 *
 * Redirección por idioma en "/":
 * 1. Cookie `lang` → ese idioma.
 * 2. Si no, el primer idioma soportado de Accept-Language: es → /es/, cualquier otro → /en/.
 * Los rastreadores no se redirigen: se les sirve /en/ directamente.
 */

interface Env {
  ASSETS: Fetcher;
}

type Lang = "en" | "es";
const SUPPORTED: readonly Lang[] = ["en", "es"];

const BOT_UA =
  /bot|crawl|spider|slurp|bingpreview|facebookexternalhit|embedly|quora link preview|showyoucase|outbrain|pinterest|vkshare|w3c_validator|whatsapp|telegrambot|discordbot|slackbot|linkedinbot|twitterbot|applebot|yandex|baiduspider|duckduckbot|lighthouse|headlesschrome|google-inspectiontool/i;

function cookieLang(header: string | null): Lang | null {
  const match = header?.match(/(?:^|;\s*)lang=([^;]+)/);
  const value = match?.[1]?.trim().toLowerCase();
  return SUPPORTED.find((l) => l === value) ?? null;
}

function acceptLanguage(header: string | null): Lang {
  if (!header) return "en";
  const ranked = header
    .split(",")
    .map((part, index) => {
      const [tag = "", ...params] = part.trim().split(";");
      const q = params.map((p) => p.trim()).find((p) => p.startsWith("q="));
      return { base: tag.toLowerCase().split("-")[0] ?? "", q: q ? Number(q.slice(2)) || 0 : 1, index };
    })
    .filter((entry) => entry.q > 0)
    .sort((a, b) => b.q - a.q || a.index - b.index);
  const first = ranked.find((entry) => SUPPORTED.some((l) => l === entry.base));
  return first?.base === "es" ? "es" : "en";
}

export default {
  async fetch(request, env): Promise<Response> {
    const url = new URL(request.url);
    // Cualquier otra ruta: archivos estáticos (también las de _headers)
    if (url.pathname !== "/") return env.ASSETS.fetch(request);

    const ua = request.headers.get("user-agent") ?? "";
    if (BOT_UA.test(ua)) {
      return env.ASSETS.fetch(new Request(new URL("/en/", url), request));
    }

    const lang = cookieLang(request.headers.get("cookie")) ?? acceptLanguage(request.headers.get("accept-language"));

    return new Response(null, {
      status: 302,
      headers: {
        Location: `/${lang}/${url.search}`,
        Vary: "Accept-Language, Cookie, User-Agent",
        "Cache-Control": "private, no-store",
      },
    });
  },
} satisfies ExportedHandler<Env>;
