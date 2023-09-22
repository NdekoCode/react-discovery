import { Fragment, FunctionComponent } from "react";
import { FilteredSimpleProduct } from "../utils/types";
import ProductCategoryRow from "./ProductCategoryRow";
import ProductRow from "./ProductRow";
type ProductTableProps = {
  products: FilteredSimpleProduct[];
};
const ProductTable: FunctionComponent<ProductTableProps> = ({ products }) => {
  return (
    <div className="px-3 py-10 pt-0 mx-auto">
      {products.map((product, index) => (
        <Fragment key={index}>
          <ProductCategoryRow category={product.category} />
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 sm:gap-6">
            {product.products.map((item, index) => (
              <ProductRow key={index} product={item} />
            ))}
          </div>
        </Fragment>
      ))}
    </div>
  );
};
export default ProductTable;
