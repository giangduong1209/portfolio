"use client";
import { Check } from "lucide-react";
import React from "react";

const About = () => {
  return (
    <div className="pt-20 sm:pt-60" id="about">
      <h1 className="text-6xl text-primary font-bold" data-aos="fade-in">
        About
      </h1>
      <div className="flex flex-col justify-center items-center gap-10 mt-10 sm:flex-row">
        <div className="w-full sm:w-1/2" data-aos="fade-right">
          <p className="text-3xl sm:text-4xl font-bold">DUONG TRUONG GIANG</p>
          <p className="text-3xl text-green-400 my-5">Frontend Developer</p>
          <p className="text-xl text-slate-500/80">
            I build pixel-perfect, engaging, and accessible digital experiences.
          </p>
        </div>
        <div className="w-full sm:w-1/2" data-aos="fade-up">
          <p>
            Hello! My name is Giang Duong and I enjoy creating things that live
            on the internet. My interest in web development started in 2022 when
            I decided to try editing custom themes for project in my universitry
            — turns out hacking together a custom themes taught me a lot about
            <span className="text-primary font-bold"> HTML & CSS!</span>
          </p>
          <br />
          <p>
            Fast-forward to today. My main focus these days is building
            accessible and flexible, inclusive products and digital experiences
            for a variety of clients.
          </p>
          <br />
          <p>
            Currently, I am working as a Freelancer, providing services related
            to website design to deliver a high-quality user experience.{" "}
          </p>
          <br />
          <p>Here are a few technologies I’ve been working with recently:</p>
          <br />
          <div className="flex gap-20 items-center">
            <ul className="space-y-1">
              <li className="flex items-center gap-2">
                <div>
                  <Check className="text-primary" />
                </div>
                HTML, CSS
              </li>
              <li className="flex items-center gap-2">
                <div>
                  <Check className="text-primary" />
                </div>
                JavaScript (ES6+), TypeScript
              </li>
              <li className="flex items-center gap-2">
                <div>
                  <Check className="text-primary" />
                </div>
                React, NextJs
              </li>
              <li className="flex items-center gap-2">
                <div>
                  <Check className="text-primary" />
                </div>
                Jest, Vitest
              </li>
            </ul>
            <ul className="space-y-1">
              <li className="flex items-center gap-2">
                <div>
                  <Check className="text-primary" />
                </div>
                TailwindCSS, Bootstrap, Antd, Material UI
              </li>
              <li className="flex items-center gap-2">
                <div>
                  <Check className="text-primary" />
                </div>
                Redux
              </li>
              <li className="flex items-center gap-2">
                <div>
                  <Check className="text-primary" />
                </div>
                Restfull
              </li>
              <li className="flex items-center gap-2">
                <div>
                  <Check className="text-primary" />
                </div>
                GIT
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
