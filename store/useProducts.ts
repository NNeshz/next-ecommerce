import { create } from "zustand";
import { IProduct } from "@/utils/types";

import { Products } from "@/app/libs/data";

interface ProductsStore {
  products: IProduct[];
}

interface IFilters {
  category: string;
  price: number;
}

interface ProductsStoreActions {
  getAllProducts: () => void;
  filterProductByName: (name: string) => void;
  filterProductByCategory: (category: string, price: number) => void;
  filterProducts: (filterCriteria: IFilters) => void,
}

export const useProductsStore = create<ProductsStore & ProductsStoreActions>(
  (set, get) => ({
    products: [],
    getAllProducts: () => {
      const allProducts = Products;
      set({ products: allProducts });
    },
    filterProductByName: (name: string) => {
      const products = Products;
      const filteredProduct = products.filter((product) =>
        product.title.toLowerCase().includes(name.toLowerCase())
      );
      set({ products: filteredProduct });
    },
    filterProductByCategory: (categoryName: string, price: number) => {
      if (categoryName && price > 0) {
        const filteredProducts = get().products.filter((product) => {
          return (
            product.category.name === categoryName && product.price >= price
          );
        });
        set({ products: filteredProducts });
      } else if (categoryName && !price) {
        const filteredProducts = get().products.filter((product) => {
          return product.category.name === categoryName;
        });
        set({ products: filteredProducts });
      } else if (!categoryName && price > 0) {
        const filteredProducts = get().products.filter((product) => {
          return product.price >= price;
        });
        set({ products: filteredProducts });
      }
    },
    filterProducts: (filterCriteria: IFilters) => {}
  })
);
