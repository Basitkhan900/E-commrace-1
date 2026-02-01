import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/Logo.png";
import { CiSearch, CiShoppingCart, CiUser } from "react-icons/ci";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/20 ">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between text-white">

        {/* Logo */}
        <img
          src={logo}
          alt="logo"
          className="h-8 object-contain"
        />

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-6 text-sm font-semibold uppercase">
          <Link className="hover:text-amber-400" to="/">Home</Link>
          <Link className="hover:text-amber-400" to="/Products">Products</Link>
          <Link className="hover:text-amber-400" to="/Favorate">Favorite</Link>
          <Link className="hover:text-amber-400" to="/NewArrival">New Arrival</Link>
          <Link className="hover:text-amber-400" to="/MostPopular">Most Popular</Link>
          <Link className="hover:text-amber-400" to="/About">About Us</Link>
        </nav>

        
        <div className="flex items-center gap-4">
          <CiSearch size={22} />
          <CiShoppingCart size={22} />
          <CiUser size={22} />

          <button
            className="md:hidden text-3xl"
            onClick={() => setOpen(!open)}
          >
            {open ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden
        ${open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
      >
        <div className="bg-black px-6 py-4 flex flex-col gap-4 text-white font-semibold uppercase">
          <Link onClick={() => setOpen(false)} to="/">Home</Link>
          <Link onClick={() => setOpen(false)} to="/Products">Products</Link>
          <Link onClick={() => setOpen(false)} to="/Favorate">Favorite</Link>
          <Link onClick={() => setOpen(false)} to="/NewArrival">New Arrival</Link>
          <Link onClick={() => setOpen(false)} to="/MostPopular">Most Popular</Link>
          <Link onClick={() => setOpen(false)} to="/About">About Us</Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
