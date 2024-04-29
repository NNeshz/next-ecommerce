"use client";

import Card from "../Card/Card";
import { IProduct } from "@/utils/types";
import { useGetProducts } from "@/hooks/useGetProducts";

export default function WeekProducts() {
  
  const products = useGetProducts();

  const recentProducts = products.toSorted(() => Math.random() - 0.5).slice(0, 5)

  return (
    <div className="flex w-full flex-col mt-20 px-10 md:px-20">
      <h1 className="text-4xl font-bold mb-8">Products of the week</h1>
      <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-5">
        {recentProducts.map((product: IProduct) => {
          let newImagesArray: string[] = [];

          product.images.forEach((imageURL: string) => {
            let newImageURL = imageURL.replace(/[\[\]"]/g, ""); // Eliminar corchetes y comillas
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
    </div>
  );
}
