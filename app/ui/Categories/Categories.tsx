"use client";

import Image from "next/image";
import { Categories as allCategories } from "@/app/libs/data";
import CarecoryCard from "./CarecoryCard";

interface ICategory {
  id: number;
  name: string;
  image: string;
}

// Exporta el componente como una función de React
export default function Categories() {

  return (
    <div>
      <h1 className="text-4xl font-bold mb-4">Categories</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {allCategories.map((cat: ICategory) => (
          <CarecoryCard image={cat.image} title={cat.name} key={cat.id} />
        ))}
      </div>
    </div>
  );
}
