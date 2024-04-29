'use client'

import { useProductsStore } from "@/store/useProducts";
import { useState } from "react";

export default function SearchBar() {
  const { filterProductByName } = useProductsStore(); // Extraer getProductByNames del store

  const [searchValue, setSearchValue] = useState(""); // Estado local para el valor de búsqueda

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.value;
    setSearchValue(name); // Actualizar el estado local con el valor de búsqueda
    filterProductByName(name); // Llamar a la función del store para filtrar productos
  };

  return (
    <input
      type='text'
      value={searchValue} // Establecer el valor del input como el estado local
      className='w-full px-2 py-2 mb-4 bg-transparent'
      placeholder='Search item...'
      onChange={handleChange}
    />
  );
}
