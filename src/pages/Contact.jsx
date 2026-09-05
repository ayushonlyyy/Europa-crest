import React from "react";
import PageShell from "../components/PageShell.jsx";
import Reveal from "../components/Reveal.jsx";
import FeedbackForm from "../components/FeedbackForm.jsx";
import { CONTACT } from "../config/links.js";

const CHANNELS = [
  { label: "Email", value: CONTACT.email, href: `mailto:${CONTACT.email}` },
  { label: "LinkedIn", value: "Ayush Raj Sinha", href: CONTACT.linkedin },
  { label: "X", value: "@Ayushonlyy", href: CONTACT.x },
  { label: "YouTube", value: "@ayushonlyy", href: CONTACT.youtube },
];

export default function Contact() {
  return (
    <PageShell>
      <section className="container-crest pb-16 pt-16 sm:pt-20">
        <Reveal>
          <h1 className="text-3xl font-extrabold tracking-tight sm:text-5xl">Contact</h1>
          <p className="mt-4 max-w-2xl text-balance text-sm leading-relaxed text-crest-gray sm:text-base">
            Reach out directly, or send feedback through the form below.
          </p>
        </Reveal>
      </section>

      <section className="container-crest grid gap-12 pb-28 lg:grid-cols-2">
        <Reveal className="space-y-3">
          {CHANNELS.map((c) => (
            <a
              key={c.label}
              href={c.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between rounded-2xl border border-crest-border bg-crest-panel px-6 py-4 transition-colors hover:border-crest-redlight"
            >
              <span className="text-sm text-crest-gray">{c.label}</span>
              <span className="text-sm font-medium text-white">{c.value}</span>
            </a>
          ))}
        </Reveal>

        <Reveal delay={0.08}>
          <h2 className="mb-1 text-lg font-semibold">Send feedback</h2>
          <p className="mb-6 text-sm text-crest-gray">
            Anonymous is fine. Name and email are optional.
          </p>
          <FeedbackForm />
        </Reveal>
      </section>
    </PageShell>
  );
}
