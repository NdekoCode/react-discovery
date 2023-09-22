import { FunctionComponent } from "react";

// ! ||--------------------------------------------------------------------------------||
// ! ||                                Bar de recherche                                ||
// ! ||--------------------------------------------------------------------------------||
const SearchBar: FunctionComponent = () => {
  return (
    <form action="">
      <div className="mb-3">
        <label
          htmlFor="hs-trailing-button-add-on-with-icon-and-button"
          className="sr-only"
        >
          Label
        </label>
        <div className="relative flex rounded-md shadow-sm">
          <input
            type="text"
            id="hs-trailing-button-add-on-with-icon-and-button"
            name="hs-trailing-button-add-on-with-icon-and-button"
            className="block w-full px-4 py-3 text-sm transition border border-transparent border-gray-200 shadow-sm outline-none pl-11 rounded-l-md focus:z-10 focus:border-blue-500 focus:ring-blue-500 "
            placeholder="Rechercher..."
          />
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
          <button
            type="button"
            className="inline-flex items-center justify-center flex-shrink-0 px-4 py-3 text-sm font-semibold text-white transition-all bg-blue-500 border border-transparent rounded-r-md hover:bg-blue-600 focus:z-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Search
          </button>
        </div>
      </div>
      <div className="flex items-center">
        <input
          type="checkbox"
          id="hs-basic-with-description"
          className="relative shrink-0 w-[3.25rem] h-7 bg-gray-100 checked:bg-none checked:bg-blue-600 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 border border-transparent ring-1 ring-transparent focus:border-blue-600 focus:ring-blue-600 ring-offset-white focus:outline-none appearance-none   \n\n  before:inline-block before:w-6 before:h-6 before:bg-white checked:before:bg-blue-200 before:translate-x-0 checked:before:translate-x-full before:shadow before:rounded-full before:transform before:ring-0 before:transition before:ease-in-out before:duration-200  :bg-blue-200"
        />
        <label
          htmlFor="hs-basic-with-description"
          className="ml-3 text-sm text-gray-500 "
        >
          Only show products in stock
        </label>
      </div>
    </form>
  );
};
export default SearchBar;
