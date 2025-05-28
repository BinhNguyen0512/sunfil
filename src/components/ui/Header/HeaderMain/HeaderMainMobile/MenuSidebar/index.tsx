"use client";

import clsx from "clsx";
import { Fragment, useState } from "react";

import { ChevronDownIcon } from "@/public/icons";
import { handleFilter } from "@/src/components/helpers/filter";
import { AnimationScrollDown } from "@/src/components/ui/Animation/AnimationScrollDown";
import Divider from "@/src/components/ui/Divider";

import {
  ProductGroupType,
  subCategory,
  subCategoryType,
} from "../../../constants/productCategoryMenu";
import { MenuSidebarItem } from "./MenuSidebarItem";

interface Props {
  isOpenMenu: boolean;
}

export const MenuSidebar = (props: Props) => {
  const { isOpenMenu } = props;

  const [selectedSubList, setSelectedSubList] = useState<string[]>([]);

  const handleActionMenuItem = (sub: subCategoryType) => {
    if (selectedSubList.includes(sub.id)) {
      const filter = handleFilter(selectedSubList, sub.id);

      setSelectedSubList(filter);
      return;
    }

    setSelectedSubList([...selectedSubList, sub.id]);
  };

  const renderMenuSidebarItem = (sub: subCategoryType, index: number) => {
    return (
      <Fragment key={sub.id}>
        {/* Menu category item*/}
        <MenuSidebarItem
          name={sub.name}
          onClick={() => console.log("handle sub menu")}
          suffixIcon={
            <div
              onClick={(e) => {
                e.stopPropagation();
                handleActionMenuItem(sub);
              }}
              className="flex h-full w-8 items-center justify-center"
            >
              <ChevronDownIcon
                className={clsx(
                  "stroke-black transition-all duration-300",
                  selectedSubList.includes(sub.id) ? "-rotate-180" : "rotate-0",
                )}
              />
            </div>
          }
        />

        {/* -> product group */}
        <li className="mx-2 mb-2 rounded-lg bg-[#eaeffa]">
          <AnimationScrollDown isTrigger={selectedSubList.includes(sub.id)}>
            {sub.productGroup.map((productGroup: ProductGroupType) => {
              return (
                <MenuSidebarItem
                  key={productGroup.id}
                  name={productGroup.name}
                  classNameText="!text-base"
                  suffixIcon={<></>}
                  onClick={() => {
                    console.log("trigger product group");
                  }}
                />
              );
            })}
          </AnimationScrollDown>
        </li>

        {subCategory.length - 1 !== index && <Divider />}
      </Fragment>
    );
  };

  return (
    <div
      className={clsx(
        "fixed z-1024 h-full w-full overflow-y-auto",
        "transition-all duration-500",
        isOpenMenu ? "left-0" : "left-[-100%]",
        "bg-white",
      )}
    >
      <div className={clsx("w-full px-2 py-4", "flex flex-col gap-2")}>
        <div className="h-full w-full">
          <ul>
            {/* menu category list  */}
            {subCategory.map((sub: subCategoryType, index: number) =>
              renderMenuSidebarItem(sub, index),
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};
