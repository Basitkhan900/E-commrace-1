import React from 'react'
import frm115 from "../assets/images/Frame 115.png";
import Navbar from './Navbar';
import Footer from './Footer';
import User1 from "../assets/images/user.png";
const Changepassword = () => {
  return (
    <div>
        <Navbar/>
      <div>
        <h1 className='text-2xl font-bold uppercase mt-[200px] text-center'>EDIT profile</h1>
        <img src={User1} className=" mt-10 ml-[610px] w-[300px] h-[300px]" />
      </div>

      <div>
        <input type="text"
        placeholder='Enter old Password'
        className='w-[500px]  rounded-full border px-5 py-3 mt-10 ml-[500px] focus:outline-none'
        />


        <input type="text"
        placeholder='Enter New Password'
        className='w-[500px]  rounded-full border px-5 py-3 mt-10 ml-[500px] focus:outline-none'
        />
      </div>

      <div>
        <button
        className='w-[500px]  rounded-full border px-5 py-3 mt-10 ml-[500px] bg-amber-400 text-white font-semibold uppercase hover:bg-amber-500 transition duration-300'
        >Update Password</button>
      </div>
      <Footer/>
    </div>
  )
}

export default Changepassword
