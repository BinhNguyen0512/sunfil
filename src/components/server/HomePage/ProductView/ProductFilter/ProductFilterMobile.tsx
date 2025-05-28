"use client";

import clsx from "clsx";
import { useEffect, useState } from "react";

import { ExitIcon, FilterIcon } from "@/public/icons";
import { LabelledIcon } from "@/src/components/ui/LabelledIcon";
import { Overlay } from "@/src/components/ui/Overlay";

import { ProductFilter } from ".";

export const ProductFilterMobile = () => {
  const [isShowFilter, setIsShowFilter] = useState<boolean>(false);

  useEffect(() => {
    if (isShowFilter) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isShowFilter]);

  const handleActionShow = () => {
    if (isShowFilter) {
      setIsShowFilter(false);
      return;
    }
    setIsShowFilter(true);
  };
  return (
    <>
      <LabelledIcon
        className={clsx(
          "cursor-pointer rounded-full border-[1px] border-solid border-white bg-white p-2",
          "h-full w-full",
          "mb-2",
        )}
        textCustom={
          <p className="text-md font-medium text-black">Bộ lọc sản phẩm</p>
        }
        prefixIcon={<FilterIcon />}
        onClick={() => handleActionShow()}
      />

      <>
        {isShowFilter && <Overlay />}

        <div
          className={clsx(
            "fixed top-0 z-1024 h-screen overflow-y-auto",
            "transition-all duration-500",
            isShowFilter ? "left-0" : "left-[-100%]",
            "w-full bg-white",
          )}
        >
          <div
            className="absolute top-5 right-5 flex h-10 w-10 items-center justify-center"
            onClick={() => handleActionShow()}
          >
            <ExitIcon />
          </div>
          <ProductFilter />
        </div>
      </>
    </>
  );
};
