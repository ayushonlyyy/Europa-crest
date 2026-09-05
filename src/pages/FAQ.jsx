import React from "react";
import PageShell from "../components/PageShell.jsx";
import Reveal from "../components/Reveal.jsx";

const FAQS = [
  {
    q: "What is Europa Crest?",
    a: "Europa Crest is a personal, open web-app platform. It builds free web apps and makes them available to anyone.",
  },
  {
    q: "Are the apps free?",
    a: "Yes. Every app on Europa Crest is free to use right now, with no subscriptions or hidden charges.",
  },
  {
    q: "Does Europa Crest sell user data?",
    a: "No. Europa Crest does not sell user data to advertisers or anyone else.",
  },
  {
    q: "Is Europa Crest commercial?",
    a: "Not currently. It may become commercial in the future with very low charges if needed, and any revenue would go toward maintaining and improving Europa Crest.",
  },
  {
    q: "What is Europa AI?",
    a: "Europa AI is an advanced AI web application with a set of AI-powered features in one simple interface.",
  },
  {
    q: "What is Europa Live?",
    a: "Europa Live is a live news website with news search, full articles, AI-generated summaries, and live gold and silver rates.",
  },
  {
    q: "What is Europify?",
    a: "Europify is a free, ad-free music-streaming web app that uses a Git user/API-based music source. It doesn't claim ownership over the music it streams.",
  },
  {
    q: "How can I send feedback?",
    a: "Use the feedback form on the Contact page. You can submit it anonymously, and name and email are optional.",
  },
  {
    q: "Are more projects coming?",
    a: "Yes. More free Europa Crest projects are planned and will be added over time.",
  },
];

export default function FAQ() {
  return (
    <PageShell>
      <section className="container-crest pb-16 pt-16 sm:pt-20">
        <Reveal>
          <h1 className="text-3xl font-extrabold tracking-tight sm:text-5xl">FAQ</h1>
        </Reveal>
      </section>

      <section className="container-crest max-w-2xl divide-y divide-crest-border border-y border-crest-border pb-28">
        {FAQS.map((item, i) => (
          <Reveal key={item.q} delay={i * 0.03} className="py-6">
            <h3 className="mb-2 text-base font-semibold">{item.q}</h3>
            <p className="text-sm leading-relaxed text-crest-gray">{item.a}</p>
          </Reveal>
        ))}
      </section>
    </PageShell>
  );
}
