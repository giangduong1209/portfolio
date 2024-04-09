import React from "react";

const TimelineComponent = () => {
  return (
    <div className="mt-10">
      <div className="flex-col justify-center items-center">
        <Point />
        <Pillar />
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
      <div className="w-0.5 h-56 mt-0.25 bg-slate-700 mx-auto"></div>
    </div>
  );
};
