"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";

const NavBarHeader = () => {
  const [toggleMenu, setToggleMenu] = useState<boolean>(false);

  return (
    <div className="sticky h-24 top-0 inset-x-0 z-50 w-full border-b border-border bg-background transition-all">
      <div className="flex justify-between items-center h-24 border-b border-border px-3 md:px-20">
        <Link
          href="/"
          className="flex z-40 font-semibold"
          data-aos="fade-right"
        >
          <Image
            alt="Logo brand"
            src="/logo.png"
            width={200}
            height={100}
            className="object-cover"
          />
        </Link>
        <div
          className="hidden items-center space-x-4 sm:flex"
          data-aos="fade-left"
        >
          <Link
            href="#about"
            className="text-md hover:text-primary transition-colors"
          >
            About
          </Link>
          {/* <Link
            href="#education"
            className="text-md hover:text-primary transition-colors"
          >
            Education
          </Link> */}
          <Link
            href="#experience"
            className="text-md hover:text-primary transition-colors"
          >
            Experiences
          </Link>
          <Link
            href="#project"
            className="text-md hover:text-primary transition-colors"
          >
            Projects
          </Link>
          <Link href="#getintouch">
            <Button className="text-md transition-colors border-2 border-primary rounded-full py-2 px-10 bg-transparent text-primary-500 hover:bg-primary hover:text-white">
              Get In Touch
            </Button>
          </Link>
        </div>
        <Button
          variant="outline"
          size="icon"
          className="z-50 sm:hidden"
          onClick={() => {
            setToggleMenu((prev) => !prev);
          }}
          data-aos="fade-left"
        >
          <Menu />
        </Button>
      </div>

      {/* <ModeToggle /> */}
      <div
        className={cn(
          "fixed top-24 right-0 w-0 h-full overflow-x-hidden duration-500 z-10 bg-black/20 sm:hidden",
          toggleMenu ? "w-full" : "w-0"
        )}
        onClick={() => setToggleMenu(false)}
      >
        <div
          className={cn(
            "fixed top-0 right-0 bg-gradient-to-r bg-white w-0 h-full flex justify-center items-center flex-col gap-10 overflow-x-hidden duration-500 font-bold z-40",
            toggleMenu ? "w-60" : "w-0"
          )}
        >
          <Link
            href="#about"
            className="font-semibold hover:text-primary transition-colors"
          >
            About
          </Link>

          {/* <Link
            href="#education"
            className="font-semibold hover:text-primary transition-colors"
          >
            Education
          </Link> */}
          <Link
            href="#experience"
            className="font-semibold hover:text-primary transition-colors"
          >
            Experiences
          </Link>
          <Link
            href="#project"
            className="font-semibold hover:text-primary transition-colors"
          >
            Project
          </Link>
          <Link
            href="#getintouch"
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
