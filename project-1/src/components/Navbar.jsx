import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/Logo.png";
import { IoIosSearch } from "react-icons/io";
import { MdOutlineShoppingCart } from "react-icons/md";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-black/50 w-full text-white">
      <div className="h-16 flex items-center justify-between px-4 md:px-8 ">
        <img src={logo} className="h-14 w-28 md:h-12" />

        <nav className="hidden md:flex gap-6 lg:gap-8 font-bold">
          <Link to="/">Home</Link>
          <Link to="/Products">Products</Link>
          <Link to="/Favorate">Favorates</Link>
          <Link to="/NewArrival">New Arrival</Link>
          <Link to="/MostPopular">Most Popular</Link>
          <Link to="/About">About Us</Link>
        </nav>

        <div className="flex items-center gap-4 text-xl md:text-2xl">
          <IoIosSearch />
          <MdOutlineShoppingCart />

          <button className="md:hidden text-3xl" onClick={() => setOpen(!open)}>
            {open ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </div>

      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out
        ${open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
      >
        <div className="bg-black/90 px-6 py-4 space-y-4 font-bold">
          <Link onClick={() => setOpen(false)} to="/">
            Home
          </Link>
          <Link onClick={() => setOpen(false)} to="/Products">
            Products
          </Link>
          <Link onClick={() => setOpen(false)} to="/Favorate">
            Favorates
          </Link>
          <Link onClick={() => setOpen(false)} to="/NewArrival">
            New Arrival
          </Link>
          <Link onClick={() => setOpen(false)} to="/MostPopular">
            Most Popular
          </Link>
          <Link onClick={() => setOpen(false)} to="/About">
            About Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
