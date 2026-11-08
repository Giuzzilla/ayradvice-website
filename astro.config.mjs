import { defineConfig, envField } from "astro/config";

export default defineConfig({
	site: "https://www.ayradvice.it",
	trailingSlash: "never",
	build: { format: "file" },
	env: {
		schema: {
			PUBLIC_TURNSTILE_SITE_KEY: envField.string({
				context: "client",
				access: "public",
				// Cloudflare test key, always passes
				default: "1x00000000000000000000AA",
			}),
		},
	},
});
