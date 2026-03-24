import { Project } from "@/data/projects";
import ProjectCard from "@/components/projects/ProjectCard";

type RelatedProjectsProps = {
  projects: Project[];
};

export default function RelatedProjects({ projects }: RelatedProjectsProps) {
  if (projects.length === 0) return null;

  return (
    <div className="mt-16" data-reveal>
      <h2 className="text-2xl font-display text-ink">Related Projects</h2>
      <div className="mt-6 grid gap-6 md:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </div>
  );
}
