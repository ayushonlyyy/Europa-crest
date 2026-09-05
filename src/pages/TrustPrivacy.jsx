import React from "react";
import PageShell from "../components/PageShell.jsx";
import Reveal from "../components/Reveal.jsx";

const SECTIONS = [
  {
    title: "Free access",
    body: "Every app on Europa Crest is free to use. There's no paywall blocking core features.",
  },
  {
    title: "No selling your data",
    body: "Europa Crest does not sell user data to advertisers or third parties. Data is used only to make the apps work, not as a product on its own.",
  },
  {
    title: "Trusted APIs",
    body: "When a project needs outside services, such as AI, news, or market data, it connects to established, trusted APIs rather than unverified sources.",
  },
  {
    title: "Privacy-conscious development",
    body: "Projects are built with privacy in mind from the start, keeping the data collected to what's actually needed for the app to work.",
  },
  {
    title: "Responsible use of external services",
    body: "Third-party services used by Europa Crest apps have their own terms and privacy practices. Europa Crest aims to use services that align with the same free, privacy-conscious approach.",
  },
];

export default function TrustPrivacy() {
  return (
    <PageShell>
      <section className="container-crest pb-16 pt-16 sm:pt-20">
        <Reveal>
          <h1 className="text-3xl font-extrabold tracking-tight sm:text-5xl">Trust &amp; Privacy</h1>
          <p className="mt-4 max-w-2xl text-balance text-sm leading-relaxed text-crest-gray sm:text-base">
            Here's a plain explanation of how Europa Crest handles your
            data and privacy. No absolute guarantees, just an honest
            account of the approach.
          </p>
        </Reveal>
      </section>

      <section className="container-crest pb-24 space-y-5">
        {SECTIONS.map((s, i) => (
          <Reveal key={s.title} delay={i * 0.05} className="rounded-2xl border border-crest-border bg-crest-panel p-6">
            <h3 className="mb-2 text-base font-semibold text-crest-redlight">{s.title}</h3>
            <p className="text-sm leading-relaxed text-crest-gray">{s.body}</p>
          </Reveal>
        ))}

        <Reveal delay={0.25} className="rounded-2xl border border-crest-border p-6">
          <p className="text-sm leading-relaxed text-crest-fog">
            No online service can promise to be completely risk-free, and
            Europa Crest won't claim otherwise. What it can promise is that
            privacy and security are treated seriously, and handled as
            carefully as a small, independent project reasonably can.
          </p>
        </Reveal>
      </section>
    </PageShell>
  );
}
