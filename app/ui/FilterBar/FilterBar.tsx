"use client";

import { useGetCategories } from "@/hooks/useGetCategories";

export default function FilterBar() {
  
  const categories = useGetCategories();

  return (
    <form className="flex flex-col w-60 pr-4">
      <label htmlFor="" className="text-lg font-semibold">Category</label>
      <select name="category" id="category" className="bg-black text-white mt-4">
        <option value="all" className="text-gray-500">All</option>
        {categories.map((category) => (
          <option key={category.id} value={category.id} className="text-gray-500">
            {category.name}
          </option>
        ))}
      </select>

      <label htmlFor="" className="text-lg font-semibold mt-8">Price</label>
      <select name="price" id="price" className="bg-black text-white mt-4">
        <option value="all" className="text-gray-500">All</option>
        <option value="0-100" className="text-gray-500">$0 - $100</option>
        <option value="100-200" className="text-gray-500">$100 - $200</option>
        <option value="200-300" className="text-gray-500">$200 - $300</option>
        <option value="300-400" className="text-gray-500">$300 - $400</option>
        <option value="400-500" className="text-gray-500">$400 - $500</option>
        <option value="500-i" className="text-gray-500">$501 +</option>
      </select>
      <button type="submit" className="bg-yellow-400 text-black py-2 mt-4 font-semibold rounded-md">Search</button>
      <button className="bg-red-500 text-black py-2 mt-4 font-semibold rounded-md">Reset</button>
    </form>
  );
}