import React from "react";
import PageShell from "../components/PageShell.jsx";
import Reveal from "../components/Reveal.jsx";
import ProjectCard from "../components/ProjectCard.jsx";
import { PROJECTS, MORE_PROJECTS } from "../config/projects.js";

export default function Projects() {
  return (
    <PageShell>
      <section className="container-crest pb-12 pt-16 sm:pt-20">
        <Reveal>
          <h1 className="text-3xl font-extrabold tracking-tight sm:text-5xl">Projects</h1>
          <p className="mt-4 max-w-2xl text-balance text-sm leading-relaxed text-crest-gray sm:text-base">
            Every project below is free to use. Click Explore to learn what
            it does before opening it.
          </p>
        </Reveal>
      </section>

      <section className="container-crest pb-24">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.06}>
              <ProjectCard name={p.name} tagline={p.tagline} to={`/projects/${p.slug}`} status={p.status} />
            </Reveal>
          ))}
          <Reveal delay={PROJECTS.length * 0.06}>
            <ProjectCard name={MORE_PROJECTS.name} tagline={MORE_PROJECTS.tagline} comingSoon />
          </Reveal>
        </div>
      </section>
    </PageShell>
  );
}
