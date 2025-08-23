import React, { ChangeEvent, useState } from "react";
import { ErrorBoundary } from "react-error-boundary";

import { filterProducts, PRODUCTS } from "@/lib/data/products";
import { FormData } from "@/lib/types/generics/product";

import AlertDanger from "../alert-danger";
import ProductTable from "./product-table";
import { SearchForm } from "./search-form";

const Products = () => {
  const [formData, setFormData] = useState<FormData>({
    searchForm: "",
    isInStock: false,
    rangePrice: 0,
  });
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const target = e.target;
    const value =
      target instanceof HTMLInputElement && target.type === "checkbox"
        ? target.checked
        : target.value;

    console.log("Input", target, value);
    setFormData((prev) => ({ ...prev, [target.name]: value }));
  };

  // filteredProducts: c'est ce qu'on appel une valeur deriver, car a chaque fois que l'Etat change, lui aussi il change, car a chaque fois que l'Etat change, on a un `rerender` qui va reexecuter tous les code dans le composant `Products` meme le code de filtrage
  const filteredProducts = filterProducts(PRODUCTS, formData);

  return (
    <div className="border border-gray-300 rounded-md p-4">
      {JSON.stringify(formData, null, 2)}
      <SearchForm formData={formData} handleChange={handleChange} />
      <ErrorBoundary FallbackComponent={AlertDanger}>
        <ProductTable products={filteredProducts} />
      </ErrorBoundary>
    </div>
  );
};

export default Products;
