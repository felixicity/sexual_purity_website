"use client";

import { useState, useEffect } from "react";
import { BiSolidQuoteRight, BiSolidQuoteLeft } from "react-icons/bi";
// import { setTimeout } from "timers/promises"

const Quotes = ({ quotes }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? quotes.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === quotes.length - 1 ? 0 : prevIndex + 1
    );
  };

  // useEffect(() => {
  //   setTimeout(() => {
  //     setCurrentIndex((prevIndex) =>
  //       prevIndex === quotes.length - 1 ? 0 : prevIndex + 1
  //     );
  //   }, 8000);
  // }, [currentIndex]);

  return (
    <div className="app">
      <h2 className="text-center font-bold text-2xl mb-8">Quotes</h2>
      <div className="card-list lg:gap-5">
        <button onClick={handlePrev} className="prev-button">
          <span className="transition hover:text-2xl hover:font-bold">
            &lt;
          </span>
        </button>
        <div className="card-container max-w-lg ">
          {quotes.map((el, index) => {
            return (
              <div
                key={index}
                className={`card lg:container ${
                  index === currentIndex ? "active" : ""
                }`}
              >
                <BiSolidQuoteLeft className="mb-4" />
                <p className="text-gray-700 italic text-xl lg:text-3xl leading-15">
                  {el.quote}
                </p>
                <BiSolidQuoteRight className="mt-4" />
                <p className="font-bold">{el.speaker}</p>
              </div>
            );
          })}
        </div>
        <button onClick={handleNext} className="next-button">
          <span className="transition hover:text-2xl hover:font-bold">
            &gt;
          </span>
        </button>
        {/* <div className="flex justify-center items-center gap-32"></div> */}
      </div>
    </div>
  );
};

export default Quotes;
