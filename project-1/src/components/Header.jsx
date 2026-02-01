import React from "react";
import img1 from "../assets/images/Frame 16.png";
import img2 from "../assets/images/Frame 1.png";
import Button from "./Button.jsx";

const Header = () => {
  return (
    <div className="w-full max-h-[650px] overflow-hidden">
      <div className="flex w-full">
        <img
          src={img1}
          alt="header left"
          className="hidden md:block w-[20%] h-[380px] md:h-[520px] lg:h-[650px] object-cover"
        />

        <img
          src={img2}
          alt="header right"
          className="w-full md:w-full h-[380px] md:h-[520px] lg:h-[650px] object-cover"
        />
      </div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 md:top-[45%] md:left-[10%] md:translate-x-0 text-center md:text-left px-4">
        <h1 className="font-bold text-xl sm:text-2xl md:text-3xl text-amber-400 uppercase">
          Unlock 20% off
        </h1>

        <h2 className="font-bold text-lg sm:text-xl md:text-2xl text-white mt-2 uppercase">
          On our Premium Collection <br />
          for a limited time only
        </h2>

        <div className="mt-4">
          <Button title={"SHOP NOW"} />
        </div>
      </div>
    </div>
  );
};

export default Header;
