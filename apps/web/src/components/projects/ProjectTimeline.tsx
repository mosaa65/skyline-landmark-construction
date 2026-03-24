import { Project } from "@/data/projects";

type ProjectTimelineProps = {
  milestones: Project["milestones"];
};

export default function ProjectTimeline({ milestones }: ProjectTimelineProps) {
  return (
    <div className="space-y-6" data-reveal>
      {milestones.map((milestone, index) => (
        <div key={`${milestone.title}-${index}`} className="flex gap-6">
          <div className="flex flex-col items-center">
            <span className="h-3 w-3 rounded-full bg-gold"></span>
            {index < milestones.length - 1 ? (
              <span className="mt-2 h-full w-[1px] bg-ink/10"></span>
            ) : null}
          </div>
          <div className="rounded-3xl border border-ink/10 bg-white p-6 shadow-card">
            <p className="text-xs uppercase tracking-[0.3em] text-ink/50">{milestone.date}</p>
            <h3 className="mt-2 text-lg font-semibold text-ink">{milestone.title}</h3>
            <p className="mt-2 text-sm text-ink/70">{milestone.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
