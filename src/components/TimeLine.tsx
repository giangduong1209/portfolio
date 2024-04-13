import { SendHorizontal } from "lucide-react";
import React, { useId } from "react";
import Image from "next/image";
import { IExperiencesData } from "./Experiences";
import dayjs from "dayjs";

const TimelineComponent = ({ experiencesData }: IExperiencesData) => {
  return (
    <div className="mt-10 md:flex md:justify-between">
      <div>
        {experiencesData.map((val) => (
          <div
            key={val.id}
            className="flex-col justify-center items-center"
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
              <div className="mt-2 max-w-[320px] md:max-w-[500px]">
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
      <div data-aos="fade-up-left">
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
      <div className="w-0.5 h-96 mt-0.25 bg-slate-700 mx-auto" />
    </div>
  );
};
