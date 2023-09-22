import { FunctionComponent } from "react";
import ProductCategoryRow from "./ProductCategoryRow";
import ProductRow from "./ProductRow";

const ProductTable: FunctionComponent = () => {
  return (
    <>
      {/* Card Section */}
      <div className="px-3 py-10 pt-0 mx-auto">
        {/* Grid */}
        <ProductCategoryRow />
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 sm:gap-6">
          {/* Card */}
          <ProductRow />
          {/* End Card */}
        </div>
      </div>
    </>
  );
};
export default ProductTable;
