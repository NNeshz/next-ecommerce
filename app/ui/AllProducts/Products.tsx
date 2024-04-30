"use client";

import Card from "../Card/Card";
import { IProduct } from "@/utils/types";
import { useProductsStore } from "@/store/useProducts";

export default function Products() {
  const filteredProducts = useProductsStore((state) => state.filteredProducts);
  const products = useProductsStore((state) => state.products);

  return (
    <div className="w-full grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-5 mb-20">
      {filteredProducts.length === 0
        ? products.map((product: IProduct) => {
            let newImagesArray: string[] = [];

            product.images.forEach((imageURL: string) => {
              let newImageURL = imageURL.replace(/[\[\]"]/g, "");
              newImagesArray.push(newImageURL);
            });

            return (
              <Card
                key={product.id}
                title={product.title}
                price={product.price}
                category={product.category.name}
                image={newImagesArray}
              />
            );
          })
        : filteredProducts.map((product: IProduct) => {
            let newImagesArray: string[] = [];

            product.images.forEach((imageURL: string) => {
              let newImageURL = imageURL.replace(/[\[\]"]/g, "");
              newImagesArray.push(newImageURL);
            });

            return (
              <Card
                key={product.id}
                title={product.title}
                price={product.price}
                category={product.category.name}
                image={newImagesArray}
              />
            );
          })}
    </div>
  );
}
