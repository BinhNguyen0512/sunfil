"use client";

import { useState } from "react";

import { ChevronRightDoubleIcon } from "@/public/icons";
import { AnimationDropDown } from "@/src/components/ui/Animation/AnimationDropDown";
import Divider from "@/src/components/ui/Divider";
import { LabelledIcon } from "@/src/components/ui/LabelledIcon";
import { ProductThumbnail } from "@/src/components/ui/ProductThumbnail";

import {
  initialProduct,
  initialProductGroup,
  initialSubCategoryItem,
  ProductDetailType,
  ProductGroupType,
  subCategory,
  subCategoryType,
} from "../../../constants/productCategoryMenu";
import { ProductGroupItem } from "./ProductGroupItem";
import { SubCategoryItem } from "./SubCategoryItem";

interface Props {
  isHover: boolean;
}

export const ProductCategoryMenu = (props: Props) => {
  const { isHover } = props;
  const [selectedSub, setSelectedSub] = useState<subCategoryType>(
    initialSubCategoryItem,
  );

  const [productGroup, setProductGroup] =
    useState<ProductGroupType[]>(initialProductGroup);

  const [productList, setProductList] =
    useState<ProductDetailType[]>(initialProduct);

  const handleActionSub = (sub: subCategoryType) => {
    setSelectedSub(sub);

    setProductGroup(sub.productGroup);
    setProductList(sub.bestSellerProduct);
  };

  return (
    <AnimationDropDown isHover={isHover}>
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

        <div className="flex min-w-max flex-col rounded-r-2xl rounded-b-2xl bg-gray-200 p-6">
          <div className="xxl:grid-cols-3 grid grid-cols-2 gap-4 pb-6">
            {productGroup.map((item: ProductGroupType) => (
              <ProductGroupItem
                item={item}
                key={item.id}
                onClick={(item) => console.log(item)}
              />
            ))}
          </div>

          <Divider />

          <div className="flex flex-col gap-6 pt-6">
            <div className="flex items-center justify-between">
              <p className="text-2xl font-semibold text-black">
                Sản phẩm bán chạy
              </p>
              <LabelledIcon
                textCustom={<p className="text-brand-500">Xem tất cả</p>}
                suffixIcon={<ChevronRightDoubleIcon />}
                isTrigger
              />
            </div>
            <div className="xxl:grid-cols-5 grid grid-cols-3 gap-4 xl:grid-cols-4">
              {productList.map((product: ProductDetailType) => {
                return <ProductThumbnail product={product} key={product.id} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </AnimationDropDown>
  );
};
