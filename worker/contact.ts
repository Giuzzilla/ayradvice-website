const TURNSTILE_VERIFY_URL = "https://challenges.cloudflare.com/turnstile/v0/siteverify";
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

interface ContactMessage {
	name: string;
	email: string;
	phone: string;
	message: string;
}

export async function handleContact(request: Request, env: Env): Promise<Response> {
	let form: FormData;
	try {
		form = await request.formData();
	} catch {
		return json({ ok: false, error: "invalid_body" }, 400);
	}

	// Bots fill the hidden "website" field; pretend success and drop the message.
	if (field(form, "website")) return json({ ok: true });

	const contact: ContactMessage = {
		name: singleLine(field(form, "name")).slice(0, 256),
		email: singleLine(field(form, "email")).slice(0, 256),
		phone: singleLine(field(form, "phone")).slice(0, 256),
		message: field(form, "message").slice(0, 5000),
	};

	if (!EMAIL_PATTERN.test(contact.email)) {
		return json({ ok: false, error: "invalid_email" }, 400);
	}

	const token = field(form, "cf-turnstile-response");
	const ip = request.headers.get("CF-Connecting-IP") ?? undefined;
	if (!(await verifyTurnstile(token, ip, env.TURNSTILE_SECRET_KEY))) {
		return json({ ok: false, error: "captcha_failed" }, 403);
	}

	const recipients = env.CONTACT_TO.split(",")
		.map((address) => address.trim())
		.filter(Boolean);

	// Verified-destination sending accepts a single recipient per message
	const results = await Promise.allSettled(
		recipients.map((to) =>
			env.EMAIL.send({
				from: { name: "Sito AYR Advice", email: env.CONTACT_FROM },
				to,
				replyTo: contact.name ? { name: contact.name, email: contact.email } : contact.email,
				subject: `Nuovo contatto dal sito: ${contact.name || contact.email}`,
				text: formatEmail(contact),
			}),
		),
	);

	results.forEach((result, i) => {
		if (result.status === "rejected") console.error(`Failed to send contact email to ${recipients[i]}`, result.reason);
	});

	if (!results.some((result) => result.status === "fulfilled")) {
		return json({ ok: false, error: "send_failed" }, 502);
	}

	return json({ ok: true });
}

async function verifyTurnstile(token: string, ip: string | undefined, secret: string): Promise<boolean> {
	if (!token) return false;

	const body = new FormData();
	body.append("secret", secret);
	body.append("response", token);
	if (ip) body.append("remoteip", ip);

	const response = await fetch(TURNSTILE_VERIFY_URL, { method: "POST", body });
	const result = await response.json<{ success: boolean }>();
	return result.success;
}

function formatEmail({ name, email, phone, message }: ContactMessage): string {
	return [
		`Nome: ${name || "-"}`,
		`Email: ${email}`,
		`Telefono: ${phone || "-"}`,
		"",
		"Messaggio:",
		message || "-",
	].join("\n");
}

function field(form: FormData, name: string): string {
	const value = form.get(name);
	return typeof value === "string" ? value.replace(/\r\n?/g, "\n").trim() : "";
}

function singleLine(value: string): string {
	return value.replace(/\s+/g, " ");
}

function json(body: unknown, status = 200): Response {
	return Response.json(body, { status });
}
