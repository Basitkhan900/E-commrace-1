import React from "react";
// import customer1 from '../assets/customerRevImg1.png'
const CustomerReview = ({ customerReviews }) => {
  return (
    <div className="bg-[rgba(255,191,61,0.05)] flex items-center justify-center flex-col py-10">
      <h1 className="uppercase text-3xl md:text-4xl text-[rgba(51,55,64,1)] py-10 font-bold text-center">
        Customer Review
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[90%]">
        {customerReviews.map((item) => {
          return (
            <div className=" flex flex-col gap-4 shadow p-7 rounded-4xl m-3 bg-white">
              <div className="flex items-center gap-4">
                <div className="">
                  <img src={item.image} alt="" />
                </div>
                <div className="">
                  <p className="font-bold uppercase">{item.Name}</p>
                  <div className="">⭐⭐⭐⭐⭐</div>
                </div>
              </div>
              <div className="">{item.disc}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CustomerReview;
