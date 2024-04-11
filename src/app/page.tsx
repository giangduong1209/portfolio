import About from "@/components/About";
import Education from "@/components/Education";
import Experiences from "@/components/Experiences";
import Intro from "@/components/Intro";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Projects from "@/components/Projects";
import { promises as fs } from "fs";

export default async function Home() {
  const file = await fs.readFile(process.cwd() + "/src/app/data.json", "utf8");
  const data = JSON.parse(file);
  const fileProject = await fs.readFile(
    process.cwd() + "/src/app/projects.json",
    "utf8"
  );
  const projectData = JSON.parse(fileProject);

  return (
    <main>
      <div className="w-full max-w-screen-2xl mx-auto px-2.5 ">
        <Intro />
      </div>
      <MaxWidthWrapper>
        <About />
        <Education />
        <Experiences experiencesData={data} />
        <Projects projects={projectData} />
      </MaxWidthWrapper>
    </main>
  );
}
