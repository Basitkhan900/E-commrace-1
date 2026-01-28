import React from "react";
import frm1 from "../assets/images/Frame 24.png";
import frm2 from "../assets/images/Frame 25.png";
import frm3 from "../assets/images/Frame 26.png";
import frm4 from "../assets/images/Frame 27.png";
import Newarricard from "./Newarricard";

const Newarrivaldata = () => {
  const data2 = [
    {
      id: 1,
      img: frm1,
      title: "Denim Peshawari Chappal (NDL x KP Shop Collaboration",
      price: "1000",
      review: 4.5,
    },
    {
      id: 2,
      img: frm2,
      title: "Denim Peshawari Chappal (NDL x KP Shop Collaboration",
      price: "1000",
      review: 4.9,
    },
    {
      id: 3,
      img: frm3,
      title: "Denim Peshawari Chappal (NDL x KP Shop Collaboration",
      price: "1000",
      review: 4.5,
    },
    {
      id: 4,
      img: frm4,
      title: "Denim Peshawari Chappal (NDL x KP Shop Collaboration",
      price: "1000",
      review: 4.5,
    },
  ];

  return (
    <div className="mt-10 px-4 sm:px-8">
      <div className="flex items-center justify-between mb-6">
        <h1 className="font-bold text-xl sm:text-2xl ml-[630px]">New Arrival</h1>
        <h1 className="font-bold text-amber-400 cursor-pointer">View All</h1>
      </div>

      
      <div
        className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 place-items-center "
      >
        {data2.map((item) => (
          <Newarricard
            key={item.id}
            img={item.img}
            title={item.title}
            price={item.price}
            review={item.review}
          />
        ))}
      </div>
    </div>
  );
};

export default Newarrivaldata;
