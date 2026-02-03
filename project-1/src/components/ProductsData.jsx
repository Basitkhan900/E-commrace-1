import { useState } from "react";
import Carddata from "./Carddata";
import Filterpanel from "./Filterpanel";
import { motion } from "framer-motion";
const ProductsData = ({ Prods }) => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const [filters, setFilters] = useState({
    price: 12000,
    brand: "",
    size: "",
    color: "",
  });

  const filteredProducts = Prods.filter((item) => {
    const priceMatch = item.saleprice <= filters.price;
    const brandMatch = !filters.brand || item.brand === filters.brand;
    const sizeMatch = !filters.size || item.size === filters.size;
    const colorMatch = !filters.color || item.color === filters.color;

    return priceMatch && brandMatch && sizeMatch && colorMatch;
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="flex flex-col lg:flex-row items-center justify-between w-[90%] mx-auto my-20">
        <div></div>

        <h1 className="font-bold text-4xl uppercase text-[rgba(51,55,64,1)]">
          Products
        </h1>

        <button
          onClick={() => setIsFilterOpen(true)}
          className="font-bold text-[rgba(255,191,61,1)] text-[20px] uppercase"
        >
          Filter
        </button>
      </div>

      <div className="flex items-center justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-[90%] gap-6">
          {filteredProducts.map((item) => (
            <Carddata
              key={item.id}
              image={item.image}
              disc={item.disc}
              oldprice={item.oldprice}
              saleprice={item.saleprice}
              rating={item.rating}
              ratingNum={item.ratingNum}
            />
          ))}
        </div>
      </div>

      <Filterpanel
        isOpen={isFilterOpen}
        onClose={() => setIsFilterOpen(false)}
        onApply={(data) => {
          setFilters((prev) => ({
            ...prev,
            ...data,
          }));
          setIsFilterOpen(false);
        }}
      />
    </motion.div>
  );
};

export default ProductsData;
