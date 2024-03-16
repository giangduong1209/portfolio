import About from "@/components/About";
import Education from "@/components/Education";
import Experiences from "@/components/Experiences";
import Intro from "@/components/Intro";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";

export default function Home() {
  return (
    <main>
      <MaxWidthWrapper>
        <Intro />
        <About />
        <Education />
        <Experiences />
      </MaxWidthWrapper>
    </main>
  );
}
