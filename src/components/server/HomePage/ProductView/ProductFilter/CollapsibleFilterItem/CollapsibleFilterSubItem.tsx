"use client";

import clsx from "clsx";
import { useState } from "react";

import { LabelledCheckBox } from "@/src/components/form/CheckBoxCustom/LabelledCheckBox";
import { LabelledIcon } from "@/src/components/ui/LabelledIcon";
import { ConvertPrice } from "@/src/helpers/convertPrice";
import { handleFilter } from "@/src/helpers/filter";

import {
  ProductCategoryFilterType,
  ProductGroupFilterType,
} from "../../constants/productFilterList";
import { Category_Alias_Enum } from "../../enum/productFilterList";

interface Props {
  category: ProductCategoryFilterType;
}

const renderTextPrice = (priceFrom: number, priceTo: number) => {
  if (priceFrom === 0) return `Dưới ${ConvertPrice(priceTo)}`;

  if (priceFrom >= 100000 && priceTo <= 300000 && priceTo > 0)
    return `${ConvertPrice(priceFrom)} - ${ConvertPrice(priceTo)}`;

  if (priceFrom >= 300000 && priceTo <= 500000 && priceTo > 0)
    return `${ConvertPrice(priceFrom)} - ${ConvertPrice(priceTo)}`;

  if (priceFrom === 0) return `Dưới ${ConvertPrice(priceTo)}`;

  return `Trên ${ConvertPrice(priceFrom)}`;
};

export const CollapsibleFilterSubItem = (props: Props) => {
  const { category } = props;

  const [selectedCheckedAliasSub, setSelectedCheckedSub] = useState<string[]>(
    [],
  );
  const [selectedAroundPrice, setSelectedAroundPrice] = useState<string>("");

  const handleActionSub = (alias: string) => {
    if (!alias) return;

    if (!selectedCheckedAliasSub.includes(alias)) {
      setSelectedCheckedSub([...selectedCheckedAliasSub, alias]);
      return;
    }

    const filter = handleFilter(selectedCheckedAliasSub, alias);
    setSelectedCheckedSub(filter);
  };

  return (
    <>
      {category.productGroup.map((productGroup: ProductGroupFilterType) => {
        if (category.id === Category_Alias_Enum.AROUND_PRICE) {
          return (
            <li key={productGroup.id}>
              <LabelledIcon
                className={clsx(
                  "cursor-pointer rounded-md border-[1px] border-solid border-[#919EAB3D] p-2",
                  "h-full w-full",
                  "mb-2 justify-center",
                  productGroup.id === selectedAroundPrice
                    ? "border-brand-500 transition-all duration-300"
                    : "",
                )}
                textCustom={
                  <p
                    className={clsx(
                      "text-base font-medium text-black",
                      productGroup.id === selectedAroundPrice
                        ? "text-brand-500 transition-all duration-300"
                        : "",
                    )}
                  >
                    {renderTextPrice(
                      productGroup.priceFrom || 0,
                      productGroup.priceTo || 0,
                    )}
                  </p>
                }
                onClick={() => {
                  setSelectedAroundPrice(productGroup.id);
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
              onClickElement={() =>
                handleActionSub(productGroup.alias as string)
              }
              onChange={(e) => {
                handleActionSub(e.target.value);
              }}
              value={productGroup.alias}
              checked={selectedCheckedAliasSub.includes(
                productGroup.alias as string,
              )}
            />
          </li>
        );
      })}
    </>
  );
};
