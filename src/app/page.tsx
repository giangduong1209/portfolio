import About from "@/components/About";
import Education from "@/components/Education";
import Experiences from "@/components/Experiences";
import Intro from "@/components/Intro";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";

export default function Home() {
  return (
    <main>
      <div className="w-full max-w-screen-2xl mx-auto px-2.5">
        <Intro />
      </div>
      <MaxWidthWrapper>
        <About />
        <Education />
        <Experiences />
      </MaxWidthWrapper>
    </main>
  );
}
