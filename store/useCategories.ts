import { create } from "zustand";
import { ICategory } from "@/utils/types";

import { Categories } from "@/app/libs/data";

interface CategoriesStore {
  categories: ICategory[];
}

interface CategoriesStoreActions {
  getAllCategories: () => void;
}

export const useCategoriesStore = create<CategoriesStore & CategoriesStoreActions>((set) => ({
    categories: [],
    getAllCategories: () => {
        const allCategories = Categories;
        set({ categories: allCategories });
    },
}))