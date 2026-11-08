import type { APIRoute } from "astro";

const pages = Object.keys(import.meta.glob("./*.astro"))
	.map((file) => file.replace(/^\.\/|\.astro$/g, ""))
	.filter((name) => name !== "404")
	.map((name) => (name === "index" ? "/" : `/${name}`));

export const GET: APIRoute = ({ site }) => {
	const urls = pages.map((path) => `\t<url><loc>${new URL(path, site)}</loc></url>`).join("\n");
	const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;
	return new Response(body, { headers: { "Content-Type": "application/xml" } });
};
