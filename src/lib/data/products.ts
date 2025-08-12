import { FormData, Product } from "../types/generics/product";

export const PRODUCTS: Product[] = [
  { category: "Fruits", price: 1, stocked: true, name: "Apple" },
  { category: "Fruits", price: 1, stocked: true, name: "Dragonfruit" },
  { category: "Fruits", price: 2, stocked: false, name: "Passionfruit" },
  { category: "Vegetables", price: 2, stocked: true, name: "Spinach" },
  { category: "Cook", price: 1, stocked: true, name: "Peas" },
  { category: "Vegetables", price: 4, stocked: false, name: "Pumpkin" },
  { category: "Vegetables", price: 1, stocked: true, name: "Peas" },
];
export const filterProducts = (products: Product[], formData: FormData) => {
  const searchValue = formData.searchForm.trim().toLowerCase();
  const matchSearch = (p: Product) =>
    p.name.toLowerCase().includes(searchValue);
  const maxPrice = formData.rangePrice;
  return products.filter(
    (p) =>
      (!maxPrice || p.price >= maxPrice) &&
      (!formData.isInStock || p.stocked) &&
      (searchValue.length < 0 || matchSearch(p))
  );
};
