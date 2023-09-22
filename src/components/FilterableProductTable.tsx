import { FunctionComponent } from "react";
import ProductTable from "./ProductTable";
import SearchBar from "./SearchBar";

const FilterableProductTable: FunctionComponent = () => {
  return (
    <section>
      <SearchBar />
      <ProductTable />
    </section>
  );
};
export default FilterableProductTable;
