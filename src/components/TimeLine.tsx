import { SendHorizontal } from "lucide-react";
import React from "react";
import Image from "next/image";

const TimelineComponent = () => {
  return (
    <div className="mt-10 md:flex md:justify-between">
      <div>
        <div className="flex-col justify-center items-center">
          <div className="flex items-center gap-2">
            <Point />
            <p className="italic">September 2022 - February 2024</p>
          </div>
          <div className="flex gap-2">
            <Pillar />
            <div className="mt-2 max-w-[320px] md:max-w-[500px]">
              <h1 className="font-bold text-lg">METAPOLIS COMPANY LIMITED</h1>
              <p className="font-semibold text-md">Frontend Developer</p>
              <ul className="mt-3 text-md flex flex-col gap-2 md:gap-5">
                <li className="flex gap-2">
                  <SendHorizontal className="text-primary mt-0.5 w-5 h-5" />
                  <span className="flex-1">
                    Collaborated with back-end team to integrate APIs.
                  </span>
                </li>
                <li className="flex gap-2">
                  <SendHorizontal className="text-primary mt-0.5 w-5 h-5" />
                  <span className="flex-1">
                    Built reusable code to utilise for other projects and to
                    minimise costs.
                  </span>
                </li>
                <li className="flex gap-2">
                  <SendHorizontal className="text-primary mt-0.5 w-5 h-5" />
                  <span className="flex-1">
                    Collaborated with designers to implement concept and design
                    of website.
                  </span>
                </li>
                <li className="flex gap-2">
                  <SendHorizontal className="text-primary mt-0.5 w-5 h-5" />
                  <span className="flex-1">
                    Developed designs to meet varying browser and device
                    demands.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex-col justify-center items-center">
          <div className="flex items-center gap-2">
            <Point />
            <p className="italic">February 2022 - April 2022</p>
          </div>
          <div className="flex gap-2">
            <Pillar />
            <div className="mt-2 max-w-[320px] md:max-w-[500px]">
              <h1 className="font-bold text-lg">APPS CYCLONE TECHNOLOGY JSC</h1>
              <p className="font-semibold text-md">Frontend Developer</p>
              <ul className="mt-3 text-md flex flex-col gap-2 md:gap-5">
                <li className="flex gap-2">
                  <SendHorizontal className="text-primary mt-0.5 w-5 h-5" />
                  <span className="flex-1">
                    Designed and implemented website interface for mobile,
                    desktop and tablets.
                  </span>
                </li>
                <li className="flex gap-2">
                  <SendHorizontal className="text-primary mt-0.5 w-5 h-5" />
                  <span className="flex-1">
                    Handled special projects designated by senior developer.
                  </span>
                </li>
                <li className="flex gap-2">
                  <SendHorizontal className="text-primary mt-0.5 w-5 h-5" />
                  <span className="flex-1">
                    Designed layout and graphics to enhance aesthetics and
                    appearance of website.
                  </span>
                </li>
                <li className="flex gap-2">
                  <SendHorizontal className="text-primary mt-0.5 w-5 h-5" />
                  <span className="flex-1">
                    Researched new programming languages, frameworks and
                    technologies to stay abreast with latest trend.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Image
          src="https://images.unsplash.com/photo-1601342630314-8427c38bf5e6?q=80&w=1982&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="code work desk"
          width={500}
          height={800}
          className="hidden md:block rounded-lg shadow-xl"
        />
      </div>
    </div>
  );
};

export default TimelineComponent;

export const Point = () => {
  return <div className="w-3 h-3 rounded-full bg-primary" />;
};

export const Pillar = () => {
  return (
    <div className="w-3">
      <div className="w-0.5 h-96 mt-0.25 bg-slate-700 mx-auto"></div>
    </div>
  );
};
