"use client";

import { useGetCategories } from "@/hooks/useGetCategories";
import { useProductsStore } from "@/store/useProducts";
import { useState } from "react";

export default function FilterBar() {
  const categories = useGetCategories();
  const getFilterChange = useProductsStore(
    (state) => state.filterProductByCategory
  );
  const getAllProducts = useProductsStore((state) => state.getAllProducts);

  const [category, setCategory] = useState<string>("");
  const [price, setPrice] = useState<number>(0);

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCategory(e.target.value);
  };

  const handlePriceChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setPrice(Number(e.target.value));
  };

  const handleFilterChange = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    getFilterChange(category, price);
  };

  return (
    <form className="flex flex-col w-60 pr-4" onSubmit={handleFilterChange}>
      <label htmlFor="" className="text-lg font-semibold">
        Category
      </label>
      <select
        name="category"
        id="category"
        className="bg-black text-white mt-4"
        onChange={handleCategoryChange}
      >
        <option value="all" className="text-gray-500">
          All
        </option>
        {categories.map((category) => (
          <option
            key={category.id}
            value={category.name}
            className="text-gray-500"
          >
            {category.name}
          </option>
        ))}
      </select>

      <label htmlFor="" className="text-lg font-semibold mt-8">
        Price
      </label>
      <select
        name="price"
        id="price"
        className="bg-black text-white mt-4"
        onChange={handlePriceChange}
      >
        <option value={0} className="text-gray-500">
          All
        </option>
        <option value={20} className="text-gray-500">
          + $20
        </option>
        <option value={40} className="text-gray-500">
          + $40
        </option>
        <option value={60} className="text-gray-500">
          + $60
        </option>
        <option value={80} className="text-gray-500">
          + $80
        </option>
        <option value={100} className="text-gray-500">
          + $100
        </option>
      </select>
      <button
        type="submit"
        className="bg-yellow-400 text-black py-2 mt-4 font-semibold rounded-md"
      >
        Search
      </button>
      <button
        className="bg-red-500 text-black py-2 mt-4 font-semibold rounded-md"
        onClick={getAllProducts}
      >
        Reset
      </button>
    </form>
  );
}
