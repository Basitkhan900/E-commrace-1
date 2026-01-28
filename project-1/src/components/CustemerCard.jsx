import React from "react";

const CustemerCard = ({ img, title, img2, disc }) => {
  return (
    <div className=" bg-white rounded-2xl shadow-sm p-6 flex flex-col gap-4">
      <div className="flex items-center gap-4">
        <img
          src={img}
          alt={title}
          className="w-12 h-12 rounded-full object-cover"
        />

        <div>
          <h2 className="font-bold text-sm">{title}</h2>
          <img src={img2} alt="rating" className="mt-1 w-20" />
        </div>
        
      </div>

      <p className="text-sm text-gray-700 leading-relaxed">“{disc}”</p>
    </div>
  );
};

export default CustemerCard;
