import React from "react";

const ProductTableHeader = () => {
  return (
    <thead className="w-full">
      <tr className="flex justify-between gap-2 bg-gray-200 p-4">
        <th>Name</th>
        <th>Price</th>
      </tr>
    </thead>
  );
};

export default ProductTableHeader;
