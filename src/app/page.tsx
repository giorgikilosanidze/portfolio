import Contact from "@/components/portfolio/Contact";
import Experience from "@/components/portfolio/Experience";
import Hero from "@/components/portfolio/Hero";
import Projects from "@/components/portfolio/Projects";
import Skills from "@/components/portfolio/Skills";

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-3xl px-5 sm:px-8">
      <Hero />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
    </main>
  );
}
