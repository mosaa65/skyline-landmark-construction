"use client";

import { useEffect, useMemo, useState } from "react";

type AnimatedCounterProps = {
  value: number;
  duration?: number;
  suffix?: string;
};

export function AnimatedCounter({ value, duration = 1800, suffix = "" }: AnimatedCounterProps) {
  const [current, setCurrent] = useState(0);
  const start = useMemo(() => performance.now(), []);

  useEffect(() => {
    let raf = 0;

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCurrent(Math.floor(eased * value));

      if (progress < 1) {
        raf = requestAnimationFrame(tick);
      }
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [duration, start, value]);

  return (
    <span className="tabular-nums">
      {current.toLocaleString()}
      {suffix}
    </span>
  );
}
