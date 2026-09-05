// Centralized social/contact links and the feedback API endpoint.

export const CONTACT = {
  email: "ayushonlyyy@gmail.com",
  linkedin:
    "https://www.linkedin.com/in/ayush-raj-sinha-0a448340a?utm_source=share_via&utm_content=profile&utm_medium=member_android",
  x: "https://x.com/Ayushonlyy",
  youtube: "https://youtube.com/@ayushonlyy?si=2tgN0TlPViIF3uB7",
};

export const PORTFOLIO_URL = "https://ayushonlyyy.github.io/";

// Same Worker serves the site and the API, so a relative path works both
// in production and with `wrangler dev`.
export const FEEDBACK_API_URL = "/api/feedback";
