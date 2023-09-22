export type AlertType = "success" | "danger" | "infos" | "warning";
export type AlertProps = {
  type: AlertType;
  title: string;
  message: string;
};

export type ScaleType = "c" | "f";
export type SimpleProduct = {
  category: string;
  price: string;
  stocked: boolean;
  name: string;
};
export type FilteredSimpleProduct = {
  category: string;
  products: ProductFilter[];
};
export type ProductFilter = {
  price: string;
  stocked: boolean;
  name: string;
};
