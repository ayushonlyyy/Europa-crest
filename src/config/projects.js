// Centralized project data. Update project URLs here only — nowhere else
// in the codebase should a project URL be hardcoded.

export const PROJECTS = [
  {
    slug: "europa-ai",
    name: "Europa AI",
    tagline: "An advanced AI web app, built to be genuinely useful.",
    intro:
      "Europa AI is an advanced AI web application built for everyday use. It brings together a set of AI-powered tools in one clean interface, free for anyone to use.",
    whatItDoes:
      "Europa AI helps you work with AI directly in your browser, no installs, no accounts you have to pay for. It's built to feel simple, fast, and dependable.",
    features: [
      "Advanced AI features in one place",
      "Simple, distraction-free interface",
      "Built and maintained by one developer, not a large team",
      "Free to use, with no hidden charges",
    ],
    tech:
      "Europa AI uses trusted third-party AI APIs to power its features. No user conversations are sold or shared with advertisers.",
    status: "Live",
    url: "https://demo.europacrest.dev/europa-ai",
  },
  {
    slug: "europa-live",
    name: "Europa Live",
    tagline: "Live news, market rates, and AI summaries in one place.",
    intro:
      "Europa Live is a live news website. It brings together news, search, and useful daily information like gold and silver rates in one simple page.",
    whatItDoes:
      "Europa Live pulls in live news articles, lets you search past coverage, and uses AI to generate short, easy-to-read summaries of longer articles so you can catch up quickly.",
    features: [
      "Live news updates",
      "News search",
      "Full articles",
      "AI-generated article summaries",
      "Live gold rates",
      "Live silver rates",
    ],
    tech:
      "Europa Live uses trusted news and market-data APIs to fetch live information. Article summaries are generated using AI and are meant as a quick overview, not a replacement for the full article.",
    status: "Live",
    url: "https://demo.europacrest.dev/europa-live",
  },
  {
    slug: "europify",
    name: "Europify",
    tagline: "Free, ad-free music streaming.",
    intro:
      "Europify is a free music-streaming web app. It's built for people who just want to listen to music without ads getting in the way.",
    whatItDoes:
      "Europify streams music using a Git user and API-based music source, and plays it back in a clean, ad-free player.",
    features: [
      "Ad-free listening",
      "Simple search and playback",
      "No account required to listen",
      "Free, with no subscription tiers",
    ],
    tech:
      "Europify does not host, own, or claim distribution rights over any music. It connects to an existing Git user/API-based music source to stream tracks. All rights belong to their original owners.",
    status: "Live",
    url: "https://demo.europacrest.dev/europify",
  },
];

export const MORE_PROJECTS = {
  name: "More Projects",
  tagline: "More free Europa Crest apps are on the way.",
};
