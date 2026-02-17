import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import Prods from "../products/Prods";
import Carddata from "./Carddata";

const Search = ({ Close }) => {

  const [input, setInput] = useState("");

  // Simple filter
  const data = Prods.filter(item =>
    item.title.toLowerCase().includes(input.toLowerCase())
  );

  return (
    <div className="fixed inset-0 bg-black/40 flex justify-center pt-20">

      <div className="bg-white w-[90%] md:w-[60%] p-5 rounded">

        {/* Close */}
        <button
          onClick={ Close }
          className="float-right text-red-500"
        >
          X
        </button>

        {/* Search Box */}
        <div className="relative mt-4">

          <input
            type="search"
            placeholder="Search..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="w-full border rounded-full py-2 pl-10"
          />

          <CiSearch
            className="absolute left-3 top-1/2 -translate-y-1/2"
            size={20}
          />

        </div>

        {/* Results */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-h-[400px] overflow-y-auto">

          {data.map(item => (
            <Carddata
              key={item.id}
              id={item.id}
              image={item.image}
              title={item.title}
              disc={item.disc}
              oldprice={item.oldprice}
              saleprice={item.saleprice}
              rating={item.rating}
              ratingNum={item.ratingNum}
            />
          ))}

        </div>

      </div>
    </div>
  );
};

export default Search;
