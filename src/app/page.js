import Intro from "@/components/intro";
import Projects from "@/components/projects";
import Header from "@/components/header";

export default function Home() {
  return (
    <div className="mx-auto max-w-3xl">
      <Header />
      <Intro />
      <Projects />
      <Projects />
      <Projects />
      <Projects />
      <Projects />
    </div>
  );
}
