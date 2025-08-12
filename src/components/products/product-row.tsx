import React, { FC } from "react";

import { Product } from "@/lib/types/generics/product";
import { cn } from "@/lib/utils";

const ProductRow: FC<{ product: Product }> = ({ product }) => {
  return (
    <tr className="flex justify-between gap-2 w-full">
      <td className={cn(product.stocked ? "text-gray-800" : "text-red-500")}>
        {product.name}
      </td>
      <td>${product.price}</td>
    </tr>
  );
};

export default ProductRow;
