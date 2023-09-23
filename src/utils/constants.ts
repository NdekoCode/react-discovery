import { SimpleProduct } from "./types";

export const scaleName: { c: string; f: string } = {
  c: "Celcius",
  f: "Fahrenheit",
};

export const tempConverter = (temp: number, scale: string) => {
  // Convert celcius to fahrenheit
  if (scale === "f") {
    return (temp * 9) / 5 + 32;
  }
  //   Convertir farhenheit en Celcius
  return ((temp - 32) * 5) / 9;
};

export function wait(t: number) {
  const start = Date.now();
  while (Date.now() - start < t) {
    /* TODO document why this block is empty */
  }
}
export const PRODUCTS: SimpleProduct[] = [
  { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
  { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
  { category: "Electonic", price: "$140", stocked: false, name: "IPhone6" },
  { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
  { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
  { category: "Electonic", price: "$2", stocked: false, name: "Pixel 4" },
  { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
  { category: "Vegetables", price: "$1", stocked: true, name: "Peas" },
];
export const encoded = (value: number) => {
  wait(500);
  return Date.now() * value;
};
