import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Addanotheradd = () => {
  return (
    <div>
        <Navbar/>
    <div className="">

      {/* Title */}
      <h1 className="font-bold text-2xl uppercase text-center mt-[200px]">
        Add Another Address
      </h1>

      
      <div className="max-w-4xl mx-auto mt-10 px-6">

       
        <div className="grid grid-cols-2 gap-x-6 gap-y-6">

          
          <input
            type="text"
            placeholder="Full name"
            className="w-full rounded-full border px-6 py-3 focus:outline-none"
          />

          <input
            type="text"
            placeholder="Phone number"
            className="w-full rounded-full border px-6 py-3 focus:outline-none"
          />

          
          <input
            type="text"
            list="State"
            placeholder="State"
            className="w-full rounded-full bg-gray-100 px-6 py-3 focus:outline-none"
          />

         <datalist id="State">
            <option value="peshawar" />
            <option value="Kohat" />
            <option value="Hangu" />
            <option value="mardan" />
         </datalist>

          
          <input
            type="text"
            list="City"
            placeholder="City"
            className="w-full rounded-full bg-gray-100 px-6 py-3 focus:outline-none"
          />

           <datalist id="City">
            <option value="peshawar" />
            <option value="Kohat" />
            <option value="Hangu" />
            <option value="mardan" />
         </datalist>

          
          <input
            type="text"
            list="Street"
            placeholder="Street"
            className="w-full rounded-full bg-gray-100 px-6 py-3 focus:outline-none"
          />

           <datalist id="Street">
            <option value="01" />
            <option value="02" />
            <option value="03" />
            <option value="04" />
         </datalist>

          
          <input
            type="text"
            placeholder="Zip code"
            className="w-full rounded-full border px-6 py-3 focus:outline-none"
          />

        </div>
      </div>
      <button className="w-[25%] bg-yellow-400 text-white py-3 rounded-full mt-6 ml-[580px] hover:bg-yellow-600 transition duration-300">
        Save Address
      </button>
      </div>
      <Footer/>
    </div>
  );
};

export default Addanotheradd;
