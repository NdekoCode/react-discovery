export type Product = {
  category: string;
  price: number;
  stocked: boolean;
  name: string;
};

export type FormData = {
  searchForm: string;
  isInStock: boolean;
  rangePrice?: number;
};
