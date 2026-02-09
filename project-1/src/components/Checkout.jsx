import React from "react";
import img8 from "../assets/images/image 8.png";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Checkout = () => {
  return (
    <>
    <Navbar/>
    <div className="px-4 sm:px-10 lg:px-20 py-8 min-h-screen bg-white">
      <h1 className="uppercase font-bold text-3xl sm:text-4xl mt-[100px] text-center">
        Checkout
      </h1>

      {/* MAIN layout */}
      <div className="flex flex-col lg:flex-row mt-16 gap-10">
        {/* LEFT SIDE */}
        <div className="w-full lg:w-[60%]">
          <h1 className="text-2xl font-semibold mt-5">Address</h1>

          <div className="mt-4">
            <label>Contact</label> <br />
            <input
              type="text"
              placeholder="Email / Phone Number"
              className="w-full sm:w-[80%] border rounded-full px-5 py-3 mb-4 focus:outline-none mt-2"
            />
          </div>

          <label>Address</label>

          <div className="mt-2">
            <div className="flex flex-col sm:flex-row gap-3 mb-3">
              <input
                type="text"
                placeholder="Enter Your Name"
                className="w-full sm:w-[40%] border rounded-full px-5 py-3"
              />

              <input
                type="text"
                placeholder="Phone Number"
                className="w-full sm:w-[40%] border rounded-full px-5 py-3"
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-3 mb-3">
              <input
                type="text"
                list="State"
                placeholder="State"
                className="w-full sm:w-[40%] border rounded-full px-5 py-3 focus:outline-none mt-2"
              />

              <datalist id="State">
                <option value="00000" />
                <option value="J124124" />
                <option value="123123" />
                <option value="123123" />
              </datalist>

              <input
                type="text"
                list="Country"
                placeholder="Country"
                className="w-full sm:w-[40%] border rounded-full px-5 py-3 focus:outline-none mt-2"
              />

              <datalist id="Country">
                <option value="Pakistan" />
                <option value="Dubai" />
                <option value="India" />
                <option value="Bangladish" />
              </datalist>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 mb-3">
              <input
                type="text"
                list="Street"
                placeholder="Street"
                className="w-full sm:w-[40%] border rounded-full px-5 py-3 focus:outline-none mt-2"
              />

              <datalist id="Street">
                <option value="001" />
                <option value="002" />
                <option value="003" />
                <option value="004" />
              </datalist>

              <input
                type="text"
                placeholder="Zip Code"
                className="w-full sm:w-[40%] border rounded-full px-5 py-3"
              />
            </div>
          </div>

          <div className="mt-8">
            <h1 className="text-2xl font-semibold uppercase">Payment</h1>

            <h2 className="font-semibold mt-2 uppercase">Payment method</h2>

            <input
              type="text"
              list="Online / COD"
              placeholder="Online / COD"
              className="w-full sm:w-[81%] border rounded-full px-5 py-3 focus:outline-none mt-2"
            />

            <datalist id="Online / COD">
              <option value="Easy Paisa" />
              <option value="Jazz Cash" />
              <option value="HBL Account" />
              <option value="Cash On Delivery" />
            </datalist>
          </div>
        </div>

        <div className="hidden lg:block w-[2px] bg-gray-300"></div>

        {/* RIGHT SIDE */}
        <div className="w-full lg:w-[40%]">
          <h2 className="text-2xl font-bold mb-4">Order Summary</h2>

          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <div>
              <img
                src={img8}
                className="w-32 h-32 sm:w-40 sm:h-40 bg-gray-200 rounded-3xl"
              />
            </div>

            <div>
              <h1 className="font-bold">Chappal</h1>

              <p className="mt-2 font-bold">
                DENIM PESHAWARI CHAPPAL (NDL X <br />
                KP SHOP Collections)
              </p>

              <p className="mt-2">Size: XL</p>
              <p className="mt-2">Color: Yellow</p>

              <h1 className="font-bold mt-2">Price: Rs. 4500</h1>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-6 text-lg sm:text-2xl">
            <h1 className="font-semibold">SubTotal</h1>
            <h1 className="font-bold">RS: 4500</h1>

            <h1 className="font-semibold">Shipping Charges</h1>
            <h1 className="font-bold">RS: 1200</h1>

            <h1 className="font-semibold">Discount</h1>
            <h1 className="font-bold">RS: 120</h1>

            <h1 className="font-semibold">Total</h1>
            <h1 className="text-amber-400 font-bold">RS: 6000</h1>
          </div>

          <div className="mt-8 border-b"></div>

          <div>
            <h1 className="font-semibold text-xl sm:text-2xl mt-4">
              Arriving time: 24 hours
            </h1>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default Checkout;
