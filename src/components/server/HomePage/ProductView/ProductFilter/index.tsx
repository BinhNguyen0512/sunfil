"use client";

import clsx from "clsx";
import { Fragment, Suspense, useRef, useState } from "react";

import { ChevronDownIcon, FilterIcon } from "@/public/icons";
import { CollapsibleOptionList } from "@/src/components/ui/CollapsibleOptionList";
import Divider from "@/src/components/ui/Divider";
import { LabelledIcon } from "@/src/components/ui/LabelledIcon";
import { handleFilter } from "@/src/helpers/filter";

import { ProductSortFilter } from "../components/ProductSortFilter";
import {
  productCategoryFilterList,
  ProductCategoryFilterType,
} from "../constants/productFilterList";
import { CollapsibleFilterItem } from "./CollapsibleFilterItem";
import { CollapsibleFilterSubItem } from "./CollapsibleFilterItem/CollapsibleFilterSubItem";

const listIdFilter = productCategoryFilterList.map((item) => item.id);

export const ProductFilter = () => {
  const productViewRef = useRef<HTMLDivElement | null>(null);

  const [selectedProductGroupList, setSelectedProductGroupList] =
    useState<string[]>(listIdFilter);

  const handleActionFilter = (category: ProductCategoryFilterType) => {
    if (selectedProductGroupList.includes(category.id)) {
      const filter = handleFilter(selectedProductGroupList, category.id);

      setSelectedProductGroupList(filter);
      return;
    }

    setSelectedProductGroupList([...selectedProductGroupList, category.id]);
  };

  const renderFilterList = (
    category: ProductCategoryFilterType,
    index: number,
  ) => {
    return (
      <Fragment key={category.id}>
        <CollapsibleOptionList
          collapsibleItemTitle={
            <CollapsibleFilterItem
              name={category.title}
              suffixIcon={
                <div className="flex h-full w-8 items-center justify-center">
                  <ChevronDownIcon
                    className={clsx(
                      "stroke-black transition-all duration-300",
                      selectedProductGroupList.includes(category.id)
                        ? "-rotate-180"
                        : "rotate-0",
                    )}
                  />
                </div>
              }
              onClick={() => handleActionFilter(category)}
            />
          }
          selectedOptions={selectedProductGroupList}
          collapsibleOptionId={category.id}
          collapsibleItemSub={
            <Suspense fallback={<></>}>
              <CollapsibleFilterSubItem category={category} />
            </Suspense>
          }
          classNameSubWrapper="mx-2 mb-2 rounded-lg"
        />

        {index + 1 !== productCategoryFilterList.length && <Divider />}
      </Fragment>
    );
  };

  return (
    <div
      ref={productViewRef}
      className="h-full w-full rounded-lg bg-white py-3"
    >
      <div className="flex flex-col gap-1">
        <LabelledIcon
          prefixIcon={<FilterIcon />}
          textCustom={
            <p className="text-brand-500 text-2xl font-bold">Bộ lọc</p>
          }
          className="p-3"
        />

        <div className="block lg:hidden">
          <Divider />
          <ProductSortFilter />
        </div>

        <Divider />

        <div className="h-full w-full">
          <ul>
            {productCategoryFilterList.map(
              (category: ProductCategoryFilterType, index: number) =>
                renderFilterList(category, index),
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};
