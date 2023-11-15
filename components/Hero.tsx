import React from "react";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";

const Hero = () => {
  return (
    <>
      <main className="container mt-16 font-kalam">
        <Link
          href="/"
          className="flex items-center border-gray-600 text-gray-800 active:bg-gray-100 hover:bg-gray-100 lg:text-lg border-2 px-2 py-1 w-3/4 md:w-1/3 lg:w-1/3 rounded-lg transition"
        >
          Let's talk about purity{" "}
          <FaArrowRight className="ml-2 animate-pulse text-lipstick" />
        </Link>
        <div className="head_text text-center">
          <h1 className="font-bold mt-8 bg-yellow-500  max-w-[450px] rounded-[35px] mb-4 lg:mb-6 mx-auto">
            Live In Purity,
          </h1>
          <p className="paragraph2 bg-pink-600 text-white max-w-[450px] mb-4 lg:mb-6 rounded-[35px]">
            Live In Honour,
          </p>
          <p className="paragraph3 bg-greenilike text-teal-200 rounded-[35px] max-w-[600px] mb-6 mx-auto">
            Live For Greatness
          </p>
        </div>
      </main>
    </>
  );
};

export default Hero;
