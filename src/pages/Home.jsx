import React from "react";
import PageShell from "../components/PageShell.jsx";
import Reveal from "../components/Reveal.jsx";
import Button from "../components/Button.jsx";
import MediaFrame from "../components/MediaFrame.jsx";
import ProjectCard from "../components/ProjectCard.jsx";
import { PROJECTS } from "../config/projects.js";

export default function Home() {
  return (
    <PageShell>
      <section className="container-crest flex flex-col items-center pb-20 pt-16 text-center sm:pt-24">
        <MediaFrame size={150} className="mb-8" />

        <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl">
          EUROPA CREST
        </h1>
        <p className="mt-4 text-lg text-crest-gray sm:text-xl">
          Free web apps, made for everyone.
        </p>

        <p className="mt-6 max-w-xl text-balance text-sm leading-relaxed text-crest-gray sm:text-base">
          Europa Crest is a personal platform that builds free, open web
          applications. No subscriptions, no selling your data. Just useful
          apps, built by one person and shared with anyone who wants to use
          them.
        </p>

        <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <Button to="/projects">See the projects</Button>
          <Button to="/about" variant="outline">
            About Europa Crest
          </Button>
        </div>
      </section>

      <section className="container-crest pb-24">
        <Reveal>
          <div className="mb-8 flex items-end justify-between">
            <h2 className="text-xl font-semibold sm:text-2xl">Featured projects</h2>
            <a href="/projects" className="text-sm text-crest-redlight hover:text-white">
              View all
            </a>
          </div>
        </Reveal>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.06}>
              <ProjectCard name={p.name} tagline={p.tagline} to={`/projects/${p.slug}`} status={p.status} />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="container-crest pb-28">
        <Reveal className="rounded-2xl border border-crest-border bg-crest-panel p-8 sm:p-12">
          <h2 className="text-xl font-semibold sm:text-2xl">Built by one person, for everyone</h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-crest-gray sm:text-base">
            Europa Crest is founded and maintained by Ayush Raj Sinha, a
            developer and independent researcher. Every project here is
            built end to end by one person, and kept free on purpose.
          </p>
          <div className="mt-6">
            <Button to="/founder" variant="outline">Meet the founder</Button>
          </div>
        </Reveal>
      </section>
    </PageShell>
  );
}
