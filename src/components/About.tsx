import { Check } from "lucide-react";
import React from "react";

const About = () => {
  return (
    <div className="mt-20 sm:pt-60">
      <h1 className="text-6xl text-primary font-bold">About</h1>
      <div className="flex flex-col justify-center items-center gap-10 mt-10 sm:flex-row">
        <div className="w-full sm:w-1/2">
          <p className="text-3xl sm:text-4xl text-slate-600 font-bold">
            DUONG TRUONG GIANG
          </p>
          <p className="text-3xl text-slate-400 my-5">Software Engineer</p>
          <p className="text-xl text-slate-500/80">
            I build pixel-perfect, engaging, and accessible digital experiences.
          </p>
        </div>
        <div className="w-full sm:w-1/2">
          <p>
            Hello! My name is Giang Duong and I enjoy creating things that live
            on the internet. My interest in web development started in 2022 when
            I decided to try editing custom Tumblr themes — turns out hacking
            together a custom reblog button taught me a lot about HTML & CSS!
          </p>
          <br />
          <p>
            Fast-forward to today, and I’ve had the privilege of working at an
            advertising agency, a start-up, a huge corporation, and a
            student-led design studio. My main focus these days is building
            accessible, inclusive products and digital experiences at
            Upstatement for a variety of clients.
          </p>
          <br />
          <p>
            I also recently launched a course that covers everything you need to
            build a web app with the Spotify API using Node & React.
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
