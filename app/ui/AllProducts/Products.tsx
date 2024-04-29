"use client";

import { useGetProducts } from "@/hooks/useGetProducts";
import Card from "../Card/Card";
import { IProduct } from "@/utils/types";

export default function Products() {
  const products = useGetProducts();

  return (
    <div className="w-full grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-5 mb-20">
      {products.map((product: IProduct) => {
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
      {products.length === 0 && (
        <div className="w-full h-screen grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-5 mb-20">
          <p className="text-center text-2xl col-span-full">
            No products found
          </p>
        </div>
      )}
    </div>
  );
}
