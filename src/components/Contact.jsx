import React from "react";

const Contact = () => {
  return (
    <div>
      <h1 className="text-center text-pink-600 text-3xl font-semibold pt-10">
        Contact
      </h1>
      <div
        name="contact"
        class="w-full bg-[#0a192f] flex justify-center items-center p-4"
      >
        <form
          method="POST"
          action="https://getform.io/f/a699a1b2-f225-434e-b317-1fbbde8e006c"
          class="flex flex-col max-w-[600px] w-full"
        >
          <div class="pb-8">
            <p class="text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300">
              Contact
            </p>
            <p class="text-gray-300 py-4">
              Submit the form below or shoot me an email - smiene13@gmail.com
            </p>
          </div>
          <input
            class="bg-[#ccd6f6] p-2"
            type="text"
            placeholder="Name"
            name="name"
          />
          <input
            class="my-4 p-2 bg-[#ccd6f6]"
            type="email"
            placeholder="Email"
            name="email"
          />
          <textarea
            class="bg-[#ccd6f6] p-2"
            name="message"
            rows="10"
            placeholder="Message"
          ></textarea>
          <button class="text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center">
            Let's Collaborate
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
