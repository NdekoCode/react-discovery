import React, { ChangeEvent, useState } from "react";

import { filterProducts, PRODUCTS } from "@/lib/data/products";

import ProductTable from "./product-table";
import { SearchForm } from "./search-form";

const Products = () => {
  const [formData, setFormData] = useState({
    searchForm: "",
    isInStock: false,
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
  const products = filterProducts(PRODUCTS, formData);

  return (
    <div className="border border-gray-300 rounded-md p-4">
      {JSON.stringify(formData, null, 2)}
      <SearchForm formData={formData} handleChange={handleChange} />
      <ProductTable products={products} />
    </div>
  );
};

export default Products;
