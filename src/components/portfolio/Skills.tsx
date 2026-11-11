import { SKILLS } from "./constants";
import SectionTitle from "./SectionTitle";

export default function Skills() {
  return (
    <section className="py-12">
      <SectionTitle>Skills</SectionTitle>
      <ul className="flex flex-wrap gap-2">
        {SKILLS.map((skill) => (
          <li key={skill} className="rounded-lg border border-line px-3 py-1.5 text-sm font-medium">
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
}
