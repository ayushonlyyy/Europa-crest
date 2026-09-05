import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Vite requires a physical index.html as the build entry point.
// To honor the "HTML document lives in index.js" requirement as closely
// as possible, index.html is kept intentionally empty (just a mount node),
// and the entire <head> (title, meta tags, fonts, favicon) is built from
// a template string defined in src/index.js and injected at runtime by
// src/main.jsx. See src/index.js for that template.
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "dist",
  },
});
