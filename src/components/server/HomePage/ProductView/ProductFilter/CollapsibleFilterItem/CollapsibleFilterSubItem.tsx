"use client";

import clsx from "clsx";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import queryString from "query-string";
import { useCallback, useEffect, useState } from "react";

import { LabelledCheckBox } from "@/src/components/form/CheckBoxCustom/LabelledCheckBox";
import { LabelledIcon } from "@/src/components/ui/LabelledIcon";
import { ConvertPrice } from "@/src/helpers/convertPrice";
import { handleFilter } from "@/src/helpers/filter";
import {
  toggleMultiParams,
  toggleMultiValueQueryParam,
} from "@/src/helpers/urlSearchParams";

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

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [selectedCheckedAliasSub, setSelectedCheckedSub] = useState<string[]>(
    [],
  );
  const [selectedAroundPrice, setSelectedAroundPrice] = useState<string>("");

  useEffect(() => {
    if (category.id === Category_Alias_Enum.AROUND_PRICE) return;

    const startSelectedChecked = searchParams.getAll(category.id);

    setSelectedCheckedSub(startSelectedChecked);
  }, []);

  useEffect(() => {
    if (category.id !== Category_Alias_Enum.AROUND_PRICE) return;

    let querySearchParams = queryString.parse(window.location.search);

    const find = category.productGroup.find(
      (item) =>
        item.priceFrom?.toString() === querySearchParams.priceFrom &&
        item.priceTo?.toString() === querySearchParams.priceTo,
    );

    if (!find) return;

    setSelectedAroundPrice(find.id);
  }, []);

  const scrollToProductView = () => {
    const element = document.getElementById("product-view");

    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleActionSub = (categoryId: string, alias: string) => {
    if (!alias) return;

    handleCheckedQueryParam(categoryId, alias);

    scrollToProductView();

    if (!selectedCheckedAliasSub.includes(alias)) {
      setSelectedCheckedSub([...selectedCheckedAliasSub, alias]);
      return;
    }

    const filter = handleFilter(selectedCheckedAliasSub, alias);
    setSelectedCheckedSub(filter);
  };

  const handleCheckedQueryParam = useCallback(
    (key: string, value: string) => {
      toggleMultiValueQueryParam(searchParams, key, value, router, pathname);
    },
    [searchParams],
  );

  const handleActionPrice = (productGroup: ProductGroupFilterType) => {
    scrollToProductView();

    setSelectedAroundPrice(productGroup.id);

    handleCheckedQueryParamsPrice(productGroup);
  };

  const handleCheckedQueryParamsPrice = (
    productGroup: ProductGroupFilterType,
  ) => {
    toggleMultiParams(
      {
        priceTo: productGroup.priceTo?.toString() || "",
        priceFrom: productGroup.priceFrom?.toString() || "",
      },
      router,
      pathname,
    );
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
                  handleActionPrice(productGroup);
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
                handleActionSub(category.id, productGroup.alias as string)
              }
              onChange={(e) => {
                handleActionSub(category.id, e.target.value);
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
