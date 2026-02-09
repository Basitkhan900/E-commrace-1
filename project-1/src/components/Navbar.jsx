import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import logo from "../assets/images/Logo.png";
import { CiSearch, CiShoppingCart, CiUser } from "react-icons/ci";
import { HiMenu, HiX } from "react-icons/hi";
import Search from "./Search";


const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [searchopen, setSearchOpen] = useState();

  const clicknav = ( { isActive } ) =>      //if we click on any navlink it will active on yellow color
    
    isActive ? "text-amber-400" : "hover:text-amber-400";

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
        <nav className="hidden md:flex gap-6 text-sm font-semibold uppercase" >
          <NavLink  to="/" className={clicknav}>Home</NavLink>
          <NavLink  to="/Products" className={clicknav}>Products</NavLink>
          <NavLink  to="/Favorate" className={clicknav}>Favorite</NavLink>
          <NavLink  to="/NewArrival" className={clicknav}>New Arrival</NavLink>
          <NavLink  to="/MostPopular" className={clicknav}>Most Popular</NavLink>
          <NavLink  to="/About" className={clicknav}>About Us</NavLink>
        </nav>

        
        <div className="flex items-center gap-4">
          <CiSearch size={22}
          onClick={() => setSearchOpen(prev => !prev)}
          />


          <Link to="/cart"> <CiShoppingCart size={22} /></Link>


          <Link to={'/profile'}><CiUser size={22} /></Link>

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
          <NavLink onClick={() => setOpen(false)} to="/" className={clicknav}>Home</NavLink>
          <NavLink onClick={() => setOpen(false)} to="/Products" className={clicknav}>Products</NavLink>
          <NavLink onClick={() => setOpen(false)} to="/Favorate" className={clicknav}>Favorite</NavLink>
          <NavLink onClick={() => setOpen(false)} to="/NewArrival" className={clicknav}>New Arrival</NavLink>
          <NavLink onClick={() => setOpen(false)} to="/MostPopular" className={clicknav}>Most Popular</NavLink>
          <NavLink onClick={() => setOpen(false)} to="/About" className={clicknav}>About Us</NavLink>
        </div>
      </div>
      {searchopen && <Search onclose={onclose}/>}
    </header>
    
  );
};

export default Navbar;
