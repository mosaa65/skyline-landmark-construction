"use client";

export default function ProjectMap() {
  const token = process.env.NEXT_PUBLIC_MAPBOX_TOKEN ?? "";

  return (
    <div className="mt-16" data-reveal>
      <h2 className="text-2xl font-display text-ink">Project Map</h2>
      <div className="mt-6 rounded-[28px] border border-ink/10 bg-white p-8 shadow-card">
        {token ? (
          <div className="h-72 rounded-2xl bg-gradient-to-br from-ink2 via-ink to-black/70"></div>
        ) : (
          <div className="flex h-72 items-center justify-center rounded-2xl border border-dashed border-ink/20 text-sm text-ink/50">
            Add NEXT_PUBLIC_MAPBOX_TOKEN to enable the interactive map.
          </div>
        )}
      </div>
    </div>
  );
}
