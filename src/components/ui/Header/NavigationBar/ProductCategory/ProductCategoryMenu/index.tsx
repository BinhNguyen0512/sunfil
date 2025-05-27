"use client";

import { useState } from "react";

import Divider from "@/src/components/ui/Divider";

import { subCategory, subCategoryType } from "./constants";
import { SubCategoryItem } from "./SubCategoryItem";

const initialSubCategoryItem: subCategoryType = {
  alias: "",
  bestSellerProduct: [],
  id: "0",
  name: "",
  productGroup: [],
  srcImage: "",
};

export const ProductCategoryMenu = () => {
  const [selectedSub, setSelectedSub] = useState<subCategoryType>(
    initialSubCategoryItem,
  );

  const handleActionSub = (sub: subCategoryType) => {
    setSelectedSub(sub);
  };

  return (
    <div className="absolute top-[100%] left-0 z-1">
      <div className="flex rounded-2xl bg-white shadow-lg">
        <div className="flex flex-col">
          {subCategory.map((sub: subCategoryType) => (
            <SubCategoryItem
              key={sub.id}
              onClick={handleActionSub}
              subCategory={sub}
              selectedSub={selectedSub}
            />
          ))}
        </div>
        <div className="flex flex-col p-6">
          <div className="pb-6">1</div>

          <Divider />

          <div className="flex flex-col gap-6 pt-6">
            <div>1</div>
            <div>2 </div>
          </div>
        </div>
      </div>
    </div>
  );
};
