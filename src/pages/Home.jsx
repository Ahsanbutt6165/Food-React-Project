import React, { useState } from "react";
import Navbar from "../components/Navbar";
import CategoryMenu from "../components/CategoryMenu";
import FoodItems from "../components/FoodItems";
import Cart from "../components/Cart";
import FoodData from "../data/FoodData";

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = ["All", "Breakfast", "Lunch", "Dinner", "Snacks"];

  const filteredProducts = FoodData.filter(
    (product) =>
      selectedCategory === "All" || product.category === selectedCategory
  ).filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <Navbar searchQuery={searchQuery} onSearch={setSearchQuery} />
      <CategoryMenu
        categories={categories}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />
      <FoodItems products={filteredProducts} />
      <Cart />
    </>
  );
};

export default Home;
