import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import Frame from "../assets/images/Frame 33.png";
import user from "../assets/images/user.png";

const Signup = () => {

  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name && email && password) {

      console.log("Account Created:", { name, email, password });

      alert("Account Created Successfully 🎉");

      navigate("/login");

    } else {
      alert("Please fill all fields!");
    }
  };

  return (
    <div className="relative min-h-screen">

      <img
        src={Frame}
        alt=""
        className="absolute inset-0 w-full h-full object-cover blur-sm"
      />

      <div className="relative flex justify-center items-center min-h-screen px-4">

        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md bg-gradient-to-r from-black/50 to-gray-900/50
          border border-black rounded-3xl p-6"
        >

          {/* Header */}
          <div className="text-center mb-6">
            <h1 className="font-bold text-3xl mb-4">Sign Up</h1>

            <img
              src={user}
              alt="user"
              className="w-32 h-32 mx-auto"
            />
          </div>

          {/* Name */}
          <div className="mb-4">
            <input
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-3 rounded-full bg-transparent border text-white"
            />
          </div>

          {/* Email */}
          <div className="mb-4">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 rounded-full bg-transparent border text-white"
            />
          </div>

          {/* Password */}
          <div className="mb-4">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 rounded-full bg-transparent border text-white"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-amber-400 py-3 rounded-full font-bold text-white"
          >
            Sign Up
          </button>


          <p className="text-center mt-4 text-sm text-white">
            Already have an account?{" "}
            <span
              onClick={() => navigate("/login")}
              className="text-amber-400 cursor-pointer font-semibold"
            >
              Login
            </span>
          </p>

        </form>

      </div>
    </div>
  );
};

export default Signup;
