"use client";

import { cn } from "@/lib/utils";

type FilterGroup = {
  label: string;
  options: string[];
  value: string[];
  onToggle: (option: string) => void;
};

type ProjectFiltersProps = {
  groups: FilterGroup[];
  onClear: () => void;
};

export default function ProjectFilters({ groups, onClear }: ProjectFiltersProps) {
  return (
    <div className="rounded-[28px] border border-ink/10 bg-white p-6 shadow-card" data-reveal>
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-ink/50">Filter Portfolio</p>
          <p className="mt-2 text-lg font-semibold text-ink">Refine by expertise and timeline</p>
        </div>
        <button
          className="text-xs uppercase tracking-[0.3em] text-ink/50 transition hover:text-ink"
          onClick={onClear}
          type="button"
        >
          Clear Filters
        </button>
      </div>

      <div className="mt-6 grid gap-6 md:grid-cols-2">
        {groups.map((group) => (
          <div key={group.label}>
            <p className="text-xs uppercase tracking-[0.3em] text-ink/50">{group.label}</p>
            <div className="mt-3 flex flex-wrap gap-3">
              {group.options.map((option) => {
                const active = group.value.includes(option);
                return (
                  <button
                    key={option}
                    type="button"
                    onClick={() => group.onToggle(option)}
                    className={cn(
                      "rounded-full border px-4 py-2 text-xs uppercase tracking-[0.2em] transition",
                      active
                        ? "border-ink bg-ink text-sand"
                        : "border-ink/20 text-ink/70 hover:border-ink/50"
                    )}
                  >
                    {option}
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
