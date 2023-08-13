import React from 'react'

const Skills = () => {
  return (
    <div>
      <div name="skills" class="w-full h-screen bg-[#0a192f] text-gray-300">
        <div class="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
          <div>
            <p class="text-4xl font-bold inline border-b-4 border-pink-600 ">Skills</p>
            <p class="py-4">// These are the technologies I've worked with</p>
          </div>
          <div class="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
            <div class="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
              <img class="w-20 mx-auto" src="/static/media/html.2ba4fabc69a89a8f71e6.png" alt="HTML icon"/>
              <p class="my-4">HTML</p>
            </div>
            <div class="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
              <img class="w-20 mx-auto" src="/static/media/css.69a82c2d9e45c933a9cb.png" alt="HTML icon"/>
              <p class="my-4">CSS</p>
            </div>
            <div class="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
              <img class="w-20 mx-auto" src="/static/media/javascript.1ccd6ef9bb1f9c84ef00.png" alt="HTML icon"/>
              <p class="my-4">JAVASCRIPT</p>
            </div>
            <div class="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
              <img class="w-20 mx-auto" src="/static/media/react.0cf951a69d8e58f83f9d.png" alt="HTML icon"/>
              <p class="my-4">REACT</p>
            </div>
            <div class="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
              <img class="w-20 mx-auto" src="/static/media/github.3b9e32903aa89111875d.png" alt="HTML icon"/>
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
              <img class="w-20 mx-auto" src="/static/media/tailwind.e47ac876b8d4d0bba47a.png" alt="HTML icon"/>
              <p class="my-4">TAILWIND</p>
            </div>
            <div class="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
              <img class="w-20 mx-auto" src="/static/media/firebase.209703cedf1b1a96bc52.png" alt="HTML icon"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills;