import { SectionWrapper } from "@/components/layout/section-wrapper";
import { MotionSafeReveal } from "@/components/motion/motion-safe-reveal";
import { ProjectCard } from "@/components/portfolio/project-card";
import type { Project } from "@/lib/types";

type ProjectsSectionProps = {
  projects: Project[];
};

export function ProjectsSection({ projects }: ProjectsSectionProps) {
  return (
    <SectionWrapper
      id="projects"
      eyebrow="Projects"
      title="Production-Grade Builds"
      description="Each project is presented with problem context, architecture decisions, and measurable outcomes."
    >
      {projects.length === 0 ? (
        <p className="surface-soft p-5 text-sm text-muted">
          Projects will appear here once data is available.
        </p>
      ) : (
        <div className="grid gap-5">
          {projects.map((project, index) => (
            <MotionSafeReveal key={project.name} delay={index * 0.06}>
              <ProjectCard project={project} />
            </MotionSafeReveal>
          ))}
        </div>
      )}
    </SectionWrapper>
  );
}
