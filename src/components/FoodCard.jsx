import React from "react";
import { IoMdStar } from "react-icons/io";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/CartSlice";
import toast from "react-hot-toast";
const FoodCard = ({ id, name, price, desc, img, rating }) => {
  const dispatch = useDispatch();
  return (
    <div className=" font-bold w-[250px] bg-white p-5 flex flex-col rounded-lg gap-2">
      <img
        className=" w-auto h-[150px] hover:scale-[1.2] transition-all duration-500 ease-in-out"
        src={img}
        alt=""
      />
      <div className=" text-sm flex justify-between">
        <h2 className="font-bold text-md">{name}</h2>
        <span className="text-green-500">RS:{price}</span>
      </div>
      <p className="text-sm font-normal ">{desc.slice(0, 75)}.....</p>
      <div className=" flex justify-between  ">
        <span className="flex items-center gap-1 ">
          <IoMdStar className="text-yellow-400" /> {rating}
        </span>
        <button
          onClick={() => {
            dispatch(addToCart({ id, name, price, rating, img, qty: 1 }));
            toast.success(`added ${name} to cart`);
          }}
          className="p-1 text-white bg-green-500 hover:bg-green-600 rounded-lg text-sm"
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default FoodCard;
