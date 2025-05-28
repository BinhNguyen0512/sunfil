"use client";

import clsx from "clsx";
import { useState } from "react";

import { ButtonCustom } from "@/src/components/form/ButtonCustom";

import {
  productSortFilter,
  ProductSortFilterType,
} from "../../ProductList/constants/productSortFilter";

export const ProductSortFilter = () => {
  const [selectedSort, setSelectedSort] = useState<string>(
    productSortFilter[0].id,
  );
  return (
    <div
      className={clsx(
        "flex flex-wrap items-center justify-start gap-6 p-3 lg:justify-end lg:pt-0",
      )}
    >
      <div className="text-md font-medium text-black">Sắp xếp theo</div>
      <div className="flex flex-wrap items-center gap-4">
        {productSortFilter.map((productSort: ProductSortFilterType) => {
          return (
            <ButtonCustom
              key={productSort.id}
              className={clsx(
                "rounded-lg border-white bg-white px-4 py-2",
                selectedSort === productSort.id
                  ? "!border-brand-500 border-[1px] border-solid"
                  : "",
              )}
              onClick={() => setSelectedSort(productSort.id)}
            >
              <p
                className={clsx(
                  "text-md font-bold text-black",
                  selectedSort === productSort.id ? "text-brand-500" : "",
                )}
              >
                {productSort.name}
              </p>
            </ButtonCustom>
          );
        })}
      </div>
    </div>
  );
};
