import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function ProjectCard({ name, tagline, to, status, comingSoon = false }) {
  return (
    <motion.div
      whileHover={comingSoon ? {} : { y: -4 }}
      transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
      className="flex h-full flex-col justify-between rounded-2xl border border-crest-border bg-crest-panel p-6"
    >
      <div>
        <div className="mb-4 flex items-center justify-between">
          <h3 className="text-lg font-semibold">{name}</h3>
          {status && (
            <span className="rounded-full border border-crest-border px-2.5 py-0.5 text-xs text-crest-gray">
              {status}
            </span>
          )}
        </div>
        <p className="text-sm leading-relaxed text-crest-gray">{tagline}</p>
      </div>

      {!comingSoon ? (
        <Link
          to={to}
          className="mt-6 inline-flex w-fit items-center gap-1.5 text-sm font-medium text-crest-redlight transition-colors hover:text-white"
        >
          Explore
        </Link>
      ) : (
        <span className="mt-6 inline-flex w-fit text-sm font-medium text-crest-fog">Coming soon</span>
      )}
    </motion.div>
  );
}
