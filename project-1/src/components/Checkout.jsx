import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Checkout = () => {
  
  // Cart State
  const [cart, setCart] = useState([]);

  
  const [form, setForm] = useState({
    contact: "",
    name: "",
    phone: "",
    state: "",
    country: "",
    street: "",
    zip: "",
    payment: "",
  });

  

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("cart")) || [];

    setCart(data);
  }, []);

  

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  

  const placeOrder = () => {
    
    if (
      !form.contact ||
      !form.name ||
      !form.phone ||
      !form.state ||
      !form.country ||
      !form.street ||
      !form.zip ||
      !form.payment
    ) {
      alert("Please first fill all the address fields ");
      return;
    }

    if (cart.length === 0) {
      alert("Cart is Empty ❗");
      return;
    }

    
    localStorage.setItem("userAddress", JSON.stringify(form));

    alert("Order Placed Successfully ");

    // Clear Cart
    localStorage.removeItem("cart");

    window.dispatchEvent(new Event("cartUpdate"));
  };

  // for the total calculations

  const subtotal = cart.reduce(
    (sum, item) => sum + Number(item.saleprice || item.price) * item.quantity,
    0,
  );

  const shipping = 1200;
  const discount = 120;

  const total = subtotal + shipping - discount;


  return (
    <>
      <Navbar />

      <div className="px-4 sm:px-10 lg:px-20 py-8 min-h-screen bg-white">
        <h1 className="uppercase font-bold text-3xl sm:text-4xl mt-[100px] text-center">
          Checkout
        </h1>

        {/* MAIN layout */}
        <div className="flex flex-col lg:flex-row mt-16 gap-10">
          {/* LEFT SIDE */}
          <div className="w-full lg:w-[60%]">
            <h1 className="text-2xl font-semibold mt-5">Address</h1>

            {/* Contact */}
            <div className="mt-4">
              <label>Contact</label> <br />
              <input
                name="contact"
                value={form.contact}
                onChange={handleChange}
                type="text"
                placeholder="Email / Phone Number"
                className="w-full sm:w-[80%] border rounded-full px-5 py-3 mb-4 focus:outline-none mt-2"
              />
            </div>

            <label>Address</label>

            <div className="mt-2">
              
              <div className="flex flex-col sm:flex-row gap-3 mb-3">
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  type="text"
                  placeholder="Enter Your Name"
                  className="w-full sm:w-[40%] border rounded-full px-5 py-3"
                />

                <input
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  type="text"
                  placeholder="Phone Number"
                  className="w-full sm:w-[40%] border rounded-full px-5 py-3"
                />
              </div>

              
              <div className="flex flex-col sm:flex-row gap-3 mb-3">
                <select
                  name="state"
                  value={form.state}
                  onChange={handleChange}
                  className="w-full sm:w-[40%] border rounded-full px-5 py-3 mt-2"
                >
                  <option value="">State</option>
                  <option value="Punjab">Punjab</option>
                  <option value="Sindh">Sindh</option>
                  <option value="KPK">KPK</option>
                  <option value="Balochistan">Balochistan</option>
                </select>

                <select
                  name="country"
                  placeholder="select your country"
                  value={form.country}
                  onChange={handleChange}
                  className="w-full sm:w-[40%] border rounded-full px-5 py-3 mt-2"
                >
                  <option value=""> Country</option>
                  <option value="Pakistan">Pakistan</option>
                  <option value="India">India</option>
                  <option value="Dubai">Dubai</option>
                  <option value="Bangladesh">Bangladesh</option>
                </select>
              </div>

             
              <div className="flex flex-col sm:flex-row gap-3 mb-3">
                <select
                  name="street"
                  value={form.street}
                  onChange={handleChange}
                  className="w-full sm:w-[40%] border rounded-full px-5 py-3 mt-2"
                >
                  <option value="">Street</option>
                  <option value="Street-1">Street1</option>
                  <option value="Street-2">Street2</option>
                  <option value="Street-3">Street3</option>
                  <option value="Street-4">Street4</option>
                </select>

                <input
                  name="zip"
                  value={form.zip}
                  onChange={handleChange}
                  type="text"
                  placeholder="Zip Code"
                  className="w-full sm:w-[40%] border rounded-full px-5 py-3"
                />
              </div>
            </div>

            
            <div className="mt-8">
              <h1 className="text-2xl font-semibold uppercase">Payment</h1>

              <h2 className="font-semibold mt-2 uppercase">Payment method</h2>

              <select
                name="payment"
                value={form.payment}
                onChange={handleChange}
                className="w-full sm:w-[81%] border rounded-full px-5 py-3 mt-2"
              >
                <option value="">Select Payment</option>
                <option value="COD">Cash On Delivery</option>
                <option value="Easypaisa">Easypaisa</option>
                <option value="JazzCash">JazzCash</option>
                <option value="Bank">Bank Transfer</option>
              </select>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="w-full lg:w-[40%]">
            <h2 className="text-2xl font-bold mb-4">Order Summary</h2>

            {/* Products */}
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex flex-col sm:flex-row gap-4 mt-4"
              >
                <div>
                  <img
                    src={item.image}
                    className="w-34 h-34 sm:w-40 sm:h-40 bg-gray-200 rounded-3xl"
                  />
                </div>

                <div>
                  <h1 className="font-bold">{item.name || item.disc}</h1>

                  <p className="mt-2">Qty: {item.quantity}</p>

                  <h1 className="font-bold mt-2">
                    Price: Rs. {item.saleprice || item.price}
                  </h1>
                </div>
              </div>
            ))}

           
            <div className="mt-8 grid grid-cols-2 gap-6 text-lg sm:text-2xl">
              <h1 className="font-semibold">SubTotal</h1>
              <h1 className="font-bold">RS: {subtotal}</h1>

              <h1 className="font-semibold">Shipping Charges</h1>
              <h1 className="font-bold">RS: {shipping}</h1>

              <h1 className="font-semibold">Discount</h1>
              <h1 className="font-bold">RS: {discount}</h1>

              <h1 className="font-semibold">Total</h1>
              <h1 className="text-amber-400 font-bold">RS: {total}</h1>
            </div>

            <div className="mt-8 border-b"></div>

            <div>
              <h1 className="font-semibold text-xl sm:text-2xl mt-4">
                Arriving time: 24 hours
              </h1>
            </div>

            
            <button
              onClick={placeOrder}
              className="w-full mt-6 bg-yellow-400 py-4 rounded-full font-semibold text-white"
            >
              PLACE ORDER
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Checkout;
