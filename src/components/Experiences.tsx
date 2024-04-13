import React from "react";
import TimelineComponent from "./TimeLine";

export interface IExperiencesData {
  experiencesData: {
    id: string;
    companyName: string;
    startDate: string;
    endDate: string;
    position: string;
    responsibility: string[];
  }[];
}

const Experiences = ({ experiencesData }: IExperiencesData) => {
  return (
    <div className="pt-20 sm:pt-60" id="experience">
      <h1 className="text-6xl text-primary font-bold" data-aos="fade-right">
        Experiences
      </h1>
      <TimelineComponent experiencesData={experiencesData} />
    </div>
  );
};

export default Experiences;
