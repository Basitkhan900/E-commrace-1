import React from "react";
import { FaStar } from "react-icons/fa";
const Carddata = ({ image, disc, oldprice, saleprice, rating, ratingNum }) => {
  return (
    <div className="flex flex-col items-center justify-center w-[95%] my-2">
      <div className="  h-80 rounded-4xl p-2 flex items-center justify-center">
        <img src={image} alt="" className="" />
      </div>
      <div className="px-2 mt-1 uppercase">
        <p className="text-[rgba(47,47,47,1)]">{disc}</p>
        <div className="flex items-center justify-between mt-1">
          <p className="flex items-center gap-2 font-bold">
            <span className="text-[rgba(47,47,47,0.7)] line-through decoration-red-500 decoration-2">
              {oldprice}
            </span>
            <span>{saleprice}</span>
          </p>
          <p className="flex items-center gap-1 pr-4">
            <span className="text-[rgba(255,191,61,1)]">
              <FaStar />
            </span>
            <span className="font-bold">{rating}</span>
            <sub className="">({ratingNum})</sub>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Carddata;
