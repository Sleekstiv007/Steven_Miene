import React from "react";
import { HiArrowRight } from "react-icons/hi";

const Hero = () => {
  return (
    <div name="Hero" className="bg-[#0a192f] w-full h-screen px-5">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto  px-0 flex flex-col justify-center h-full">
        <p className="text-pink-600">Hi, My Name is </p>
        <h1
          className=" text-4xl sm:text-7xl font-bold text-
Steven Miene[#ccd6f6]"
        >
          Steven Miene
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
          I am a Software Engineer
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px] ">
          I am a front-end developer skilled in Javascript, Object-Oriented
          Programming, React.js and Redux Library, Tailwind Css. I am very
          passionate about crafting user-friendly interfaces and collaborating
          with teams to deliver engaging web experiences."
        </p>
        <div>
          <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600">
            View Work
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowRight className="ml-3" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
