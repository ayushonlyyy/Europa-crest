import React from "react";
import { Link } from "react-router-dom";
import PageShell from "../components/PageShell.jsx";

export default function NotFound() {
  return (
    <PageShell>
      <section className="container-crest flex flex-col items-center py-32 text-center">
        <h1 className="text-2xl font-semibold">Page not found</h1>
        <p className="mt-3 text-sm text-crest-gray">This page doesn't exist.</p>
        <Link to="/" className="mt-6 text-sm text-crest-redlight hover:text-white">
          Back home
        </Link>
      </section>
    </PageShell>
  );
}
