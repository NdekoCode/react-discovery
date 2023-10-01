import { ChangeEvent, FormEvent, FunctionComponent } from "react";
import InStockOnly from "./InStockOnly";
import Input from "./Input";
type SearchBarProps = {
  inStock: boolean;
  search: string;
  onCheck: (e: FormEvent<HTMLInputElement>) => void;
  onSearch: (e: ChangeEvent<HTMLInputElement>) => void;
};
// ! ||--------------------------------------------------------------------------------||
// ! ||                                Bar de recherche                                ||
// ! ||--------------------------------------------------------------------------------||
const SearchBar: FunctionComponent<SearchBarProps> = ({
  inStock,
  onCheck,
  onSearch,
  search,
}) => {
  return (
    <form action="" onSubmit={(e) => e.preventDefault()}>
      <div className="mb-3">
        <label
          htmlFor="hs-trailing-button-add-on-with-icon-and-button"
          className="sr-only"
        >
          Label
        </label>
        <div className="relative flex rounded-md shadow-sm">
          <Input value={search} onChange={onSearch}>

          <div className="absolute inset-y-0 left-0 z-20 flex items-center pl-4 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              width={16}
              height={16}
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
            </svg>
          </div>
          </Input>
          <button
            type="button"
            className="inline-flex items-center justify-center flex-shrink-0 px-4 py-3 text-sm font-semibold text-white transition-all bg-blue-500 border border-transparent rounded-r-md hover:bg-blue-600 focus:z-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Search
          </button>
        </div>
      </div>
      <InStockOnly 
            value={inStock}
            onChange={onCheck}/>
    </form>
  );
};
export default SearchBar;
