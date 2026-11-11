import { PROJECTS } from "./constants";
import ProjectCard from "./ProjectCard";
import SectionTitle from "./SectionTitle";

export default function Projects() {
  return (
    <section className="py-12">
      <SectionTitle>Projects</SectionTitle>
      <div className="grid gap-5 sm:grid-cols-2">
        {PROJECTS.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </section>
  );
}
