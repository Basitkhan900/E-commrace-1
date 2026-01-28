import React from "react";

const Newarricard = ({ img, title, price, review }) => {
  return (
    <div className=" mt-8 hover:scale-105 duration-300 cursor-pointer w-full max-w-[260px] ">
      <img src={img} className="w-full object-cover" />

      <h3 className="mt-2 text-sm sm:text-base font-semibold">{title}</h3>

      <div className="flex justify-between items-center mt-2 text-sm">
        <p className="font-bold">Price: {price}</p>
        <p>⭐ {review}</p>
      </div>
    </div>
  );
};

export default Newarricard;
