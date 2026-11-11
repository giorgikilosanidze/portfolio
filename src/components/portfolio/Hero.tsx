import { PROFILE } from "./constants";

export default function Hero() {
  return (
    <header className="pt-20 pb-16 sm:pt-28">
      <p className="text-sm text-muted">{PROFILE.location}</p>
      <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">{PROFILE.name}</h1>
      <p className="mt-2 text-xl font-medium text-accent">{PROFILE.role}</p>
      <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">{PROFILE.summary}</p>

      <div className="mt-8 flex flex-wrap gap-3">
        <a
          href={`mailto:${PROFILE.email}`}
          className="rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-white transition hover:opacity-90"
        >
          Get in touch
        </a>
        <a
          href={PROFILE.cv}
          download
          className="rounded-lg border border-line px-5 py-2.5 text-sm font-semibold transition hover:border-accent hover:text-accent"
        >
          Download CV
        </a>
      </div>
    </header>
  );
}
