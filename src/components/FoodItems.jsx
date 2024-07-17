import React from "react";
import FoodCard from "./FoodCard";
import FoodData from "../data/FoodData.js";
import toast, { Toaster } from "react-hot-toast";

const FoodItems = ({ products }) => {
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <div className="mx-6 flex flex-wrap gap-10 justify-center my-10">
        {products.map((item, index) => {
          return (
            <FoodCard
              key={index}
              id={item.id}
              name={item.name}
              price={item.price}
              desc={item.desc}
              rating={item.rating}
              img={item.img}
            />
          );
        })}
      </div>
    </>
  );
};

export default FoodItems;
