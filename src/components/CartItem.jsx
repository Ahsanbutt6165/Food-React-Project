import React from "react";
import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { remoreFromCart } from "../store/CartSlice";
import { incewmentQty, decrementQty } from "../store/CartSlice";
import toast from "react-hot-toast";
remoreFromCart;
const CartItem = ({ id, name, price, img, qty }) => {
  const dispatch = useDispatch();
  return (
    <div className="flex shadow-md gap-2 mb-3">
      <img className="w-[50px] h-[50px]" src={img} alt="" />
      <div className=" flex-1 ">
        <div className="flex justify-between mr-8 ">
          <h2 className="font-bold text-gray-800">{name}</h2>
          <MdDelete
            onClick={() => {
              dispatch(remoreFromCart({ id }));
              toast.success(`Remove ${name} from cart`);
            }}
            className="text-gray-600 cursor-pointer"
          />
        </div>

        <div className=" flex justify-between">
          <span className="text-green-500">RS: {price}</span>
          <div className="flex gap-2 mr-6 ">
            {" "}
            <CiCirclePlus
              onClick={() => dispatch(incewmentQty({ id }))}
              className=" cursor-pointer text-2xl  border-gray-600 tet-gray-400 hover:bg-green-400 hover:text-white rounded-full"
            />
            <span>{qty}</span>
            <CiCircleMinus
              onClick={() =>
                qty > 1 ? dispatch(decrementQty({ id })) : (qty = 0)
              }
              className=" cursor-pointer text-2xl  border-gray-600 tet-gray-400 hover:bg-green-400 hover:text-white rounded-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
