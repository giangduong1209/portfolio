import React from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import Link from "next/link";
import { ModeToggle } from "./ModeToggle";

const NavBarHeader = () => {
  return (
    <div className="sticky h-14 top-0 inset-x-0 z-30 w-full border-b border-border bg-background/75 backdrop-blur-0 transition-all">
      <MaxWidthWrapper>
        <div className="flex justify-between items-center h-14 border-b border-border">
          <Link href="/" className="flex z-40 font-semibold">
            Giang Duong
          </Link>
          <div className="hidden items-center space-x-4 sm:flex">
            <Link
              href="#about"
              className="font-semibold hover:text-primary transition-colors"
            >
              About
            </Link>
            <Link
              href="#skill"
              className="font-semibold hover:text-primary transition-colors"
            >
              Skill
            </Link>
            <Link
              href="#education"
              className="font-semibold hover:text-primary transition-colors"
            >
              Education
            </Link>
            <Link
              href="#experience"
              className="font-semibold hover:text-primary transition-colors"
            >
              Experience
            </Link>
            <Link
              href="#project"
              className="font-semibold hover:text-primary transition-colors"
            >
              Project
            </Link>
            <Link
              href="#getInTouch"
              className="font-semibold hover:text-primary transition-colors"
            >
              Get In Touch
            </Link>
          </div>
          <ModeToggle />
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default NavBarHeader;
