import React from "react";
import frm10 from "../assets/images/Frame 39.png";
import Button from "./Button";
import { Link , useLocation } from "react-router-dom";

const Aboutsec = () => {

  const location = useLocation();
  const aboutpage = location.pathname === '/about';

  return (
    <div className="flex flex-col md:flex-row items-center justify-evenly gap-8 mt-20 px-4 sm:px-8">
      <div className="w-full md:w-1/2 flex justify-center">
        <img
          src={frm10}
          alt="About"
          className=" w-full max-w-[400px] md:max-w-[450px] lg:max-w-[500px] object-cover"
        />
      </div>

      <div className="w-full md:w-1/2 text-center md:text-left">
        <h1 className="font-bold text-2xl sm:text-3xl mt-4 md:mt-12">
          About Us
        </h1>

        <h3 className="font-bold text-xl sm:text-2xl mt-6">
          We are Peshawari Chappal <br />
          &amp; Peshawari Chaddar Shop since 1998
        </h3>

        <p className="font-bold mt-4 text-sm sm:text-base leading-relaxed">
          Lorem ipsum dolor sit amet consectetur. Amet ultricies vitae mattis
          at. Malesuada viverra orci ut tellus duis etiam mauris leo volutpat.
          Dictumst dictumst laoreet sit viverra et. Et condimentum vivamus
          aliquet quis penatibus mauris pretium mauris.
          <br />
          <br />
          Lorem ipsum dolor sit amet consectetur. Amet ultricies vitae mattis
          at. Malesuada viverra orci ut tellus duis etiam mauris leo volutpat.
        </p>

        <div className="mt-6 flex justify-center  md:justify-start">
         {!aboutpage && (
          <Link to={'/about'} className=""><Button 
          title={'More About Us'}/></Link>
         )}
        </div>
      </div>
    </div>
  );
};

export default Aboutsec;
