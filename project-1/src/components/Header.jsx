import React from "react";
import img1 from "../assets/images/Frame 16.png";
import img2 from "../assets/images/Frame 1.png";
import Button from "./Button.jsx";

const Header = () => {
  return (
    <div className="relative w-full max-h-[500px] overflow-hidden">
      <div className="flex w-full">
        <img
          src={img1}
          alt="header left"
          className=" hidden md:block w-1/2 h-[300px] md:h-[400px] lg:h-[500px]  object-cover" />

        <img
          src={img2}
          alt="header right"
          className=" w-full md:w-1/2 h-[300px] md:h-[400px] lg:h-[500px] object-cover"
        />
      </div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 md:top-[45%] md:left-[15%] md:translate-x-0 text-center md:text-left px-4">
        <h1 className="font-bold text-xl sm:text-2xl md:text-3xl text-amber-400">
          Unlock 20% off
        </h1>

        <h2 className="font-bold text-lg sm:text-xl md:text-2xl text-white mt-2">
          On our Premium Collection <br />
          for a limited time only
        </h2>

        <div className="mt-4">
          <Button />
        </div>
      </div>
    </div>
  );
};

export default Header;
