"use client";
import React, { useState } from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import Link from "next/link";
import { ModeToggle } from "./ModeToggle";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";

const NavBarHeader = () => {
  const [toggleMenu, setToggleMenu] = useState<boolean>(false);

  return (
    <div className="sticky h-14 top-0 inset-x-0 z-30 w-full border-b border-border bg-background/75 backdrop-blur-0 transition-all">
      <MaxWidthWrapper>
        <div className="flex justify-between items-center h-14 border-b border-border">
          <div className="flex items-center gap-5">
            <Button
              variant="outline"
              size="icon"
              className="sm:hidden"
              onClick={() => {
                setToggleMenu((prev) => !prev);
              }}
            >
              <Menu />
            </Button>
            <Link href="/" className="flex z-40 font-semibold">
              Giang Duong
            </Link>
          </div>
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
        <div
          className={cn(
            "absolute h-screen w-full max-w-80 inset-x-0 flex flex-col justify-center items-center -translate-x-full space-y-20 transition-all sm:hidden",
            toggleMenu ? "translate-x-0" : ""
          )}
        >
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
      </MaxWidthWrapper>
    </div>
  );
};

export default NavBarHeader;
