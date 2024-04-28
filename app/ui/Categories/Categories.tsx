"use client";

import CategoryCard from "./CatecoryCard";
import { ICategory } from "@/utils/types";
import { useCategoriesStore } from "@/store/useCategories";
import { useEffect } from "react";

export default function Categories() {
  const categories = useCategoriesStore((state) => state.categories);
  const getAllCategories = useCategoriesStore(
    (state) => state.getAllCategories
  );

  useEffect(() => {
    getAllCategories();
  }, [getAllCategories]);

  return (
    <div className="flex w-full flex-col mt-20 px-10 md:px-20">
      <h1 className="text-4xl font-bold mb-4">Categories</h1>
      <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-5 justify-center">
        {categories.map((cat: ICategory) => (
          <CategoryCard image={cat.image} title={cat.name} key={cat.id} />
        ))}
      </div>
    </div>
  );
}
