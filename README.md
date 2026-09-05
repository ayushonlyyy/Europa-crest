# Europa Crest

Europa Crest is a personal, open, and free web-app platform. It builds free
web applications and shares them with anyone who wants to use them. This
repository is the Europa Crest website: an introduction to the platform, its
projects, its founder, and a way to get in touch.

Built with React, React Router, Tailwind CSS, and Framer Motion, deployed as
a static site on Cloudflare Pages, with a small Cloudflare Worker handling
the feedback form.

## Project structure

```
europa-crest/
├── index.html              # Minimal HTML shell (Vite's required entry point)
├── src/
│   ├── index.js             # The site's <head> content, as a template string
│   ├── main.jsx              # Injects index.js into the document, mounts React
│   ├── App.jsx                # Routes and page transitions
│   ├── config/
│   │   ├── projects.js         # All project data + URLs (edit here, not elsewhere)
│   │   ├── links.js             # Social/contact links + feedback API URL
│   │   └── media.js              # Logo file path/type
│   ├── components/            # Shared UI (NavBar, Footer, ProjectCard, etc.)
│   ├── pages/                 # One file per route
│   └── styles/index.css        # Tailwind + global styles
├── worker/index.js          # Cloudflare Worker: feedback → Telegram
├── wrangler.toml             # Worker configuration (no secrets in here)
└── public/                  # Static assets (favicon, and your logo file)
```

## 1. Install dependencies

```bash
npm install
```

## 2. Run locally

```bash
npm run dev
```

This starts the site at `http://localhost:5173`.

## 3. Build for production

```bash
npm run build
```

This outputs a static site into `dist/`.

## 4. Deploy the website to Cloudflare Pages

1. Push this repository to GitHub (or GitLab).
2. In the Cloudflare dashboard, create a new **Pages** project and connect
   the repository.
3. Build settings:
   - Build command: `npm run build`
   - Build output directory: `dist`
4. Deploy. Cloudflare Pages is free for this kind of static site.

You can also deploy from the command line with `npx wrangler pages deploy dist`.

## 5. Set up the Telegram feedback system

The feedback form on the Contact page sends messages to a Cloudflare Worker,
which forwards them to your Telegram bot. The bot token never touches the
frontend or the Git repository.

### a. Log in to Cloudflare

```bash
npx wrangler login
```

### b. Add your Telegram Bot Token as a secret (never in a file)

```bash
npx wrangler secret put TELEGRAM_BOT_TOKEN
```

You'll be prompted to paste the token. It's stored securely by Cloudflare
and injected into the Worker at runtime as `env.TELEGRAM_BOT_TOKEN`.

### c. Set your Telegram Chat ID

Open `wrangler.toml` and update:

```toml
[vars]
TELEGRAM_CHAT_ID = "your-real-chat-id"
```

This value is not secret (it just identifies which chat to send to), so it's
fine as a plain variable.

### d. Deploy the Worker

```bash
npx wrangler deploy worker/index.js
```

Wrangler will print the Worker's URL, something like:

```
https://europa-crest-feedback.your-subdomain.workers.dev
```

### e. Point the frontend at the Worker

Open `src/config/links.js` and update `FEEDBACK_API_URL` with the URL from
the previous step. Rebuild and redeploy the site.

### How the feedback flow works

```
Feedback Form (frontend)
        │  POST { name, email, message }
        ▼
Cloudflare Worker (worker/index.js)
        │  reads TELEGRAM_BOT_TOKEN from secret,
        │  TELEGRAM_CHAT_ID from wrangler.toml
        ▼
Telegram Bot API → your Telegram chat
```

The Telegram message looks like:

```
Europa Crest Feedback

Name: Anonymous / provided name
Email: Not provided / provided email
Message: [feedback]

Time: [ISO timestamp]
```

Name and email are always optional. Only the message is required.

## 6. Replace project URLs

All external project URLs live in one place:
`src/config/projects.js`. Update the `url` field for Europa AI, Europa Live,
and Europify there. Nothing else in the codebase needs to change.

## 7. Add the logo

Drop one of these files into the `public/` folder:

- `logo.png`
- `logo.jpg`
- `logo.jpeg`
- `logo.mp4`

Then open `src/config/media.js` and set:

```js
export const LOGO_SRC = "/logo.mp4"; // or /logo.png, /logo.jpg, /logo.jpeg
export const LOGO_TYPE = "video";    // "video" for mp4, "image" for anything else
```

### How `logo.mp4` works

If you use a video logo, it plays automatically, muted, on a permanent
loop, with no controls, no play/pause button, and no sound. It's treated as
a purely visual mark, not a media player.

Until you add a logo file, the media frame at the top of the homepage stays
empty (a clean bordered square), it does not show a broken image icon.

## 8. Cloudflare Worker commands (reference)

```bash
npx wrangler login                      # authenticate with Cloudflare
npx wrangler dev worker/index.js         # run the Worker locally
npx wrangler deploy worker/index.js      # deploy the Worker
npx wrangler secret put TELEGRAM_BOT_TOKEN   # store the bot token securely
```

## 9. Security notes

- The Telegram Bot Token is **never** stored in frontend code, HTML,
  `wrangler.toml`, or the Git repository. It only exists as a Cloudflare
  Worker secret.
- `wrangler.toml` only contains the non-secret `TELEGRAM_CHAT_ID`.
- `.gitignore` excludes `.env`, `.dev.vars`, and build output, so secrets
  and local-only files don't get committed by accident.
- Europa Crest does not sell user data and uses trusted APIs where needed.
  See the Trust & Privacy page on the site for the full explanation.

## License

This repository is part of the Europa Crest platform, maintained by
Ayush Raj Sinha.
