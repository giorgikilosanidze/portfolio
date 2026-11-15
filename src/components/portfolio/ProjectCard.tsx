import type { Project } from "./types";

type Props = { project: Project };

export default function ProjectCard({ project }: Props) {
  return (
    <article className="flex flex-col rounded-xl border border-line bg-card p-6 transition hover:border-accent">
      <div className="flex flex-wrap items-center gap-2">
        <h3 className="text-lg font-semibold">{project.name}</h3>
        {project.inProgress && (
          <span className="rounded-full border border-amber-500/40 bg-amber-500/10 px-2.5 py-0.5 text-xs font-medium text-amber-700 dark:text-amber-400">
            Work in progress
          </span>
        )}
      </div>
      <p className="mt-2 flex-1 leading-relaxed text-muted">{project.description}</p>

      <ul className="mt-4 flex flex-wrap gap-2">
        {project.stack.map((tech) => (
          <li key={tech} className="rounded-md bg-chip px-2 py-1 text-xs font-medium text-muted">
            {tech}
          </li>
        ))}
      </ul>

      {(project.liveUrl || project.codeUrl) && (
        <div className="mt-5 flex gap-4 text-sm font-semibold">
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noreferrer" className="text-accent hover:underline">
              Live site ↗
            </a>
          )}
          {project.codeUrl && (
            <a href={project.codeUrl} target="_blank" rel="noreferrer" className="hover:text-accent">
              Code ↗
            </a>
          )}
        </div>
      )}
    </article>
  );
}
