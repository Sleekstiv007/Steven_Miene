import React from "react";
import { FaHtml5, FaCss3Alt, FaReact, FaGithub } from "react-icons/fa";
import { TbBrandJavascript} from "react-icons/tb"
import { SiTailwindcss } from "react-icons/si"

const Skills = () => {
  return (
    <div>
      <div name="skills" class="w-full pt-10 md:pt-0 h-screen bg-[#0a192f] text-gray-300">
        <div class="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
          <div>
            <p class="text-4xl font-bold inline border-b-4 border-pink-600 ">
              Skills
            </p>
            <p class="py-4">// These are the technologies I've worked with</p>
          </div>
          <div class="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
            <div class="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
              <div className="flex justify-center">
                <FaHtml5 size={55} className="text-orange-500" />
              </div>
              <p class="my-4">HTML</p>
            </div>
            <div class="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
              <div className="flex justify-center">
                <FaCss3Alt size={55} className="text-blue-700" />
              </div>
              <p class="my-4">CSS</p>
            </div>
            <div class="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
              <div className="flex justify-center">
                <TbBrandJavascript size={55} className="text-yellow-500" />
              </div>
              <p class="my-4">JAVASCRIPT</p>
            </div>
            <div class="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
              <div className="flex justify-center">
                <FaReact size={55} className="text-blue-500" />
              </div>
              <p class="my-4">REACT</p>
            </div>
            <div class="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
              <div className="flex justify-center">
                <FaGithub size={55} className="text-gray-300" />
              </div>
              <p class="my-4">GITHUB</p>
            </div>
            {/* <div class="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
              <img class="w-20 mx-auto" src="/static/media/node.952a9ea986dcfa5229ad.png" alt="HTML icon"/>
              <p class="my-4">NODE JS</p>
            </div>
            <div class="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
              <img class="w-20 mx-auto" src="/static/media/mongo.2a1528ddc31d4ce8518d.png" alt="HTML icon"/>
              <p class="my-4">MONGO DB</p>
            </div> */}
            <div class="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
              <div className="flex justify-center">
                <SiTailwindcss size={55} className="text-blue-500" />
              </div>
              <p class="my-4">TAILWIND</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
