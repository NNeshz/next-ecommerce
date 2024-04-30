import { create } from "zustand";
import { ICategory, IProduct } from "@/utils/types";
import { Products, Categories } from "@/app/libs/data";

interface ProductsStore {
  products: IProduct[];
  filteredProducts: IProduct[];
  category: ICategory[];
  categoryFilter: string;
  priceFilter: number;
}

interface ProductsStoreActions {
  getAllProducts: () => void;
  filterProductByName: (name: string) => void;
  filterProduct: () => void;
  changeCategoryFilter: (category: string) => void;
  changePriceFilter: (price: number) => void;
  resetProducts: () => void;
}

export const useProductsStore = create<ProductsStore & ProductsStoreActions>(
  (set) => ({
    products: [...Products],
    category: [...Categories],
    categoryFilter: "",
    priceFilter: 0,
    filteredProducts: [],
    getAllProducts: () => {
      const allProducts = Products;
      set({ products: allProducts });
    },
    filterProductByName: (name: string) => {
      set((state) => {
        return {
          filteredProducts: [
            ...state.products.filter((product) =>
              product.title.toLowerCase().includes(name.toLowerCase())
            ),
          ],
        };
      });
    },
    filterProduct: () => {
      set((state) => {
        if (state.categoryFilter !== "" && state.priceFilter === 0) {
          return {
            filteredProducts: [
              ...state.products.filter(
                (product) => product.category.name === state.categoryFilter
              ),
            ],
          };
        } else if (state.categoryFilter === "" && state.priceFilter > 0) {
          return {
            filteredProducts: [
              ...state.products.filter(
                (product) => product.price >= state.priceFilter
              ),
            ],
          };
        } else if (state.categoryFilter !== "" && state.priceFilter > 0) {
          return {
            filteredProducts: [
              ...state.products.filter((product) => {
                return (
                  product.category.name === state.categoryFilter &&
                  product.price >= state.priceFilter
                );
              }),
            ],
          };
        } else {
          return { filteredProducts: [...state.products] };
        }
      });
    },
    changeCategoryFilter: (category: string) => {
      set({ categoryFilter: category });
    },
    changePriceFilter: (price: number) => {
      set({ priceFilter: price });
    },
    resetProducts: () => {
      set({
        filteredProducts: [...Products],
        categoryFilter: "",
        priceFilter: 0,
      });
    },
  })
);
