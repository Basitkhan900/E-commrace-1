import React from "react";
import { FaStar, FaHeart, FaShoppingCart } from "react-icons/fa";
import {  useNavigate } from "react-router-dom";

const Carddata = ({ id, image, disc, oldprice, saleprice, rating, ratingNum }) => {

  const navigate = useNavigate()

  return (
    


    <div 
    onClick={() => navigate (`/product/${id}`)}
    
    className="flex flex-col items-center justify-center w-[95%] my-2">
      
      
      <div className="relative group h-80 rounded-4xl p-2 flex items-center justify-center">
        
       
        <img
          src={image}
          alt=""
          className="transition-opacity duration-300 group-hover:opacity-90"
        />

        
        <button
          className="
            absolute top-4 right-4
            w-10 h-10
            bg-white rounded-full
            flex items-center justify-center
            text-gray-500
            opacity-0
            group-hover:opacity-100
            transition-all duration-300
            hover:text-yellow-500
          "
        >
          <FaHeart />
        </button>

        
        <button
          className="
            absolute bottom-6
            w-40 h-12
            bg-amber-400 rounded-full
            flex items-center justify-center gap-2
            opacity-0
            group-hover:opacity-100
            transition-all duration-300
          "
        >
          <FaShoppingCart/>
          <span>Add To Cart</span>
        </button>

      </div>

      
      <div className="px-6 mt-1 uppercase">
        <p className="text-[rgba(47,47,47,1)] ">{disc}</p>

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
            <sub>({ratingNum})</sub>
          </p>
        </div>
      </div>
    </div>
    
  );
};

export default Carddata;
