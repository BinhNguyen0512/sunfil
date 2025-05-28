"use client";

import clsx from "clsx";
import { Fragment, useState } from "react";

import { ChevronDownIcon, FilterIcon } from "@/public/icons";
import { LabelledCheckBox } from "@/src/components/form/CheckBoxCustom/LabelledCheckBox";
import { CollapsibleOptionList } from "@/src/components/ui/CollapsibleOptionList";
import Divider from "@/src/components/ui/Divider";
import { LabelledIcon } from "@/src/components/ui/LabelledIcon";
import { ConvertPrice } from "@/src/helpers/convertPrice";
import { handleFilter } from "@/src/helpers/filter";

import { ProductSortFilter } from "../components/ProductSortFilter";
import {
  productCategoryFilterList,
  ProductCategoryFilterType,
  ProductGroupFilterType,
} from "../constants/productFilterList";
import { Category_Alias_Enum } from "../enum/productFilterList";
import { CollapsibleFilterItem } from "./CollapsibleFilterItem";

const listIdFilter = productCategoryFilterList.map((item) => item.id);

const renderTextPrice = (priceFrom: number, priceTo: number) => {
  if (priceFrom === 0) return `Dưới ${ConvertPrice(priceTo)}`;

  if (priceFrom >= 100000 && priceTo <= 300000 && priceTo > 0)
    return `${ConvertPrice(priceFrom)} - ${ConvertPrice(priceTo)}`;

  if (priceFrom >= 300000 && priceTo <= 500000 && priceTo > 0)
    return `${ConvertPrice(priceFrom)} - ${ConvertPrice(priceTo)}`;

  if (priceFrom === 0) return `Dưới ${ConvertPrice(priceTo)}`;

  return `Trên ${ConvertPrice(priceFrom)}`;
};

export const ProductFilter = () => {
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
            <>
              {category.productGroup.map(
                (productGroup: ProductGroupFilterType) => {
                  if (category.id === Category_Alias_Enum.AROUND_PRICE) {
                    return (
                      <li key={productGroup.id}>
                        <LabelledIcon
                          className={clsx(
                            "cursor-pointer rounded-md border-[1px] border-solid border-[#919EAB3D] p-2",
                            "h-full w-full",
                            "mb-2 justify-center",
                          )}
                          textCustom={
                            <p className="text-base font-medium text-black">
                              {renderTextPrice(
                                productGroup.priceFrom || 0,
                                productGroup.priceTo || 0,
                              )}
                            </p>
                          }
                          onClick={() => {
                            console.log(
                              productGroup.priceFrom,
                              productGroup.priceTo,
                            );
                          }}
                        />
                      </li>
                    );
                  }

                  return (
                    <li key={productGroup.id}>
                      <LabelledCheckBox
                        className={"cursor-pointer p-2"}
                        textCustom={
                          <p className="text-base font-medium text-black">
                            {productGroup.name}
                            <span className="text-secondary">(24)</span>
                          </p>
                        }
                        onClickElement={() => {
                          console.log(productGroup.alias);
                        }}
                        defaultChecked={false}
                      />
                    </li>
                  );
                },
              )}
            </>
          }
          classNameSubWrapper="mx-2 mb-2 rounded-lg"
        />

        {index + 1 !== productCategoryFilterList.length && <Divider />}
      </Fragment>
    );
  };

  return (
    <div className="h-full w-full rounded-lg bg-white py-3">
      <div className="flex flex-col gap-1">
        <LabelledIcon
          prefixIcon={<FilterIcon />}
          textCustom={
            <p className="text-brand-500 text-2xl font-bold">Bộ lọc</p>
          }
          className="p-3"
        />

        <Divider />

        <div className="block lg:hidden">
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
