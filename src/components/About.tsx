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
          <p className="text-3xl sm:text-4xl text-slate-600 font-bold">
            DUONG TRUONG GIANG
          </p>
          <p className="text-3xl text-pink-500 my-5">Software Engineer</p>
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
            Fast-forward to today, and I’ve had the privilege of working at an
            advertising agency, a start-up, and a huge corporation. My main
            focus these days is building accessible and flexible, inclusive
            products and digital experiences for a variety of clients.
          </p>
          <br />
          <p>
            I also recently studied a AI field that covers everything you need
            to build a web app with the Spotify API using{" "}
            <span className="text-primary font-bold">Node & React </span>
            along with <span className="text-primary font-bold">ChatGPT </span>
            support tool and more.
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
                HTML/CSS
              </li>
              <li className="flex items-center gap-2">
                <div>
                  <Check className="text-primary" />
                </div>
                JavaScript (ES6+)
              </li>
              <li className="flex items-center gap-2">
                <div>
                  <Check className="text-primary" />
                </div>
                React
              </li>
              <li className="flex items-center gap-2">
                <div>
                  <Check className="text-primary" />
                </div>
                NextJs
              </li>
            </ul>
            <ul className="space-y-1">
              <li className="flex items-center gap-2">
                <div>
                  <Check className="text-primary" />
                </div>
                TailwindsCSS
              </li>
              <li className="flex items-center gap-2">
                <div>
                  <Check className="text-primary" />
                </div>
                Bootstrap 5
              </li>
              <li className="flex items-center gap-2">
                <div>
                  <Check className="text-primary" />
                </div>
                NodeJs
              </li>
              <li className="flex items-center gap-2">
                <div>
                  <Check className="text-primary" />
                </div>
                MongoDB
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
