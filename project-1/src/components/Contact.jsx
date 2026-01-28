import React from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io5";

const Contact = () => {
  return (
    <div className="mt-20 px-4 sm:px-8">
      {/* Heading */}
      <h1 className="font-bold text-2xl sm:text-3xl text-center">
        Get In Touch With Us
      </h1>

      {/* Content */}
      <div className=" flex flex-col  md:flex-row  items-center justify-between gap-8 mt-12 max-w-5xl mx-auto">
        <div className="font-bold text-2xl sm:text-3xl flex gap-6">
          <FaFacebook className="text-blue-600 cursor-pointer" />
          <FaInstagram className="text-pink-600 cursor-pointer" />
          <FaTiktok className="cursor-pointer" />
          <IoLogoYoutube className="text-red-600 cursor-pointer" />
        </div>

        {/* Input + Button */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <input
            type="search"
            placeholder="Enter Your Email address"
            className="border border-black rounded-full w-full sm:w-72 h-12 text-center outline-none"
          />

          <button className="w-full sm:w-40 h-12 bg-amber-400 text-white font-bold rounded-full">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
