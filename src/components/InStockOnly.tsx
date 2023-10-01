import { FunctionComponent } from "react";
import { InputBoxType } from "../utils/types";

const InStockOnly:FunctionComponent<InputBoxType> = ({value,onChange})=>{
    return (
        <div className="flex items-center">
          <input
            type="checkbox"
            checked={value as boolean}
            onChange={onChange}
            id="hs-basic-with-description"
            className="relative shrink-0 w-[3.25rem] h-7 bg-gray-100 checked:bg-none checked:bg-blue-600 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 border ring-1 ring-transparent focus:border-blue-600 focus:ring-blue-600 ring-offset-white focus:outline-none appearance-none   \n\n  before:inline-block before:w-6 before:h-6 before:bg-white checked:before:bg-blue-200 before:translate-x-0 checked:before:translate-x-full before:shadow before:rounded-full before:transform before:ring-0 before:transition before:ease-in-out before:duration-200  :bg-blue-200"
          />
          <label
            htmlFor="hs-basic-with-description"
            className="ml-3 text-sm text-gray-500 "
          >
            Only show products in stock
          </label>
        </div>)
}

export default InStockOnly;