import React from "react";
import { AiFillYoutube, AiFillFilePdf } from "react-icons/ai";

const Work = () => {
  return (
    <div>
      <div
        name="work"
        class="w-full md:h-screen pt-20 pb-10 text-gray-300 bg-[#0a192f] default_cursor_cs"
      >
        <div class="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
          <div class="pb-8">
            <p class="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">
              Work
            </p>
            <p class="py-6">// Check out some of my recent work</p>
          </div>
          <div class="grid sm:grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-10 default_cursor_cs">
            <div class="shadow-lg shadow-[#040c16] h-44 group container rounded-md flex justify-center text-center items-center mx-auto content-div default_cursor_cs">
              <div className="relative">
                <AiFillYoutube
                  className="flex justify-center text-red-700"
                  size={55}
                />
              </div>
              <div class="absolute opacity-0 group-hover:opacity-100 ">
                <span class="text-2xl font bold text-white tracking-wider ">
                  YouTube - <span className="text-sm">Project Mavericks</span>
                </span>
                <div class="pt-8 text-center default_cursor_cs">
                  <a href="https://youtu.be/c2XNeki67Vs" target="_blank">
                    <button class="text-center rounded-lg px-4 py-2 m-2 bg-white text-gray-700 font-bold text-lg">
                      Watch
                    </button>
                  </a>
                </div>
              </div>
            </div>
            <div class="shadow-lg shadow-[#040c16] h-44 group container rounded-md flex justify-center text-center items-center mx-auto content-div default_cursor_cs">
              <div className="relative">
                <AiFillFilePdf
                  className="flex justify-center text-red-700"
                  size={55}
                />
              </div>
              <div class="absolute opacity-0 group-hover:opacity-100 ">
                <span class="text-2xl font bold text-white tracking-wider ">
                  PDF - <span className="text-sm">Project Mavericks</span>
                </span>
                <div class="pt-8 text-center default_cursor_cs">
                  <a
                    href="https://acrobat.adobe.com/link/review?uri=urn:aaid:scds:US:23db1d39-3ee2-3218-a119-4d268d74f638"
                    target="_blank"
                  >
                    <button class="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                      Open
                    </button>
                  </a>
                </div>
              </div>
            </div>
            <div
              class="shadow-lg shadow-[#040c16] group container  rounded-md flex justify-center text-center items-center mx-auto content-div default_cursor_cs"
              style={{
                "background-image": "url(./net-image.png)",
              }}
            >
              <div class="opacity-0 group-hover:opacity-100 ">
                <span class="text-2xl font bold text-white tracking-wider ">
                  React JS Application
                </span>
                <div class="pt-8 text-center default_cursor_cs">
                  <a
                    href="https://github.com/Sleekstiv007/netflix-app"
                    target="_blank"
                    class="default_pointer_cs"
                  >
                    <button class="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg default_pointer_cs">
                      Code
                    </button>
                  </a>
                  <a
                    href="https://netflix-app-alpha-lime.vercel.app/"
                    target="_blank"
                    class="default_pointer_cs"
                  >
                    <button class="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg default_pointer_cs">
                      Live
                    </button>
                  </a>
                </div>
              </div>
            </div>
            {/* <div
              class="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center text-center items-center mx-auto content-div default_cursor_cs"
              style={{
                "background-image": "url()",
              }}
            >
              <div class="opacity-0 group-hover:opacity-100 ">
                <span class="text-2xl font bold text-white tracking-wider default_cursor_cs">
                  React JS Application
                </span>
                <div class="pt-8 text-center default_cursor_cs">
                  <a href="" target="_blank">
                    <button class="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                      Code
                    </button>
                  </a>
                  <a href="" target="_blank">
                    <button class="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                      Live
                    </button>
                  </a>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
