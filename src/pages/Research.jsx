import React from "react";
import PageShell from "../components/PageShell.jsx";
import Reveal from "../components/Reveal.jsx";

export default function Research() {
  return (
    <PageShell>
      <section className="container-crest pb-24 pt-16 sm:pt-20">
        <Reveal>
          <h1 className="text-3xl font-extrabold tracking-tight sm:text-5xl">Research</h1>
        </Reveal>

        <Reveal delay={0.08} className="mt-8 max-w-2xl rounded-2xl border border-crest-border bg-crest-panel p-8 sm:p-10">
          <p className="text-balance text-lg leading-relaxed text-white sm:text-xl">
            "I am an independent researcher working at the frontier of
            theoretical physics and artificial intelligence, exploring
            whether the Internet constitutes a fundamental dimension of
            reality."
          </p>
        </Reveal>

        <Reveal delay={0.15} className="mt-8 max-w-2xl space-y-4">
          <p className="text-sm leading-relaxed text-crest-gray sm:text-base">
            This is an area of personal research and exploration, not an
            established scientific theory. It sits at the edge of
            theoretical physics and artificial intelligence, and it's the
            kind of question that drives a lot of what happens behind the
            scenes at Europa Crest.
          </p>
          <p className="text-sm leading-relaxed text-crest-gray sm:text-base">
            This page will grow as the research does. For now, it's simply a
            statement of the question being explored.
          </p>
        </Reveal>
      </section>
    </PageShell>
  );
}
