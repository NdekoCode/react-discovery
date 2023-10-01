import { FunctionComponent } from "react";
import { InputBoxType } from '../utils/types';
const Input:FunctionComponent<InputBoxType> = ({placeholder="Rechercher...",value,onChange,children})=>{
    return <>
    <input
            type="search"
            value={value as string}
            id="hs-trailing-button-add-on-with-icon-and-button"
            name="hs-trailing-button-add-on-with-icon-and-button"
            className="block w-full px-4 py-3 text-sm transition border border-transparent border-gray-200 shadow-sm outline-none pl-11 rounded-l-md focus:z-10 focus:border-blue-500 focus:ring-blue-500 "
            placeholder={placeholder}
            onChange={onChange}
            
          />{children}</>
}

export default Input;