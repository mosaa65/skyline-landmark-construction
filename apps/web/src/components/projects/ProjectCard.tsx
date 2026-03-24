import Link from "next/link";
import { Project } from "@/data/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link href={`/projects/${project.slug}`} className="group block" data-reveal>
      <div className="card-hover rounded-[28px] border border-ink/10 bg-white p-6">
        <div className="relative h-52 overflow-hidden rounded-2xl bg-gradient-to-br from-ink2 via-ink to-black/70">
          <div className="absolute inset-0 grid-overlay opacity-20"></div>
        </div>
        <div className="mt-4 flex items-center justify-between text-xs uppercase tracking-[0.3em] text-ink/50">
          <span>{project.type}</span>
          <span>{project.year}</span>
        </div>
        <h3 className="mt-3 text-2xl font-display text-ink">{project.title}</h3>
        <p className="mt-2 text-sm text-ink/70">{project.location}</p>
      </div>
    </Link>
  );
}
