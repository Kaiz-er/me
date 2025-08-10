import ProjectCardPill from "@/components/project-card-pill";

export default function ProjectCard() {
  return (
    <div className="rounded shadow-xs bg-gray-50 flex flex-col p-4">
      <h4 className="font-bold py-3">Learnin Thai</h4>
      <p className="font-thin text-neutral-500 text-sm">
        Web resource to help me learn the Thai language
      </p>
      <div>
        <div className="grid grid-cols-3 gap-1 py-3">
          <ProjectCardPill detail="React" />
          <ProjectCardPill detail="React" />
          <ProjectCardPill detail="React" />
          <ProjectCardPill detail="React" />
          <ProjectCardPill detail="React" />
        </div>
      </div>
    </div>
  );
}
