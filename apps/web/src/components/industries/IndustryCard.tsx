import Link from "next/link";
import { Industry } from "@/data/industries";

export default function IndustryCard({ industry }: { industry: Industry }) {
  return (
    <Link href={`/industries/${industry.slug}`} className="group block" data-reveal>
      <div className="card-hover rounded-[28px] border border-ink/10 bg-white p-6">
        <div className="h-44 rounded-2xl bg-gradient-to-br from-ink2 via-ink to-black/70"></div>
        <p className="mt-4 text-xs uppercase tracking-[0.3em] text-ink/50">{industry.title}</p>
        <h3 className="mt-2 text-2xl font-display text-ink">{industry.title}</h3>
        <p className="mt-2 text-sm text-ink/70">{industry.description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {industry.focus.map((item) => (
            <span key={item} className="pill border border-ink/10 text-ink/60">
              {item}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
