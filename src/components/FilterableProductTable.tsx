import { FormEvent, FunctionComponent, useState } from "react";
import { PRODUCTS } from "../utils/constants";
import { FilteredSimpleProduct, SimpleProduct } from "../utils/types";
import ProductTable from "./ProductTable";
import SearchBar from "./SearchBar";

const FilterableProductTable: FunctionComponent = () => {
  const [inStock, setInStock] = useState(false);
  const handleInStock: (e: FormEvent<HTMLInputElement>) => void = (e) => {
    setInStock(e.currentTarget.checked);
  };
  const products: SimpleProduct[] = PRODUCTS;
  const filteredProducts: FilteredSimpleProduct[] = [];
  for (const product of products) {
    const category: string = product.category;
    const existingCategory = filteredProducts.find(
      (p) => p.category === category
    );
    if (existingCategory) {
      existingCategory.products.push({
        name: product.name,
        stocked: product.stocked,
        price: product.price,
      });
    } else {
      filteredProducts.push({
        category: category,
        products: [
          {
            name: product.name,
            stocked: product.stocked,
            price: product.price,
          },
        ],
      });
    }
  }
  return (
    <section>
      <SearchBar inStock={inStock} onCheck={handleInStock} />
      <ProductTable products={filteredProducts} />
    </section>
  );
};
export default FilterableProductTable;
