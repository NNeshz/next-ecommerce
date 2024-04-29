import { useProductsStore } from "@/store/useProducts";
import { useEffect } from "react";

export const useGetProducts = () => {
    const products = useProductsStore((state) => state.products);
    const getAllProducts = useProductsStore((state) => state.getAllProducts);
  
    useEffect(() => {
      getAllProducts();
    }, []);
    return products;
  }