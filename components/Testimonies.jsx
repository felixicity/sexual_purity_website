import React from "react";

const Testimonies = ({ testimonies }) => {
  const card = testimonies.map((testimony) => {
    return (
      <div
        key={testimony.creator}
        className="min-w-[250px] text-sm shadow-md m-4 p-6 rounded-xl"
      >
        <blockquote className="testimony">{testimony.testimony}</blockquote>
        <p className="font-bold mt-8">{testimony.creator}</p>
      </div>
    );
  });
  return (
    <div className="container">
      <h2 className="font-bold text-2xl text-center">Testimonies</h2>
      <div className="flex">
        {/* <div className="m-w-[250px] lg:hidden"> </div> */}
        <div className="testimonies flex gap-5 overflow-auto">{card}</div>
      </div>
    </div>
  );
};

export default Testimonies;
