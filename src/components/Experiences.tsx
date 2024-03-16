import React from "react";

const Experiences = () => {
  const items = [
    {
      title: "May 1940",
      cardTitle: "Dunkirk",
      url: "http://www.history.com",
      cardSubtitle:
        "Men of the British Expeditionary Force (BEF) wade out to..",
      cardDetailedText:
        "Men of the British Expeditionary Force (BEF) wade out to..",
      media: {
        type: "IMAGE",
        source: {
          url: "http://someurl/image.jpg",
        },
      },
    },
  ];
  return (
    <div className="mt-20 sm:pt-60">
      <h1 className="text-6xl text-primary font-bold">Experiences</h1>
      <div></div>
    </div>
  );
};

export default Experiences;
