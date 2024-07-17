import React from "react";

const Navbar = ({ searchQuery, onSearch }) => {
  return (
    <nav className=" bg-green-500  flex flex-col lg:flex-row justify-between  py-3 px-6 mb-10">
      <div className="">
        <h3 className="text-xl font-bold text-gray-600">
          {new Date().toUTCString().slice(0, 16)}
        </h3>
        <h1 className=" text-2xl font-bold">BuyTaste</h1>
      </div>
      <div className="">
        <input
          onChange={(e) => onSearch(e.target.value)}
          className="p-3 border border-gray-400 text-sm rounded-full outline-none w-full lg:w-[25vw]"
          type="search"
          name="search"
          placeholder="Search here"
        />
      </div>
    </nav>
  );
};

export default Navbar;
