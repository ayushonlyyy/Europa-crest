import React from "react";
import PageShell from "../components/PageShell.jsx";
import Reveal from "../components/Reveal.jsx";
import Button from "../components/Button.jsx";

const POINTS = [
  {
    title: "A personal platform",
    body: "Europa Crest is a personal, open web-app development platform. It isn't a company or a startup, it's built and run by one founder.",
  },
  {
    title: "Free for users",
    body: "Every Europa Crest app is free to use right now. There are no subscriptions, paywalls, or hidden charges.",
  },
  {
    title: "Trusted APIs",
    body: "Where a project needs outside data or AI, Europa Crest uses trusted, established APIs instead of building risky shortcuts.",
  },
  {
    title: "Not commercial, for now",
    body: "Europa Crest doesn't charge users today. If it ever becomes commercial, the goal is very low charges, only if needed to keep things running, and that money would go back into maintaining and improving these projects.",
  },
  {
    title: "Your data isn't for sale",
    body: "Europa Crest is not a data-selling service. It's built to be useful, not to profit from your information.",
  },
  {
    title: "More is coming",
    body: "Europa Crest is still growing. More free projects will be added over time.",
  },
];

export default function About() {
  return (
    <PageShell>
      <section className="container-crest pb-16 pt-16 sm:pt-20">
        <Reveal>
          <h1 className="text-3xl font-extrabold tracking-tight sm:text-5xl">About Europa Crest</h1>
          <p className="mt-4 max-w-2xl text-balance text-sm leading-relaxed text-crest-gray sm:text-base">
            Europa Crest exists to build useful web apps and give them away
            for free. It's a small, personal project, not a large company,
            and it's built with that mindset from the ground up.
          </p>
        </Reveal>
      </section>

      <section className="container-crest pb-24">
        <div className="grid gap-5 sm:grid-cols-2">
          {POINTS.map((point, i) => (
            <Reveal key={point.title} delay={i * 0.05} className="rounded-2xl border border-crest-border bg-crest-panel p-6">
              <h3 className="mb-2 text-base font-semibold text-crest-redlight">{point.title}</h3>
              <p className="text-sm leading-relaxed text-crest-gray">{point.body}</p>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10">
          <Button to="/trust" variant="outline">Read Trust &amp; Privacy</Button>
        </Reveal>
      </section>
    </PageShell>
  );
}
