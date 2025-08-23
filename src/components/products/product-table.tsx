import React, { FC, Fragment } from "react";

import { Product } from "@/lib/types/generics/product";
import { cn } from "@/lib/utils";

import CategoryRow from "./category-row";
import ProductRow from "./product-row";
import ProductTableHeader from "./product-table-header";

const ProductTable: FC<{ products: Product[] }> = ({ products }) => {
  throw new Error("Call this");
  const productsRows = products.map((p, index) => (
    <Fragment key={index}>
      <CategoryRow category={p.category} />
      <ProductRow product={p} />
    </Fragment>
  ));
  return (
    <table className="w-full px-4">
      <ProductTableHeader />
      <tbody>{productsRows}</tbody>
    </table>
  );
};

export default ProductTable;
