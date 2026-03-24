"use client";

import { useState } from "react";

export default function ProjectGallery({ images }: { images: string[] }) {
  const [active, setActive] = useState<number | null>(null);

  return (
    <div className="space-y-6" data-reveal>
      <div className="grid gap-4 md:grid-cols-3">
        {images.map((img, index) => (
          <button
            key={`${img}-${index}`}
            type="button"
            onClick={() => setActive(index)}
            className="group relative h-44 overflow-hidden rounded-2xl border border-ink/10 bg-gradient-to-br from-ink2 via-ink to-black/70"
          >
            <span className="absolute inset-0 grid-overlay opacity-15"></span>
            <span className="absolute bottom-3 left-3 text-xs uppercase tracking-[0.3em] text-sand/70">
              View
            </span>
          </button>
        ))}
      </div>

      {active !== null ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-6">
          <div className="relative w-full max-w-4xl rounded-3xl bg-white p-6 shadow-2xl">
            <button
              className="absolute right-4 top-4 text-xs uppercase tracking-[0.3em] text-ink/60"
              onClick={() => setActive(null)}
              type="button"
            >
              Close
            </button>
            <div className="h-[60vh] rounded-2xl bg-gradient-to-br from-ink2 via-ink to-black/70"></div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
