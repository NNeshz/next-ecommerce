import { useCategoriesStore } from "@/store/useCategories";
import { useEffect } from "react";

export const useGetCategories = () => {
  const categories = useCategoriesStore((state) => state.categories);
  const getAllCategories = useCategoriesStore(
    (state) => state.getAllCategories
  );

  useEffect(() => {
    getAllCategories();
  }, []);
  return categories;
};
