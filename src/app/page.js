import Intro from "@/components/intro";
import Projects from "@/components/projects";
import Header from "@/components/header";
import Experience from "@/components/experience";

export default function Home() {
  return (
    <div className="mx-auto max-w-3xl">
      <Header />
      <Intro />
      <div className="mx-3 sm:mx-0">
        <Experience />
        <Projects />
      </div>
    </div>
  );
}
