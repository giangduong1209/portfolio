import About from "@/components/About";
import Intro from "@/components/Intro";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";

export default function Home() {
  return (
    <main>
      <MaxWidthWrapper>
        <Intro />
        <About />
      </MaxWidthWrapper>
    </main>
  );
}
