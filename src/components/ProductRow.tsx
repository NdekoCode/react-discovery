import { FunctionComponent, memo } from "react";
import { ProductFilter } from "../utils/types";

type ProductRowProps = {
  product: ProductFilter;
};
// un composant pure c'est un composant qui ne sera rendus que si son ETAT ou ses PROPRIETER changent
// Si l'un de ces deux elements changent alors il refait un rendus du DOM si aucun ne change alors il ne faira aucun rendus
const ProductRow: FunctionComponent<ProductRowProps> = memo(({ product }) => {
  //   wait(500);
  console.log("render");
  return (
    <article className="flex flex-col transition bg-white border shadow-sm group rounded-xl hover:shadow-md ">
      <div className="p-4 md:p-5">
        <div className="flex items-center justify-between">
          <div>
            <h3
              className={`font-semibold text-${
                product.stocked ? "gray" : "red"
              }-800 group-hover:text-blue-600`}
            >
              {product.name}
            </h3>
            <p className="text-sm text-gray-500">{product.price}</p>
          </div>
          <div className="pl-3">
            <svg
              className="w-3.5 h-3.5 text-gray-500"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </article>
  );
});
export default ProductRow;
