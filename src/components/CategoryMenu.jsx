import React, { useState } from "react";

const CategoryMenu = ({ categories, selectedCategory, onSelectCategory }) => {
  return (
    <div className="px-6">
      <h3 className="text-xl font-semibold"> Find the best food</h3>
      <div className="my-5 flex gap-3 overflow-x-scroll scroll-smooth lg:overflow-x-hidden">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => onSelectCategory(category)}
            style={{
              fontWeight: category === selectedCategory ? "bold" : "normal",
            }}
            className="px-3 p-2 bg-gray-200 font-bold rounded-lg hover:bg-green-500 hover:text-white"
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryMenu;
