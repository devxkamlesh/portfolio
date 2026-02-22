import type { Project } from "@/lib/types";
import { isExternalLink } from "@/lib/utils";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="surface-card p-5 shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-glass">
      <header>
        <h3 className="text-xl font-display font-semibold">{project.name}</h3>
        <p className="mt-1 text-sm font-medium text-accentStrong">{project.role}</p>
      </header>

      <p className="mt-4 text-sm text-muted">
        <span className="font-semibold text-ink">Stack:</span> {project.stack}
      </p>
      <p className="mt-3 text-sm text-muted">
        <span className="font-semibold text-ink">Problem:</span> {project.problem}
      </p>
      <p className="mt-3 text-sm text-muted">
        <span className="font-semibold text-ink">Solution:</span> {project.solution}
      </p>

      <div className="mt-4">
        <h4 className="text-sm font-semibold text-ink">Outcomes</h4>
        <ul className="mt-2 list-disc space-y-1.5 pl-5 text-sm text-muted">
          {project.outcomes.map((outcome) => (
            <li key={outcome}>{outcome}</li>
          ))}
        </ul>
      </div>

      <div className="mt-4">
        <h4 className="text-sm font-semibold text-ink">Metrics (project-reported)</h4>
        <ul className="mt-2 list-disc space-y-1.5 pl-5 text-sm text-muted">
          {project.metrics.map((metric) => (
            <li key={metric}>{metric}</li>
          ))}
        </ul>
      </div>

      <p className="mt-4 text-sm font-semibold">
        {isExternalLink(project.link) ? (
          <a href={project.link} target="_blank" rel="noreferrer" className="text-accent hover:text-accentStrong">
            View project
          </a>
        ) : (
          project.link
        )}
      </p>
    </article>
  );
}
