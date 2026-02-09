import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";


import Prods from "../products/Prods";
import Footer from "./Footer";
import Navbar from "./Navbar";

const ProductDetail = () => {
  const { id } = useParams();
  
  const product = Prods.find((item) => item.id === Number(id));

  if (!product) {
    return <h1 className="p-10 text-2xl">Product Not Found</h1>;
  }

  return (
    <>
    <Navbar/>
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.4 }}
      className="p-4 sm:p-6 md:p-10 mt-16"
    >
      <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-20 lg:ml-[60px]">
        <img
          src={product.image}
          className="w-full max-w-[300px] sm:max-w-[400px] md:max-w-[500px] h-auto object-cover rounded-3xl"
        />

        <div className="w-full max-w-xl">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">
            {product.disc}
          </h1>

          <p className="mt-4 sm:mt-6 text-base sm:text-lg">
            ⭐ {product.rating} ({product.ratingNum} Reviews)
          </p>

          <div className="flex gap-4 items-center">
            <h4 className="mt-4 sm:mt-6 line-through decoration-red-500 decoration-2">
              {product.oldprice}
            </h4>

            <h2 className="mt-4 sm:mt-5 text-xl sm:text-2xl font-bold">
              {product.saleprice}
            </h2>
          </div>

          <div>
            <h1 className="font-bold text-xl sm:text-2xl mt-6 uppercase">
              Size
            </h1>
            <h2 className="font-bold uppercase mt-3">{product.size}</h2>
          </div>

          <div className="mt-2">
            <h1 className="font-bold text-xl sm:text-2xl mt-6 uppercase">
              Color
            </h1>
            <h2 className="font-bold uppercase mt-3">{product.color}</h2>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-6 ">
            <Link to={'/cart'}><button className="px-6 py-2 bg-black text-white w-full sm:w-40 h-12 rounded-full hover:cursor-pointer transition-transform duration-300 hover:scale-105">
              Add To Cart
            </button></Link>

           <Link to={'/checkout'}> <button className="px-6 py-2 bg-yellow-400 text-white w-full sm:w-40 h-12 rounded-full hover:cursor-pointer transition-transform duration-300 hover:scale-105">
              Buy Now
            </button></Link>
          </div>
        </div>
      </div>

      <div className="px-4 sm:px-10 md:px-22 ml-16 my-12 sm:my-20 flex flex-col gap-6">
        <h1 className="text-2xl sm:text-3xl uppercase font-bold">
          Description
        </h1>

        <p className="text-sm sm:text-base uppercase font-semibold">
          Lorem ipsum dolor sit amet consectetur. At in penatibus a rhoncus
          ullamcorper sit cursus pellentesque. Feugiat maecenas mus mollis quis
          in nullam scelerisque sagittis eleifend. Amet amet convallis in eu
          mollis. Enim malesuada neque habitant in scelerisque ultrices id
          pharetra dui erat. Nec tempor ut imperdiet varius condimentum
          tristique urna velit. At eros id nec faucibus facilisi bibendum est
          sollicitudin. Ipsum in ac ac fermentum at et. Facilisi sit blandit
          nisi non ipsum. In dolor purus aliquam ac libero. Viverra velit purus
          condimentum lacus. Tristique dolor quisque eget fames senectus gravida
          non. Dolor Cursus amet tincidunt fames dictumst arcu aliquam commodo
          auctor. Tincidunt elementum nulla aliquam nunc eros amet ornare ornare
          dignissim. Lacus id pellentesque euismod arcu diam tortor lectus in
          neque.
        </p>

        <p className="text-sm sm:text-base uppercase font-semibold">
          Lorem ipsum dolor sit amet consectetur. At in penatibus a rhoncus
          ullamcorper sit cursus pellentesque. Feugiat maecenas mus mollis quis
          in nullam scelerisque sagittis eleifend. Amet amet convallis in eu
          mollis. Enim malesuada neque habitant in scelerisque ultrices id
          pharetra dui erat. Nec tempor ut imperdiet varius condimentum
          tristique urna velit. At eros id nec faucibus facilisi bibendum est
          sollicitudin. Ipsum in ac ac fermentum at et. Facilisi sit blandit
          nisi non ipsum. In dolor purus aliquam ac libero. Viverra velit purus
          condimentum lacus. Tristique dolor quisque eget fames senectus gravida
          non. Dolor Cursus amet tincidunt fames dictumst arcu aliquam commodo
          auctor. Tincidunt elementum nulla aliquam nunc eros amet ornare ornare
          dignissim. Lacus id pellentesque euismod arcu diam tortor lectus in
          neque.
        </p>
      </div>
    </motion.div>
    <Footer/>
    </>
  );
};

export default ProductDetail;
