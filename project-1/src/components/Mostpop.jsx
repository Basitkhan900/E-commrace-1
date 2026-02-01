import React from "react";
import Carddata from "./Carddata";
import { motion } from "framer-motion";

const Mostpop = ({ Prods }) => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="flex flex-col lg:flex-row items-center justify-between w-[90%] mx-auto my-20"
      >
        <div></div>
        <h1 className="font-bold text-4xl uppercase text-[rgba(51,55,64,1)]">
          Most Popular
        </h1>
        <a
          href=""
          className="font-bold text-[rgba(255,191,61,1)] text-[20px] uppercase"
        >
          view All
        </a>
      </motion.div>

      <div className="flex items-center justify-center">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-[90%]"
        >
          {Prods.slice(0, 4).map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.15 }}
            >
              <Carddata
                image={item.image}
                disc={item.disc}
                oldprice={item.oldprice}
                saleprice={item.saleprice}
                rating={item.rating}
                ratingNum={item.ratingNum}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </>
  );
};

export default Mostpop;
