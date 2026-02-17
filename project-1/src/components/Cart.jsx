import React, { useEffect, useState } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

const Cart = () => {
  const [cart, setCart] = useState([]);

  /* ===============================
   pageLoad take Cart from LocalStorage
================================ */
  useEffect(() => {
    const savedCart = localStorage.getItem("cart");

    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  /* ===============================
   Save Cart (Helper Function)
================================ */
  const saveCart = (newCart) => {
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
  };

  /* ===============================
   Increase Quantity
================================ */
  const increase = (id) => {
    const updatedCart = cart.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          quantity: item.quantity + 1,
        };
      }
      return item;
    });

    saveCart(updatedCart);
  };

  /* ===============================
   Decrease Quantity
================================ */
  const decrease = (id) => {
    const updatedCart = cart.map((item) => {
      if (item.id === id && item.quantity > 1) {
        return {
          ...item,
          quantity: item.quantity - 1,
        };
      }
      return item;
    });

    saveCart(updatedCart);
  };

  /* ===============================
   Remove Item
================================ */
  const removeItem = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);

    saveCart(updatedCart);
  };

  /* ===============================
   Calculate Total
================================ */
  let subtotal = 0;

  cart.forEach((item) => {
    const price = item.saleprice || item.price;
    subtotal += Number(price) * item.quantity;
  });

  const shipping = 200;
  const discount = 120;

  const total = subtotal + shipping - discount;

  return (
    <>
      <Navbar />

      <div className="w-full min-h-screen bg-white px-6 md:px-20 py-10">
        <h1 className="text-3xl font-bold text-center mt-[100px]">CART</h1>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* LEFT */}
          <div className="w-full lg:w-[65%]">
            <h2 className="text-xl font-semibold mb-6">
              {cart.length} items in your cart
            </h2>

            {cart.length === 0 && (
              <p className="text-center text-gray-500">Your Cart is Empty</p>
            )}

            {cart.length > 0 && (
              <>
                <div className="grid grid-cols-4 gap-8 font-semibold border-b pb-3 mb-6">
                  <p>Products</p>
                  <p className="ml-6">Price</p>
                  <p className="ml-6">Quantity</p>
                  <p className="ml-6">Total</p>
                </div>

                {cart.map((item) => (
                  <div key={item.id}>
                    <div className="grid grid-cols-4 items-center gap-2">
                      {/* Product */}
                      <div className="flex gap-4">
                        <img
                          src={item.image}
                          className="w-20 h-30 rounded-xl"
                        />

                        <div>
                          <p className="font-bold">{item.title}</p>

                          <p className="text-sm">{item.disc}</p>

                          <p className="font-semibold">{item.saleprice}</p>

                          <p className="font-semibold">{item.color}</p>
                          <button
                            onClick={() => removeItem(item.id)}
                            className="text-yellow-500 text-semibold mt-1"
                          >
                            Remove
                          </button>
                        </div>
                      </div>

                      {/* Price */}
                      <p className="ml-6">Rs. {item.saleprice || item.price}</p>

                      {/* Qty */}
                      <div className="flex items-center gap-3 ml-6">
                        <button
                          onClick={() => decrease(item.id)}
                          className="w-7 h-7 border rounded-full"
                        >
                          -
                        </button>

                        <span>{item.quantity}</span>

                        <button
                          onClick={() => increase(item.id)}
                          className="w-7 h-7 border rounded-full"
                        >
                          +
                        </button>
                      </div>

                      {/* Total */}
                      <p className="text-yellow-500 font-semibold ml-6">
                        Rs. {(item.saleprice || item.price) * item.quantity}
                      </p>
                    </div>

                    <hr className="my-6" />
                  </div>
                ))}
              </>
            )}
          </div>

          {/* RIGHT */}
          <div className="w-full lg:w-[35%] border-l lg:pl-12 space-y-12">
            <div>
              <h3 className="font-semibold mb-4">Coupon Code</h3>

              <input
                className="w-full border rounded-full px-5 py-3 mb-4"
                placeholder="Coupon Code"
              />

              <button className="w-full bg-yellow-400 py-3 rounded-full text-white font-semibold">
                APPLY
              </button>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Total</h3>

              <div className="space-y-4">
                <div className="flex justify-between">
                  <p>Subtotal</p>
                  <p>Rs. {subtotal}</p>
                </div>

                <div className="flex justify-between">
                  <p>Shipping</p>
                  <p>Rs. {shipping}</p>
                </div>

                <div className="flex justify-between">
                  <p>Discount</p>
                  <p>Rs. {discount}</p>
                </div>

                <hr />

                <div className="flex justify-between font-bold">
                  <p>Total</p>

                  <p className="text-yellow-500">Rs. {total}</p>
                </div>
              </div>
            </div>

            <Link to="/checkout">
              <button className="w-full bg-yellow-400 py-4 rounded-full font-semibold text-white">
                CHECKOUT
              </button>
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Cart;
