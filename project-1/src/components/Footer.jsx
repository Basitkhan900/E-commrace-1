import React from "react";
import logo from "../assets/images/Logo.png";

const Footer = () => {
  return (
    <footer className="bg-yellow-50 mt-20 px-4 sm:px-8 py-10 font-bold">
      <div className=" max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center sm:text-left">
        <div className="flex justify-center sm:justify-start">
          <img src={logo} className="w-20 h-14" />
        </div>

        {/* Shop */}
        <div>
          <h1 className="text-xl sm:text-2xl mb-2">Shop</h1>
          <h2>Home</h2>
          <h2>Products</h2>
          <h2>New Arrival</h2>
          <h2>Most Popular</h2>
          <h2>Favorite</h2>
          <h2>Order</h2>
        </div>

        <div>
          <h1 className="text-xl sm:text-2xl mb-2">Customer Support</h1>
          <h2>Refund & Exchange Policy</h2>
          <h2>About Us</h2>
          <h2>FAQs</h2>
          <h2>Contact Us</h2>
        </div>

        <div>
          <h1 className="text-xl sm:text-2xl mb-2">Store Location</h1>
          <h2>University Town Peshawar</h2>
          <h2>+92 336 8222900</h2>
          <h2>+92 231 3180988</h2>
          <h2>Basitbangash12@gmail.com</h2>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
