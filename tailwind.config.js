/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        crest: {
          black: "#050505",
          panel: "#0d0d0d",
          border: "#1f1f1f",
          gray: "#a3a3a3",
          fog: "#6f6f6f",
          red: "#8a1f2b",
          redlight: "#b8323f",
          reddim: "#3d1015",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      maxWidth: {
        content: "1100px",
      },
      transitionTimingFunction: {
        crest: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
};
