"use client";

import { useState } from "react";

export default function BeforeAfterSlider({ before, after }: { before: string; after: string }) {
  const [value, setValue] = useState(50);

  return (
    <div className="relative h-72 overflow-hidden rounded-3xl border border-ink/10" data-reveal>
      <div className="absolute inset-0 bg-gradient-to-br from-ink2 via-ink to-black/70" aria-hidden="true"></div>
      <div
        className="absolute inset-0"
        style={{ clipPath: `inset(0 ${100 - value}% 0 0)` }}
      >
        <div className="h-full w-full bg-gradient-to-br from-ink2 via-ink to-black/70"></div>
      </div>
      <div className="absolute inset-x-0 bottom-4 flex justify-center">
        <input
          aria-label="Before and after comparison"
          type="range"
          min={0}
          max={100}
          value={value}
          onChange={(event) => setValue(Number(event.target.value))}
          className="w-3/4"
        />
      </div>
    </div>
  );
}
