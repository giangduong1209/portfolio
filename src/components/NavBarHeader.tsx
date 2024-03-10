"use client";
import React, { useState } from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import Link from "next/link";

import { Button } from "./ui/button";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import AnchorLink from "react-anchor-link-smooth-scroll";

const NavBarHeader = () => {
  const [toggleMenu, setToggleMenu] = useState<boolean>(false);

  return (
    <div className="sticky h-14 top-0 inset-x-0 z-30 w-full border-b border-border bg-background/75 backdrop-blur-0 transition-all">
      <div className="flex justify-between items-center h-14 border-b border-border px-3 md:px-20">
        <Link href="/" className="flex z-40 font-semibold">
          Giang Duong
        </Link>
        <div className="hidden items-center space-x-4 sm:flex">
          <Link
            href="#about"
            className="text-md hover:text-primary transition-colors"
          >
            About
          </Link>
          <Link
            href="#education"
            className="text-md hover:text-primary transition-colors"
          >
            Education
          </Link>
          <Link
            href="#experience"
            className="text-md hover:text-primary transition-colors"
          >
            Experience
          </Link>
          <Link
            href="#project"
            className="text-md hover:text-primary transition-colors"
          >
            Project
          </Link>
          <Link
            href="#getInTouch"
            className="text-md hover:text-primary transition-colors"
          >
            Get In Touch
          </Link>
        </div>
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
      </div>

      {/* <ModeToggle /> */}
      <div
        className={cn(
          "absolute h-screen w-full overflow-hidden z-30 sm:hidden",
          toggleMenu ? "bg-black/20 block" : "hidden"
        )}
      >
        <div
          className={cn(
            "absolute bg-white h-screen w-full max-w-80 right-0 flex flex-col justify-center items-center space-y-10 translate-x-full transition-all z-50 sm:hidden",
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
      </div>
    </div>
  );
};

export default NavBarHeader;
