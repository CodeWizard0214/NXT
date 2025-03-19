export default function wsrvImageLoader({ src, width, quality }) {
  const url = new URL(`https://images.weserv.nl/`);
  url.searchParams.set("url", "nxtyou-2.pages.dev" + src);
  url.searchParams.set("w", width);
  url.searchParams.set("quality", quality || "100");
  url.searchParams.set("output", "webp");
  return url.href;
}
