"use client";

import { useEffect, useState } from "react";
import { Project } from "@/data/projects";
import SearchModal from "@/components/search/SearchModal";

export default function SearchTrigger({ projects }: { projects: Project[] }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setOpen(true);
      }
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="mt-8 inline-flex items-center gap-3 rounded-full border border-ink/10 bg-white px-4 py-3 text-xs uppercase tracking-[0.3em] text-ink/60 transition hover:border-ink/40"
      >
        Search projects
        <span className="rounded-full border border-ink/10 px-2 py-1 text-[10px] uppercase tracking-[0.2em] text-ink/40">
          Ctrl + K
        </span>
      </button>

      {open ? <SearchModal projects={projects} onClose={() => setOpen(false)} /> : null}
    </>
  );
}
