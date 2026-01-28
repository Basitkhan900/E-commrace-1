import React from "react";

const Card = ({ img, title }) => {
  return (
    <div
      className=" bg-black rounded-xl shadow-md overflow-hidden w-full max-w-[260px] hover:scale-105 duration-300 cursor-pointer "
    >
      <div className="h-64 sm:h-72 w-full overflow-hidden">
        <img src={img} className="h-full w-full object-cover" />
      </div>

      <div className="py-2">
        <h2 className="text-center text-white">{title}</h2>
      </div>
    </div>
  );
};

export default Card;
