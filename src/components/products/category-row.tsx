import React, { FC } from "react";

const CategoryRow: FC<{ category: string }> = ({ category }) => {
  return (
    <tr className="w-full">
      <td colSpan={2} className="font-bold text-lg text-center">
        {category}
      </td>
    </tr>
  );
};

export default CategoryRow;
