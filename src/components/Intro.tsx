import React from "react";
import Image from "next/image";
import { Button } from "./ui/button";

const Intro = () => {
  return (
    <div className="flex pt-10 justify-between items-center sm:pt-60 sm:flex-row">
      <div className="w-full max-w-[820px] text-xl">
        <p className="text-md">Hi, My name is</p>
        <br />
        <h1 className="text-7xl bg-gradient-to-r inline-block font-bold from-[#833ab4] via-[#fd1d1d] to-[#fcb045] text-transparent bg-clip-text leading-tight">
          Giang Duong.
        </h1>
        <h2 className="mt-2 text-5xl font-semibold text-primary">
          I build things for web.
        </h2>
        <br />
        <p>
          I’m a software engineer specializing in building (and occasionally
          designing) exceptional user experiences. Currently, I’m focused on
          building highly accessible app to meet user requirements.
        </p>
        <Button className="mt-10">Learn more!</Button>
      </div>
      <div className="hidden relative w-80 h-80 sm:block after:absolute after:top-0 after:w-full after:h-full after:inset-x-0 after:rounded-full after:bg-gradient-to-r after:from-pink-500 after:via-red-500 after:to-yellow-500 after:animate-spin">
        <Image
          className="w-[310px] h-[310px] relative z-20 mx-auto my-auto mt-[5px] rounded-full object-cover"
          width={500}
          height={500}
          alt="avatar"
          src="/IMG_7022.jpg"
        />
      </div>
    </div>
  );
};

export default Intro;
