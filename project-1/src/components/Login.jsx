import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom' 
import user from '../assets/images/user.png'
import Frame from '../assets/images/Frame 33.png'

const Login = () => {

  const [email , setEmail] = useState("")
  const [password , setPassword] = useState("")
  const navigate = useNavigate();
  
  const handleclick = (e) => {
    e.preventDefault();

    if ( email && password ) {
      console.log("Form Submitted" , {email, password})
      navigate('/')
    }else
    {
      alert("plz login first...")
    }

  }


  return (
    <div className="relative min-h-screen">
      <img
        src={Frame}
        alt=""
        className="absolute inset-0 w-full h-full object-cover blur"
      />

      <div className="relative flex justify-center items-center min-h-screen px-4">

        <div className="w-full max-w-md sm:max-w-lg md:max-w-xl bg-gradient-to-r from-black/50 to-gray-900/50 border border-black rounded-3xl p-6 sm:p-8">

          <div className="text-center mb-6">
            <h1 className="font-bold text-3xl sm:text-4xl mb-4">Login</h1>

            <img
              src={user}
              className="w-32 h-32 sm:w-40 sm:h-40 mx-auto"
            />
          </div>

          
          <div className="space-y-5">

            <div>
              <label className="block mb-1 font-semibold text-amber-400">
                Email
              </label>

              <input
                type="text"
                value={email}
                onChange={(e) => { setEmail(e.target.value)}}
                placeholder="Enter your email"
                className="w-full border rounded-full px-5 py-3 text-white bg-transparent focus:outline-none"
              />
            </div>

            <div>
              <label className="block mb-1 font-semibold text-amber-400">
                Password
              </label>

              <input
                type="password"
                value={password}
                onChange={(e) => { setPassword(e.target.value)}}
                placeholder="Enter your password"
                className="w-full border rounded-full px-5 py-3 text-white bg-transparent focus:outline-none"
              />
            </div>

          </div>

          
          <button
          type='submit'
          onClick={handleclick}
           
          className="w-full bg-amber-400 text-white font-bold py-3 rounded-full mt-8 hover:bg-amber-500 transition"
          >
            Login
          </button>
       <p className='text-center text-amber-300 mt-4'>Don,t have an account?
        <span 
        onClick={()=>navigate("/signup")}
        className='hover:text-amber-100'>Sign Up</span></p>
        </div>
      </div>
    </div>
  )
}

export default Login
