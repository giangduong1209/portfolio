"use client";
import AOS from "aos";
import React, { useEffect } from "react";
import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";

const Intro = () => {
  useEffect(() => {
    AOS.init({
      delay: 400,
      duration: 800,
    });
  });
  return (
    <div className="flex pt-10 justify-between items-center">
      <div data-aos="zoom-in-up">
        <Image
          width={500}
          height={500}
          alt="avatar"
          src="/avatar.png"
          className="hidden md:block bg-none bg-transparent"
        />
      </div>
      <div className="w-full max-w-[820px] text-xl" data-aos="zoom-in-left">
        <p className="text-md">Hi, My name is</p>
        <br />
        <h1 className="text-7xl bg-gradient-to-r inline-block font-bold from-[#00d4ff] via-[#00ff9e] to-[#fcb045] text-transparent bg-clip-text leading-tight">
          Giang Duong.
        </h1>
        <h2 className="mt-2 text-5xl font-semibold text-primary">
          I build things for web.
        </h2>
        <br />
        <p>
          I’m a Frontend software engineer specializing in building (and
          occasionally designing) exceptional user experiences. Currently, I’m
          focused on building highly accessible app to meet user requirements.
        </p>
        <Link href="#about">
          <Button className="mt-10">Learn more!</Button>
        </Link>
      </div>
      {/* className="hidden relative w-80 h-80 sm:block after:absolute after:top-0 after:w-full after:h-full after:inset-x-0 after:rounded-full after:bg-gradient-to-r after:from-pink-500 after:via-red-500 after:to-yellow-500 after:animate-spin */}
    </div>
  );
};

export default Intro;
