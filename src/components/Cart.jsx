import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";
import { FaCartPlus } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
const Cart = () => {
  const navigate = useNavigate();
  const [activeCart, serActiveCart] = useState(false);
  const cartItem = useSelector((state) => state.cart.cart);

  const totalItems = cartItem.reduce(
    (totalQty, item) => totalQty + item.qty,
    0
  );
  const totalPrice = cartItem.reduce(
    (total, item) => total + item.qty * item.price,
    0
  );

  return (
    <>
      <div
        className={`fixed right-0 top-0 w-full lg:w-[20vw] bg-white h-full px-5 ${
          activeCart ? "translate-x-0" : "translate-x-full"
        } transition-all duration-500 z-10 `}
      >
        <div className="flex justify-between py-3">
          <span className="text-xl font-bold">My Order</span>
          <IoMdClose
            onClick={() => serActiveCart(!activeCart)}
            className="border-2 border-gray-600 text-gray-600 font-bold  text-2xl rounded-full hover:text-red-300 hover:border-red-300 cursor-pointer"
          />
        </div>

        {cartItem.length > 0 ? (
          cartItem.map((item, index) => {
            return (
              <CartItem
                key={index}
                id={item.id}
                name={item.name}
                price={item.price}
                img={item.img}
                qty={item.qty}
              />
            );
          })
        ) : (
          <h2 className=" text-center text-xl font-bold text-gray-800">
            Your cart is empty
          </h2>
        )}

        <div className="absolute bottom-0 ">
          <h3 className="font-semibold text-gray-800">Items : {totalItems} </h3>
          <h3 className="font-semibold text-gray-800">
            Total Amount :{totalPrice}{" "}
          </h3>
          <hr className="w-[90vw] lg:w-[18vw] my-2" />
          <button
            onClick={() => cartItem.length > 0 && navigate("/Success")}
            className="bg-green-500 font-bold px-3 text-white py-2 rounded-lg w-[90vw] lg:w-[18vw] mb-5"
          >
            Checkout
          </button>
        </div>
      </div>

      <FaCartPlus
        onClick={() => serActiveCart(!activeCart)}
        className={`text-5xl rounded-full bg-white shadow-md p-2 fixed bottom-4 right-4 cursor-pointer ${
          cartItem.length > 0 && "animate-bounce duration-[1000s] "
        }`}
      />
    </>
  );
};

export default Cart;
