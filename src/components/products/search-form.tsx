import { ChangeEvent, FC, useState } from "react";

export const SearchForm: FC<{
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  formData: { searchForm: string; isInStock: boolean };
}> = ({ formData, handleChange }) => {
  return (
    <form action="" className="flex flex-col gap-2.5 w-full mb-3">
      <div className="w-full">
        <input
          type="search"
          name="searchForm"
          className="bg-gray-50 border py-2 px-3 rounded w-full border-gray-200 shadow shadow-gray-100"
          placeholder="Search"
          value={formData.searchForm}
          onChange={handleChange}
        />
      </div>
      <label htmlFor="isInStock" className="flex items-center gap-1">
        <input
          type="checkbox"
          name="isInStock"
          id="isInStock"
          checked={formData.isInStock}
          onChange={handleChange}
        />
        <span>Show only products in stock</span>
      </label>
    </form>
  );
};
