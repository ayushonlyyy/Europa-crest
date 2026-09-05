// Europa Crest — Worker
//
// This one Worker does two jobs:
//   1. Serves the built website (from dist/, via the ASSETS binding)
//   2. Handles POST /api/feedback and forwards it to Telegram
//
// The bot token is read from a Cloudflare Worker secret (never from
// source code or wrangler.toml). Set it with:
//   npx wrangler secret put TELEGRAM_BOT_TOKEN

function corsHeaders() {
  return {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
  };
}

function jsonResponse(body, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json", ...corsHeaders() },
  });
}

async function handleFeedback(request, env) {
  if (request.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders() });
  }

  if (request.method !== "POST") {
    return jsonResponse({ ok: false, error: "Method not allowed" }, 405);
  }

  let payload;
  try {
    payload = await request.json();
  } catch {
    return jsonResponse({ ok: false, error: "Invalid JSON body" }, 400);
  }

  const name = (payload.name || "").toString().trim().slice(0, 200);
  const email = (payload.email || "").toString().trim().slice(0, 200);
  const message = (payload.message || "").toString().trim().slice(0, 4000);

  if (!message) {
    return jsonResponse({ ok: false, error: "Message is required" }, 400);
  }

  if (!env.TELEGRAM_BOT_TOKEN || !env.TELEGRAM_CHAT_ID) {
    return jsonResponse({ ok: false, error: "Server is not configured" }, 500);
  }

  const timestamp = new Date().toISOString();

  const text =
    `Europa Crest Feedback\n\n` +
    `Name: ${name || "Anonymous"}\n` +
    `Email: ${email || "Not provided"}\n` +
    `Message: ${message}\n\n` +
    `Time: ${timestamp}`;

  const telegramUrl = `https://api.telegram.org/bot${env.TELEGRAM_BOT_TOKEN}/sendMessage`;

  try {
    const tgRes = await fetch(telegramUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ chat_id: env.TELEGRAM_CHAT_ID, text }),
    });

    if (!tgRes.ok) {
      return jsonResponse({ ok: false, error: "Could not deliver feedback" }, 502);
    }

    return jsonResponse({ ok: true });
  } catch {
    return jsonResponse({ ok: false, error: "Could not deliver feedback" }, 502);
  }
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname === "/api/feedback") {
      return handleFeedback(request, env);
    }

    // Everything else is the static site (dist/), served via the
    // ASSETS binding configured in wrangler.toml.
    return env.ASSETS.fetch(request);
  },
};
