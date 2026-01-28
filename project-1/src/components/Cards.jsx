import React from "react";
import img3 from "../assets/images/image 6.png";
import img4 from "../assets/images/image 5.png";
import img5 from "../assets/images/image 7.png";
import img6 from "../assets/images/image 8.png";
import img7 from "../assets/images/image 9.png";
import img8 from "../assets/images/image 10.png";
import Card from "./Card.jsx";

const Cards = () => {
  const data1 = [
{ 
    id: 1,
    img: img4,
    title: "Chappal No !"
},
{ 
    id: 2, 
    img: img5,
    title: "Chappal No !"
},
{
    id: 3,
    img: img6,
    title: "Chappal No !"
},
{
    id: 4,
    img: img7,
    title: "Chappal No !"
},
{
    id: 5,
    img: img8,
    title: "Chappal No !"
},
{
    id: 6,
    img: img3,
    title: "Chappal No !"
},
  ];

  return (
    <div
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 px-4 sm:px-8 mt-10  place-items-center">
      {data1.map((item) => (
        <Card key={item.id} img={item.img} title={item.title} />
      ))}
    </div>
  );
};

export default Cards;
