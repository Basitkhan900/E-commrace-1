import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import User1 from "../assets/images/user.png";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Profile = () => {
  const [menu, setMenu] = useState(false);
  const navigate = useNavigate();

  return (
    <div>
      <Navbar />

      
      <div className="relative grid grid-cols-2 items-center justify-items-center-safe ml-[500px] mt-[180px]">

        <h1 className="text-2xl font-bold uppercase">profile</h1>

        
        <h2
          onClick={() => setMenu(!menu)}
          className="text-xl font-bold uppercase hover:text-amber-400 cursor-pointer"
        >
          edit
        </h2>

        
        {menu && (
          <div className="absolute right-30 top-10 bg-white shadow-lg border rounded-md w-44 z-50">

            <ul className="py-2 text-sm">
              <li
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => { navigate("/cart");
                  setMenu(false);
                }}
              >
                My Cart
              </li>
              
              <li 
              onClick={() => { navigate('/changepassword');
              setMenu(false); 
                }}  

              className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                Change Password
              </li>

              <li
              onClick={() => {navigate('/sittings')
                setMenu(false)
              }}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
              >
                Sittings
              </li>

              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                ______________________
              </li>

              <li 
              onClick={() => {navigate('/login')
                setMenu(false)
              }}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
              >
                logout
              </li>

            </ul>
          </div>
        )}
      </div>

      <div>
        <img src={User1} className="mt-10 ml-[610px] w-[300px] h-[300px]" />

        <h1 className="ml-[655px] mt-6 text-2xl font-bold uppercase">
          Basit Bangash
        </h1>

        <h3 className="ml-[665px] mt-4 text-sm font-semibold">
          BasitBangash@gmail.com
        </h3>
      </div>

      <Footer />
    </div>
  );
};

export default Profile;
