import React from "react";
import Link from "next/link";
import Image from "next/image";

const Blog = () => {
  return (
    <div className="container">
      <h2 className="text-center font-bold text-2xl mt-32 mb-12">Blog</h2>
      <div className="blog-container">
        <Image
          src="/20230913_183236-01.jpeg"
          alt="sexual-purity-flier"
          width={300}
          height={300}
        ></Image>
        <div className="self-center p-4 lg:my-8 lg:p-8">
          <h3 className="text-center font-bold underline">Announcement</h3>
          <b className="ml-8 mt-4">
            Let's talk About Sexual Purity is Here Again !!!
          </b>
          <p className="mb-2">
            It's gotten bigger and better. You need to know more about purity.
            You need to expand your horizons to see possibilties in how you can
            live your life. There's a lot to unpack here. Register Now and Grab
            a seat, It's Free.
          </p>
          <Link
            href="/register"
            className="blog-button py-2 px-4 bg-black text-white rounded-xl ml-12 hover:bg-white hover:text-black hover:border-black hover:border-2 "
          >
            Register Here
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Blog;
