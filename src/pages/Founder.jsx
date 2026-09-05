import React from "react";
import PageShell from "../components/PageShell.jsx";
import Reveal from "../components/Reveal.jsx";
import Button from "../components/Button.jsx";
import { PORTFOLIO_URL } from "../config/links.js";

export default function Founder() {
  return (
    <PageShell>
      <section className="container-crest pb-16 pt-16 sm:pt-20">
        <Reveal>
          <p className="text-sm text-crest-redlight">Founder / Developer · Independent Researcher</p>
          <h1 className="mt-2 text-3xl font-extrabold tracking-tight sm:text-5xl">Ayush Raj Sinha</h1>
        </Reveal>

        <Reveal delay={0.08} className="mt-8 max-w-2xl space-y-5 text-sm leading-relaxed text-crest-gray sm:text-base">
          <p>
            I'm Ayush Raj Sinha, founder of Europa Crest, an independent
            researcher working at the frontier of theoretical physics and
            artificial intelligence — exploring whether the Internet
            constitutes a fundamental dimension of reality.
          </p>
          <p>
            I'm also an astrophotographer, capturing the cosmic scale of
            existence from Bihar, India, alongside work as a content
            creator, AI filmmaker, and editor crafting cinematic stories
            with machine intelligence.
          </p>
          <p>
            Beyond research and the cosmos, I'm a full stack developer,
            founder of Europa Crest, where I design, build, and ship
            products end to end.
          </p>
        </Reveal>

        <Reveal delay={0.15} className="mt-8">
          <Button href={PORTFOLIO_URL}>View Portfolio</Button>
        </Reveal>
      </section>

      <section className="container-crest pb-28">
        <Reveal className="max-w-2xl rounded-2xl border border-crest-border bg-crest-panel p-8">
          <h2 className="text-xl font-semibold">Cosmora</h2>
          <p className="mt-4 text-sm leading-relaxed text-crest-gray sm:text-base">
            I started Cosmora for junior students who think beyond their age
            but don't know where to begin their journey into space. I'm a
            student too, so I understand that curiosity. That's why every
            Cosmora web app is completely free, open source, and built with
            Claude Code with full credit given. I hope Cosmora helps you
            learn, explore, and discover the universe.
          </p>
        </Reveal>
      </section>
    </PageShell>
  );
}
