import React from "react";
import { useParams, Link } from "react-router-dom";
import PageShell from "../components/PageShell.jsx";
import Reveal from "../components/Reveal.jsx";
import Button from "../components/Button.jsx";
import { PROJECTS } from "../config/projects.js";

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = PROJECTS.find((p) => p.slug === slug);

  if (!project) {
    return (
      <PageShell>
        <section className="container-crest py-24 text-center">
          <h1 className="text-2xl font-semibold">Project not found</h1>
          <p className="mt-3 text-sm text-crest-gray">
            That project doesn't exist yet.
          </p>
          <Link to="/projects" className="mt-6 inline-block text-sm text-crest-redlight">
            Back to projects
          </Link>
        </section>
      </PageShell>
    );
  }

  return (
    <PageShell>
      <section className="container-crest pb-10 pt-16 sm:pt-20">
        <Reveal>
          <Link to="/projects" className="text-sm text-crest-fog hover:text-crest-gray">
            ← All projects
          </Link>
          <div className="mt-4 flex flex-wrap items-center gap-3">
            <h1 className="text-3xl font-extrabold tracking-tight sm:text-5xl">{project.name}</h1>
            <span className="rounded-full border border-crest-border px-3 py-1 text-xs text-crest-gray">
              {project.status}
            </span>
          </div>
          <p className="mt-4 max-w-2xl text-balance text-sm leading-relaxed text-crest-gray sm:text-base">
            {project.intro}
          </p>
        </Reveal>
      </section>

      <section className="container-crest grid gap-5 pb-24 lg:grid-cols-2">
        <Reveal className="rounded-2xl border border-crest-border bg-crest-panel p-6">
          <h2 className="mb-2 text-base font-semibold text-crest-redlight">What it does</h2>
          <p className="text-sm leading-relaxed text-crest-gray">{project.whatItDoes}</p>
        </Reveal>

        <Reveal delay={0.05} className="rounded-2xl border border-crest-border bg-crest-panel p-6">
          <h2 className="mb-2 text-base font-semibold text-crest-redlight">Main features</h2>
          <ul className="space-y-2 text-sm leading-relaxed text-crest-gray">
            {project.features.map((f) => (
              <li key={f} className="flex gap-2">
                <span className="text-crest-redlight">–</span>
                <span>{f}</span>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.1} className="rounded-2xl border border-crest-border bg-crest-panel p-6 lg:col-span-2">
          <h2 className="mb-2 text-base font-semibold text-crest-redlight">Technology &amp; privacy</h2>
          <p className="text-sm leading-relaxed text-crest-gray">{project.tech}</p>
        </Reveal>
      </section>

      <section className="container-crest pb-28 text-center">
        <Reveal>
          <Button href={project.url} className="w-full sm:w-auto">
            Open Project
          </Button>
        </Reveal>
      </section>
    </PageShell>
  );
}
