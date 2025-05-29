import clsx from "clsx";

import { ProductThumbnail } from "@/src/components/ui/ProductThumbnail";
import { ProductDetailType, productList } from "@/src/constants/productList";

import { ProductSortFilter } from "../components/ProductSortFilter";

export const ProductList = () => {
  return (
    <div
      id="product-view"
      className={clsx("h-full w-full", "flex flex-col gap-5")}
    >
      <div className="flex items-center justify-between lg:flex-col lg:gap-2 xl:flex-row xl:gap-0">
        <p className="text-lg font-bold text-black">Danh sách sản phẩm</p>

        <div className="hidden lg:block">
          <ProductSortFilter />
        </div>
      </div>

      <div className="xxl:grid-cols-4 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {productList.map((product: ProductDetailType, index: number) => {
          return (
            <ProductThumbnail
              product={product}
              key={index}
              maxWidthElement="w-full sm:max-w-[262px]"
              isSaleFire
              isBuyButton
              isScale
            />
          );
        })}
      </div>
    </div>
  );
};
