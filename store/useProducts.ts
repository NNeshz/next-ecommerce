import { create } from "zustand";
import { IProduct } from "@/utils/types";

import { Products } from "@/app/libs/data";

interface ProductsStore {
  products: IProduct[];
}

interface ProductsStoreActions {
  getAllProducts: () => void;
}

export const useProductsStore = create<ProductsStore & ProductsStoreActions>(
  (set) => ({
    products: [],
    getAllProducts: () => {
      const allProducts = Products;
      set({ products: allProducts });
    },
  })
);
