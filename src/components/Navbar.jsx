import React, { useState } from "react";
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  const handleClose = () => {
    setNav(false);
  };
  return (
    <div className="fixed w-full h-[80px] z-10 flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
      <div>
        <Link to="/">
          {" "}
          <p className="text-pink-500 text-2xl  font-semibold">Stvn</p>
        </Link>
      </div>
      {/* menu */}
      <ul className="hidden md:flex ml-[800px]">
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/about">
          <li>Bio</li>
        </Link>
        <Link to="/">
          <li>Pitch</li>
        </Link>
        <Link to="/skills">
          <li>Skills</li>
        </Link>
        <Link to="/contact-me">
          <li>Contacts</li>
        </Link>
      </ul>

      {/* Hamburger  */}
      <div className="md:hidden z-10 pl-[270px]">
        {!nav ? (
          <FaBars onClick={handleClick} className="text-white" size={20} />
        ) : (
          <FaTimes onClick={handleClose} size={20} />
        )}
      </div>

      {/* mobile view */}
      <div>
        <ul
          className={
            !nav
              ? "hidden"
              : "absolute top-0 text-3xl text-left font-semibold gap-y-5 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"
          }
        >
          <a href="/">
            <li className="hover:text-pink-600 focus:text-pink-500 focus:border-b focus:border-gray-500 active:text-pink-500 active:border-b active:border-gray-300">
              Home
            </li>
          </a>
          <a href="/about">
            <li className="hover:text-pink-600 focus:text-pink-500 focus:border-b focus:border-gray-500 active:text-pink-500 active:border-b active:border-gray-300">
              Bio
            </li>
          </a>
          <a href="/">
            <li className="hover:text-pink-600 focus:text-pink-500 focus:border-b focus:border-gray-500 active:text-pink-500 active:border-b active:border-gray-300">
              Pitch
            </li>
          </a>
          <a href="/skills">
            <li className="hover:text-pink-600 focus:text-pink-500 focus:border-b focus:border-gray-500 active:text-pink-500 active:border-b active:border-gray-300">
              Skills
            </li>
          </a>
          <a href="/contact-me">
            <li className="hover:text-pink-600 focus:text-pink-500 focus:border-b focus:border-gray-500 active:text-pink-500 active:border-b active:border-gray-300">
              Contacts
            </li>
          </a>
        </ul>
      </div>

      {/* social icons */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://www.linkedin.com/in/steven-miene-b010a4222"
            >
              LinkedIn
              <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://github.com/Sleekstiv007"
            >
              Github
              <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://gmail.com/smiene13@gmail.com"
            >
              Mail
              <HiOutlineMail size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://twitter.com/Olaebi2?s=09"
            >
              Twitter
              <FaTwitter size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
