"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Project } from "@/data/projects";

type SearchModalProps = {
  projects: Project[];
  onClose: () => void;
};

export default function SearchModal({ projects, onClose }: SearchModalProps) {
  const [query, setQuery] = useState("");
  const shortcut =
    typeof navigator !== "undefined" && navigator.platform.toLowerCase().includes("mac")
      ? "⌘"
      : "Ctrl";

  const results = useMemo(() => {
    if (query.trim().length === 0) return [];
    const q = query.toLowerCase();
    return projects.filter((project) =>
      [project.title, project.location, project.type].some((value) => value.toLowerCase().includes(q))
    );
  }, [projects, query]);

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/70 p-6">
      <div className="w-full max-w-2xl rounded-[32px] bg-white p-8 shadow-2xl">
        <div className="flex items-center justify-between">
          <p className="text-xs uppercase tracking-[0.3em] text-ink/50">Search Projects</p>
          <button
            type="button"
            className="text-xs uppercase tracking-[0.3em] text-ink/50"
            onClick={onClose}
          >
            Close
          </button>
        </div>
        <input
          autoFocus
          className="input-field mt-4"
          placeholder={`Search projects (${shortcut} + K)`}
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />

        <div className="mt-6 space-y-4">
          {results.length === 0 && query.trim().length > 0 ? (
            <p className="text-sm text-ink/60">No results found.</p>
          ) : null}

          {results.map((project) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className="block rounded-2xl border border-ink/10 p-4 transition hover:border-ink/40"
              onClick={onClose}
            >
              <p className="text-xs uppercase tracking-[0.3em] text-ink/50">{project.type}</p>
              <p className="mt-1 text-lg font-semibold text-ink">{project.title}</p>
              <p className="mt-1 text-sm text-ink/60">{project.location}</p>
            </Link>
          ))}
        </div>

        <p className="mt-6 text-xs uppercase tracking-[0.3em] text-ink/40">
          Tip: Press {shortcut} + K to open search
        </p>
      </div>
    </div>
  );
}
