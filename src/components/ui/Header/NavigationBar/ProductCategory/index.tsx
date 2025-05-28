"use client";

import clsx from "clsx";
import { useState } from "react";

import { ChevronDownIcon, MenuIcon } from "@/public/icons";

import { ProductCategoryMenu } from "./ProductCategoryMenu";

export const ProductCategory = () => {
  const [isHover, setIsHover] = useState<boolean>(false);

  return (
    <div
      className={clsx(
        "bg-brand-600 cursor-pointer rounded-lg px-2 py-4 xl:p-4",
        "w-full max-w-[270px]",
        "flex items-center justify-between gap-2 xl:gap-6",
        "group",
        "hover:bg-brand-500 transition-all duration-300",
        "relative",
      )}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <div className="flex items-center gap-2">
        <div>
          <MenuIcon />
        </div>
        <p className="xl:text-md text-base font-bold text-white">
          Danh mục sản phẩm
        </p>
      </div>
      <div className="transition-all duration-300 group-hover:-rotate-180">
        <ChevronDownIcon />
      </div>

      <ProductCategoryMenu isHover={isHover} />
    </div>
  );
};
