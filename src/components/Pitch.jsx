import React from "react";
import { AiFillYoutube, AiFillPlayCircle } from "react-icons/ai";


const Pitch = () => {
  return (
    <div className="pt-44 flex justify-center w-full bg-[#0a192f] h-screen text-white">
      <div class="w-full h-[50%] default_cursor_cs px-44">
        <div class="shadow-lg shadow-[#040c16] w-full h-[100%] group container rounded-md flex justify-center text-center items-center content-div default_cursor_cs">
          <div className="relative">
            <AiFillPlayCircle
              className="flex justify-center text-blue-700"
              size={55}
            />
          </div>
          <div class="absolute opacity-0 pt-5 group-hover:opacity-100 ">
            <span class="text-2xl font bold text-white tracking-wider ">
              PITCH - <span className="text-sm">Project Mavericks</span>
            </span>
            <div class="pt-20 text-center default_cursor_cs">
              <a href="https://youtu.be/c2XNeki67Vs" target="_blank">
                <button class="text-center rounded-lg px-4 py-2 m-2 bg-white text-gray-700 font-bold text-lg">
                  Watch
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pitch;
