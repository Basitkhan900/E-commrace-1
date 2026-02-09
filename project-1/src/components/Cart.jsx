import React from "react";
import img8 from "../assets/images/image 8.png";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
const Cart = () => {
  return (
    <>
      <Navbar />
      <div className="w-full min-h-screen bg-white px-6 md:px-20 py-10">
        <h1 className="text-3xl font-bold text-center mt-[100px]">CART</h1>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Side 1 */}
          <div className="w-full lg:w-[65%]">
            <h2 className="text-xl font-semibold mb-6">
              03 items in your cart
            </h2>

            <div className="grid grid-cols-4 font-semibold border-b pb-3 mb-6">
              <p>Products</p>
              <p>Price</p>
              <p>Quantity</p>
              <p>Total Price</p>
            </div>

            <div className="grid grid-cols-4 items-center gap-4">
              <div className="flex gap-4">
                <img
                  src={img8}
                  alt="product"
                  className="w-20 h-20 rounded-xl bg-gray-100"
                />

                <div>
                  <p className="text-sm font-semibold">CHAPPAL</p>

                  <p className="text-xs text-gray-600 mt-1">
                    DENIM PESHAWARI CHAPPAL (NDL X KP SHOP)
                  </p>

                  <p className="text-xs mt-2">SIZE: 38</p>

                  <p className="text-xs">COLOR: Brown</p>
                </div>
              </div>

              <p className="font-semibold">Rs. 3,200</p>

              <div className="flex items-center gap-3">
                <button className="w-7 h-7 border rounded-full font-semibold">
                  -
                </button>

                <span className="font-semibold">02</span>

                <button className="w-7 h-7 border rounded-full font-semibold">
                  +
                </button>
              </div>

              <p className="font-semibold text-yellow-500">Rs. 6,400</p>
            </div>

            <hr className="my-8 border-black" />

            <div className="grid grid-cols-4 items-center gap-4">
              <div className="flex gap-4">
                <img
                  src={img8}
                  alt="product"
                  className="w-20 h-20 rounded-xl bg-gray-100"
                />

                <div>
                  <p className="text-sm font-semibold">CHAPPAL</p>

                  <p className="text-xs text-gray-600 mt-1">
                    DENIM PESHAWARI CHAPPAL (NDL X KP SHOP)
                  </p>

                  <p className="text-xs mt-2">SIZE: 38</p>

                  <p className="text-xs">COLOR: Brown</p>
                </div>
              </div>

              <p className="font-semibold">Rs. 3,200</p>

              <div className="flex items-center gap-3">
                <button className="w-7 h-7 border rounded-full font-semibold">
                  -
                </button>

                <span className="font-semibold">02</span>

                <button className="w-7 h-7 border rounded-full font-semibold">
                  +
                </button>
              </div>

              <p className="font-semibold text-yellow-500">Rs. 6,400</p>
            </div>

            <hr className="my-8 border-black" />

            <div className="grid grid-cols-4 items-center gap-4">
              <div className="flex gap-4">
                <img
                  src={img8}
                  alt="product"
                  className="w-20 h-20 rounded-xl bg-gray-100"
                />

                <div>
                  <p className="text-sm font-semibold">CHAPPAL</p>

                  <p className="text-xs text-gray-600 mt-1">
                    DENIM PESHAWARI CHAPPAL (NDL X KP SHOP)
                  </p>

                  <p className="text-xs mt-2">SIZE: 38</p>

                  <p className="text-xs">COLOR: Brown</p>
                </div>
              </div>

              <p className="font-semibold">Rs. 3,200</p>

              <div className="flex items-center gap-3">
                <button className="w-7 h-7 border rounded-full font-semibold">
                  -
                </button>

                <span className="font-semibold">02</span>

                <button className="w-7 h-7 border rounded-full font-semibold">
                  +
                </button>
              </div>

              <p className="font-semibold text-yellow-500">Rs. 6,400</p>
            </div>
          </div>

          {/* Right side */}

          <div className="w-full lg:w-[35%] border-l lg:pl-12 space-y-12">
            <div>
              <h3 className="text-lg font-semibold mb-4">Coupon Code</h3>

              <input
                type="text"
                placeholder="Coupon Code"
                className="w-full border rounded-full px-5 py-3 mb-4 focus:outline-none"
              />

              <button className="w-full bg-yellow-400 py-3 rounded-full font-semibold text-white">
                STATE
              </button>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Total</h3>

              <div className="space-y-4">
                <div className="flex justify-between">
                  <p>Subtotal</p>
                  <p>Rs. 15,000</p>
                </div>

                <div className="flex justify-between">
                  <p>Shipping Charges</p>
                  <p>Rs. 200</p>
                </div>

                <div className="flex justify-between">
                  <p>Discount</p>
                  <p>Rs. 120</p>
                </div>

                <hr />

                <div className="flex justify-between font-bold text-lg">
                  <p>Total</p>
                  <p className="text-yellow-500">Rs. 15,080</p>
                </div>
              </div>
            </div>

            <Link to="/checkout"><button className="w-full bg-yellow-400 py-4 rounded-full font-semibold text-white">
              CHECKOUT
            </button> </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Cart;
