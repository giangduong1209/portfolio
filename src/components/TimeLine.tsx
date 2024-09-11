"use client";
import { SendHorizontal } from "lucide-react";
import React, { useEffect, useId, useState } from "react";
import { IExperiencesData } from "./Experiences";
import dayjs from "dayjs";

const TimelineComponent = ({ experiencesData }: IExperiencesData) => {
  const [progress, setProgress] = useState<number>(0);
  const [scrollY, setScrollY] = useState<number>(0);
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    // only execute all the code below in client side
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Call handler right away so state gets updated with initial window size
    handleResize();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    let progressInterval: NodeJS.Timeout;

    if (
      (windowSize.width > 445 && scrollY >= 1600) ||
      (windowSize.width < 445 && scrollY >= 2075)
    ) {
      progressInterval = setInterval(() => {
        if (progress <= 75) {
          setProgress((prevProgress) => prevProgress + 1);
        }
      });
    }
    return () => {
      clearInterval(progressInterval);
    };
  });

  return (
    <div className="md:flex md:justify-between">
      <div className="flex-1 mt-5">
        {experiencesData.map((val) => (
          <div
            key={val.id}
            className="flex flex-col w-full"
            data-aos="fade-in"
            data-aos-duration="3000"
          >
            <div className="flex items-center gap-2">
              <Point />
              <p className="italic">
                {dayjs(+val.startDate).format("MMMM YYYY")} -{" "}
                {val.endDate === ""
                  ? "Present"
                  : dayjs(+val.endDate).format("MMMM YYYY")}
              </p>
            </div>
            <div className="flex gap-2">
              <Pillar />
              <div className="mt-5">
                <h1 className="font-bold text-lg">{val.companyName}</h1>
                <p className="font-semibold text-md">{val.position}</p>
                <ul className="mt-3 text-md flex flex-col gap-2 md:gap-5">
                  {val.responsibility.map((res, idx) => (
                    <li key={idx} className="flex gap-2">
                      <SendHorizontal className="text-primary mt-0.5 w-5 h-5" />
                      <span className="flex-1">{res}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* <div data-aos="fade-up-left">
        <Image
          src="https://images.unsplash.com/photo-1601342630314-8427c38bf5e6?q=80&w=1982&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="code work desk"
          width={500}
          height={800}
          className="hidden md:block rounded-lg shadow-xl"
        />
      </div> */}
      <div className="flex-1 flex justify-center items-center w-full">
        <div className="relative size-60 md:size-80">
          <svg
            className="rotate-[135deg] size-full"
            viewBox="0 0 36 36"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="18"
              cy="18"
              r="16"
              fill="none"
              className="stroke-current text-green-300 dark:text-neutral-700"
              strokeWidth="1"
              strokeDasharray="75 100"
            ></circle>

            <circle
              cx="18"
              cy="18"
              r="16"
              fill="none"
              className="stroke-current text-green-300 dark:text-green-500"
              strokeWidth="2"
              strokeDasharray={progress + " 100"}
            ></circle>
          </svg>

          <div className="absolute top-1/2 start-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
            <span className="text-6xl font-bold text-green-300 dark:text-green-500">
              1.5+
            </span>
          </div>
          <div className="text-2xl uppercase text-center font-bold">
            Years of experience
          </div>
        </div>
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
      <div className="w-0.5 h-[500px] md:h-[450px] mt-0.25 bg-slate-700 mx-auto" />
    </div>
  );
};
