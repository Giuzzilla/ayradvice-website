import { handleContact } from "./contact";

export default {
	async fetch(request, env) {
		const url = new URL(request.url);

		if (url.pathname === "/api/contact") {
			if (request.method !== "POST") {
				return new Response("Method Not Allowed", { status: 405, headers: { Allow: "POST" } });
			}
			return handleContact(request, env);
		}

		return env.ASSETS.fetch(request);
	},
} satisfies ExportedHandler<Env>;
