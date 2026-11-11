import { EDUCATION, EXPERIENCE } from "./constants";
import SectionTitle from "./SectionTitle";

export default function Experience() {
  return (
    <section className="py-12">
      <SectionTitle>Experience</SectionTitle>

      <div className="space-y-10">
        {EXPERIENCE.map((job) => (
          <article key={job.company}>
            <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-baseline">
              <h3 className="text-lg font-semibold">
                {job.role} ·{" "}
                <a href={job.url} target="_blank" rel="noreferrer" className="text-accent hover:underline">
                  {job.company}
                </a>
              </h3>
              <span className="shrink-0 text-sm text-muted">{job.period}</span>
            </div>
            <ul className="mt-3 list-disc space-y-1.5 pl-5 text-muted marker:text-accent">
              {job.highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}

        <article>
          <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-baseline">
            <h3 className="text-lg font-semibold">
              {EDUCATION.title} · <span className="text-accent">{EDUCATION.school}</span>
            </h3>
            <span className="shrink-0 text-sm text-muted">{EDUCATION.year}</span>
          </div>
          <p className="mt-2 text-muted">{EDUCATION.details}</p>
        </article>
      </div>
    </section>
  );
}
