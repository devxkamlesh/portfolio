import type { Project } from "@/lib/portfolio-types";
import { SectionShell } from "@/components/portfolio/section-shell";

type ProjectsSectionProps = {
  projects: Project[];
};

function isAbsoluteUrl(value: string) {
  return /^https?:\/\//.test(value);
}

export function ProjectsSection({ projects }: ProjectsSectionProps) {
  return (
    <SectionShell id="projects" eyebrow="Work" title="Selected Projects">
      <div className="projects-grid">
        {projects.map((project, index) => (
          <article
            key={project.name}
            className="project-card reveal"
            style={{ animationDelay: `${40 + index * 45}ms` }}
          >
            <div className="project-head">
              <h3>{project.name}</h3>
              <p>{project.role}</p>
            </div>
            <p>
              <strong>Stack:</strong> {project.stack}
            </p>
            <p>
              <strong>Problem:</strong> {project.problem}
            </p>
            <p>
              <strong>Solution:</strong> {project.solution}
            </p>
            <div className="list-cluster">
              <h4>Outcomes</h4>
              <ul>
                {project.outcomes.map((outcome) => (
                  <li key={outcome}>{outcome}</li>
                ))}
              </ul>
            </div>
            <div className="list-cluster">
              <h4>Metrics</h4>
              <ul>
                {project.metrics.map((metric) => (
                  <li key={metric}>{metric}</li>
                ))}
              </ul>
            </div>
            <p className="project-link">
              {isAbsoluteUrl(project.link) ? (
                <a href={project.link} target="_blank" rel="noreferrer">
                  View Project
                </a>
              ) : (
                project.link
              )}
            </p>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}
