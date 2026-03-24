"use client";

import { useMemo, useState } from "react";
import { Project } from "@/data/projects";
import ProjectFilters from "@/components/projects/ProjectFilters";
import ProjectCard from "@/components/projects/ProjectCard";

type ProjectsClientProps = {
  projects: Project[];
};

export default function ProjectsClient({ projects }: ProjectsClientProps) {
  const [types, setTypes] = useState<string[]>([]);
  const [years, setYears] = useState<string[]>([]);
  const [query, setQuery] = useState("");

  const typeOptions = useMemo(
    () => Array.from(new Set(projects.map((project) => project.type))),
    [projects]
  );
  const yearOptions = useMemo(
    () => Array.from(new Set(projects.map((project) => project.year.toString()))),
    [projects]
  );

  const filtered = projects.filter((project) => {
    const typeOk = types.length === 0 || types.includes(project.type);
    const yearOk = years.length === 0 || years.includes(project.year.toString());
    const queryOk =
      query.trim().length === 0 ||
      project.title.toLowerCase().includes(query.toLowerCase()) ||
      project.location.toLowerCase().includes(query.toLowerCase());
    return typeOk && yearOk && queryOk;
  });

  return (
    <>
      <div className="mt-8" data-reveal>
        <input
          className="input-field"
          placeholder="Search by project name or location"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
      </div>

      <div className="mt-8">
        <ProjectFilters
          groups={[
            {
              label: "Project Type",
              options: typeOptions,
              value: types,
              onToggle: (option) =>
                setTypes((prev) =>
                  prev.includes(option) ? prev.filter((item) => item !== option) : [...prev, option]
                ),
            },
            {
              label: "Completion Year",
              options: yearOptions,
              value: years,
              onToggle: (option) =>
                setYears((prev) =>
                  prev.includes(option) ? prev.filter((item) => item !== option) : [...prev, option]
                ),
            },
          ]}
          onClear={() => {
            setTypes([]);
            setYears([]);
            setQuery("");
          }}
        />
      </div>

      <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {filtered.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
      {filtered.length === 0 ? (
        <p className="mt-8 text-sm text-ink/60" data-reveal>
          No projects match the current filters. Try clearing filters or adjusting your search.
        </p>
      ) : null}
    </>
  );
}
