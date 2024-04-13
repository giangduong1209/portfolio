import About from "@/components/About";
import Education from "@/components/Education";
import Experiences from "@/components/Experiences";
import GetInTouch from "@/components/GetInTouch";
import Intro from "@/components/Intro";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import NavBarHeader from "@/components/NavBarHeader";
import Projects from "@/components/Projects";
import convertEscapeSeq from "@/lib/convertEscapeSeq";
import { sendMail } from "@/lib/mail";
import { promises as fs } from "fs";
import { Facebook, Github, Instagram, Linkedin } from "lucide-react";
import Link from "next/link";

export default async function Home() {
  const file = await fs.readFile(process.cwd() + "/src/app/data.json", "utf8");
  const data = JSON.parse(file);
  const fileProject = await fs.readFile(
    process.cwd() + "/src/app/projects.json",
    "utf8"
  );
  const projectData = JSON.parse(fileProject);

  const sendValuesForm = async (values: {
    username: string;
    email: string;
    phone: string;
    message: string;
  }) => {
    "use server";
    await sendMail({
      to: "giangduong.dev@gmail.com",
      name: values.username,
      subject: "Get In Touch",
      body: `<h1>Client name: ${values.username}</h1>
            <h2>Phone: ${values.phone}</h2>
            <h2>Email:${values.email}</h2>
            <p>${convertEscapeSeq(values.message)}</p>`,
    });
  };

  return (
    <>
      <NavBarHeader />
      <main>
        <div className="w-full max-w-screen-2xl mx-auto px-2.5 ">
          <Intro />
        </div>
        <MaxWidthWrapper>
          <About />
          {/* <Education /> */}
          <Experiences experiencesData={data} />
          <Projects projects={projectData} />
          <GetInTouch valuesForm={sendValuesForm} />
        </MaxWidthWrapper>
        <div
          className="hidden md:flex justify-center items-center gap-5 -mt-10 md:fixed md:left-12 md:bottom-0 md:flex-col md:gap-5"
          data-aos="fade-up"
        >
          <div className="hidden w-1 h-36 bg-primary md:block"></div>
          <Link href="https://github.com/giangduong1209">
            <Github className="text-primary hover:scale-150 transition-all" />
          </Link>
          <Link href="https://www.linkedin.com/in/giang--duong/">
            <Linkedin className="text-primary hover:scale-150 transition-all" />
          </Link>
          <Link href="https://www.facebook.com/profile.php?id=100009359214056">
            <Facebook className="text-primary hover:scale-150 transition-all" />
          </Link>
          <Link href="https://www.instagram.com/giangduog129/">
            <Instagram className="text-primary hover:scale-150 transition-all" />
          </Link>
          <div className="hidden w-1 h-36 bg-primary md:block"></div>
        </div>

        <div
          className="hidden md:flex md:flex-col md:justify-center md:items-center md:fixed md:-right-12 md:bottom-0 md:gap-28"
          data-aos="fade-up"
        >
          <div className="hidden w-1 h-36 bg-primary md:block"></div>
          <a
            href="mailto:giangduong.dev@gmail.com"
            className="text-primary rotate-90 hover:scale-105 transition-all"
          >
            giangduong.dev@gmail.com
          </a>
          <div className="hidden w-1 h-36 bg-primary md:block"></div>
        </div>
        <div className="text-center mt-2 mb-5 md:hidden">
          <div className="flex justify-center items-center gap-3">
            <Link href="https://github.com/giangduong1209">
              <Github className="text-primary hover:scale-150 transition-all" />
            </Link>
            <Link href="https://www.linkedin.com/in/giang--duong/">
              <Linkedin className="text-primary hover:scale-150 transition-all" />
            </Link>
            <Link href="https://www.facebook.com/profile.php?id=100009359214056">
              <Facebook className="text-primary hover:scale-150 transition-all" />
            </Link>
            <Link href="https://www.instagram.com/giangduog129/">
              <Instagram className="text-primary hover:scale-150 transition-all" />
            </Link>
          </div>
          <p className="font-medium">Designed & Bulit by Giang Duong</p>
        </div>
      </main>
    </>
  );
}
