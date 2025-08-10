import ExperienceSection from "@/components/experience-section";

export default function Experience() {
  return (
    <div className="flex-col justify-center mt-8">
      <h2 className="underline font-bold w-full pb-3">Experience</h2>
      <ExperienceSection
        stack={[
          "NextJS",
          "Javascript",
          "TailwindCSS",
          "React Testing Library",
          "Jest",
          "Postgres",
          "AWS",
          "Gitlab CI",
          "Terraform",
        ]}
        title="Software Engineer at Thoughtworks"
        period="Feb 2023 - Present"
      />
      <ExperienceSection
        stack={[".NET Core", "C#", "Postgres", "xUnit", "NSubstitute"]}
        title="Software Engineer Intern at Illumina"
        period="Jan 2022 - June 2022"
      />
      <ExperienceSection
        stack={["Angular", "Typescript"]}
        title="Software Engineer Intern at Flex Solver"
        period="May 2021 - Nov 2021"
      />
      <ExperienceSection
        stack={["Android", "Java"]}
        title="Software Engineer Intern at National Council of Social Services"
        period="Mar 2016 - Sep 2016"
      />
    </div>
  );
}
