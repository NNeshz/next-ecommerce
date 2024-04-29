import { create } from "zustand";
import { IProduct } from "@/utils/types";

import { Products } from "@/app/libs/data";

interface ProductsStore {
  products: IProduct[];
  category: string;
  price: number;
}

interface ProductsStoreActions {
  getAllProducts: () => void;
  filterProductByName: (name: string) => void;
}

export const useProductsStore = create<ProductsStore & ProductsStoreActions>(
  (set, get) => ({
    products: [],
    category: "",
    price: 0,
    getAllProducts: () => {
      const allProducts = Products;
      set({ products: allProducts });
    },
    filterProductByName: (name: string) => {
      const products = Products;
      const filteredProduct = products.filter((product) =>
        product.title.toLowerCase().includes(name.toLowerCase())
      );
      set({ products: filteredProduct }); // Actualizar filteredProducts en el estado
    },
    filterProductByCategory: (category: string) => {
      const filteredProduct = get().products.filter((product) => {
        return product.category.name === category;
      })
      set({ products: filteredProduct });
    }
  })
);
