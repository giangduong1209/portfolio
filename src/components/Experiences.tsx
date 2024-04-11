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
    <div className="mt-20 sm:pt-60">
      <h1 className="text-6xl text-primary font-bold">Experiences</h1>
      <TimelineComponent experiencesData={experiencesData} />
    </div>
  );
};

export default Experiences;
