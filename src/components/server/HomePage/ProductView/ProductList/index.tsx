import clsx from "clsx";

import { ProductSortFilter } from "../components/ProductSortFilter";

export const ProductList = () => {
  return (
    <div className={clsx("h-full w-full", "flex flex-col gap-5")}>
      <div className="flex items-center justify-between">
        <p className="text-lg font-bold text-black">Danh sách sản phẩm</p>

        <div className="hidden lg:block">
          <ProductSortFilter />
        </div>
      </div>
      <div>2</div>
    </div>
  );
};
