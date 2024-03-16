import Image from "next/image";
import React from "react";

const Education = () => {
  return (
    <div className="mt-20 sm:pt-60">
      <h1 className="text-6xl text-primary font-bold">Education</h1>
      <div className="flex flex-col justify-between items-center gap-10 mt-10 sm:flex-row">
        <div>
          <Image
            src="/tonducthang.jpg"
            alt="TON DUC THANG UNIVERSITY"
            width={800}
            height={800}
            className="rounded-2xl shadow-lg shadow-slate-400"
          />
        </div>
        <div className="sm:text-right space-y-5">
          <h1 className="text-2xl font-bold text-rose-600 uppercase sm:text-3xl">
            TON DUC THANG UNIVERSITY
          </h1>
          <h2 className="text-slate-600 font-semibold text-md sm:text-2xl">
            THE DEGREE OF BACHELOR OF SCIENCE in Computer Networks and Data
            Communications{" "}
          </h2>
          <p className="text-xl font-thin">
            Level:{" "}
            <span className="font-bold uppercase text-fuchsia-400">Good</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Education;
