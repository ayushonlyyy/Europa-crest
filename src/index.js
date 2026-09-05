// This file represents the main HTML document for Europa Crest.
//
// Vite needs a physical index.html file to start a build, so that file is
// kept as a bare, empty shell. Everything that would normally live in
// <head> — title, description, favicon, fonts, theme color — is defined
// here as a template string and injected into the real document by
// src/main.jsx before React mounts. If you need to change the page title,
// meta description, or fonts, this is the file to edit.

export const DOCUMENT_HEAD = `
  <title>Europa Crest — Free web apps, made for everyone</title>
  <meta name="description" content="Europa Crest is a personal, open and free web-app platform. No subscriptions, no selling your data, just useful web apps." />
  <meta name="theme-color" content="#050505" />
  <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
  <meta property="og:title" content="Europa Crest" />
  <meta property="og:description" content="Free web apps, made for everyone." />
  <meta property="og:type" content="website" />
  <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
`;
