import React from "react";
import frm5 from "../assets/images/Frame 35.png";
import frm6 from "../assets/images/Frame 33.png";
import Button from "./Button";

const Section = () => {
  return (
    <div className="relative w-full mt-16 max-h-[450px] overflow-hidden">
      
      <div className="flex w-full">
        <img
          src={frm5}
          alt="banner left"
          className="hidden md:block w-1/2 h-[300px] md:h-[400px] lg:h-[450px] object-cover"/>

        <img
          src={frm6}
          className=" w-full md:w-1/2 h-[300px] md:h-[400px] lg:h-[450px] object-cover"/>
      </div>

      <div
        className="
          absolute
          top-1/2 left-1/2
          -translate-x-1/2 -translate-y-1/2
          md:top-[45%] md:left-[10%]
          md:translate-x-0
          text-center md:text-left
          px-4
        "
      >
        <p className="text-yellow-400 font-bold text-lg sm:text-xl md:text-2xl">
          Experience the best with our Premium <br />
          Quality Collections—crafted for <br />
          those who seek excellence.
        </p>

        <div className="mt-4">
          <Button />
        </div>
      </div>
    </div>
  );
};

export default Section;
