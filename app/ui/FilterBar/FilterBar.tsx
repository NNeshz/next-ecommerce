"use client";

import { useGetCategories } from "@/hooks/useGetCategories";
import { useProductsStore } from "@/store/useProducts";

export default function FilterBar() {
  const categories = useGetCategories();
  const filterProduct = useProductsStore((state) => state.filterProduct);
  const changeCategoryFilter = useProductsStore((state) => state.changeCategoryFilter);
  const changePriceFilter = useProductsStore((state) => state.changePriceFilter);
  const categoryFilter = useProductsStore((state) => state.categoryFilter);
  const priceFilter = useProductsStore((state) => state.priceFilter);
  const resetFilters = useProductsStore((state) => state.resetProducts);

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    changeCategoryFilter(e.target.value);
  };

  const handlePriceChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    changePriceFilter(parseInt(e.target.value));
  };

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(categoryFilter, priceFilter)
    filterProduct();
  };

  return (
    <form className="flex flex-col w-60 pr-4" onSubmit={handleSearch}>
      <label htmlFor="" className="text-lg font-semibold">
        Category
      </label>
      <select
        name="category"
        id="category"
        className="bg-black text-white mt-4"
        onChange={handleCategoryChange}
        value={categoryFilter}
      >
        <option value="All" className="text-gray-500">
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
        value={priceFilter}
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
        onClick={resetFilters}
      >
        Reset
      </button>
    </form>
  );
}
