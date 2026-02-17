import React from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import Prods from "../products/Prods";
import Footer from "./Footer";
import Navbar from "./Navbar";

const addToCart = (item) => {

  let cart = JSON.parse(localStorage.getItem("cart")) || [];   //Cart data LocalStorage se lena

  const exist = cart.find(p => p.id === item.id); // cart mai find karta hai item pehly sy mawjod hai matlab “Cart ke andar dekho, koi product hai jis ki id current item.id jaisi ho

  if (exist) {
    exist.quantity += 1;                            // agar koi product pehly sy exits karta hai cart tho +1 kardo
  } else {
    cart.push({ ...item, quantity: 1 });           // agar nai tho first time cart mai push kardo 
  }

  localStorage.setItem("cart", JSON.stringify(cart));      // jo new cart bany usay string banawo browser mai save karo

  
};


const ProductDetail = () => {

  const { id } = useParams();

  const product = Prods.find(
    (item) => item.id === Number(id)
  );

  if (!product) {
    return <h1 className="p-10 text-2xl">Product Not Found</h1>;
  }

  return (
    <>
      <Navbar />

      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4 }}
        className="p-4 sm:p-6 md:p-10 mt-16"
      >
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-20 lg:ml-[60px]">

          <img
            src={product.image}
            className="w-full max-w-[300px] sm:max-w-[400px] md:max-w-[500px] rounded-3xl"
          />

          <div className="w-full max-w-xl">

            <h1 className="text-3xl font-bold">
              {product.disc}
            </h1>

            <p className="mt-4">
              ⭐ {product.rating} ({product.ratingNum} Reviews)
            </p>

            <div className="flex gap-4 items-center">

              <h4 className="line-through text-red-500">
                {product.oldprice}
              </h4>

              <h2 className="text-2xl font-bold">
                {product.saleprice}
              </h2>

            </div>

            <div className="mt-6">

              <h1 className="font-bold text-xl uppercase">
                Size
              </h1>

              <h2>{product.size}</h2>

            </div>

            <div className="mt-4">

              <h1 className="font-bold text-xl uppercase">
                Color
              </h1>

              <h2>{product.color}</h2>

            </div>

            <div className="flex gap-6 mt-6">

              
              <Link to="/cart">
                <button
                  onClick={() => addToCart(product)}
                  className="px-6 py-2 bg-black text-white w-40 h-12 rounded-full"
                >
                  Add To Cart
                </button>
              </Link>

              <Link to="/checkout">
                <button
                  onClick={() => addToCart(product)}
                  className="px-6 py-2 bg-yellow-400 text-white w-40 h-12 rounded-full"
                >
                  Buy Now
                </button>
              </Link>

            </div>

          </div>

        </div>

      </motion.div>

      <Footer />
    </>
  );
};

export default ProductDetail;
