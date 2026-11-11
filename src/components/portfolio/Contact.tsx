import { PROFILE } from "./constants";
import SectionTitle from "./SectionTitle";

export default function Contact() {
  return (
    <footer className="border-t border-line py-12">
      <SectionTitle>Contact</SectionTitle>
      <p className="text-lg text-muted">
        Open to new opportunities. The best way to reach me is by email.
      </p>
      <a
        href={`mailto:${PROFILE.email}`}
        className="mt-3 inline-block text-xl font-semibold text-accent hover:underline"
      >
        {PROFILE.email}
      </a>
      <div className="mt-6 flex gap-6 text-sm font-semibold">
        <a href={PROFILE.github} target="_blank" rel="noreferrer" className="hover:text-accent">
          GitHub ↗
        </a>
        <a href={PROFILE.linkedin} target="_blank" rel="noreferrer" className="hover:text-accent">
          LinkedIn ↗
        </a>
      </div>
    </footer>
  );
}
