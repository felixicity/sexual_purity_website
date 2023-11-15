import React from "react";

const Testimonies = ({ testimonies }) => {
  /*Each card */
  const card = testimonies.map((testimony) => {
    return (
      <div
        key={testimony.creator}
        className="min-w-[250px] text-[0.92rem] shadow-md m-4 p-6 rounded-xl"
      >
        <blockquote className="testimony">{testimony.testimony}</blockquote>
        <p className="font-bold mt-8">{testimony.creator}</p>
      </div>
    );
  });
  return (
    <div className="container">
      <h2 className="font-bold text-2xl text-center font-dancing">
        Testimonies
      </h2>
      {/* The cards container */}
      <div className="flex">
        <div className="testimonies flex gap-5 overflow-auto">{card}</div>
      </div>
    </div>
  );
};

export default Testimonies;
