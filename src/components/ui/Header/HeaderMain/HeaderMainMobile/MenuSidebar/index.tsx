"use client";

import clsx from "clsx";
import { Fragment, useEffect, useState } from "react";

import { ChevronDownIcon, ExitIcon } from "@/public/icons";
import { CollapsibleOptionList } from "@/src/components/ui/CollapsibleOptionList";
import Divider from "@/src/components/ui/Divider";
import { LabelledIcon } from "@/src/components/ui/LabelledIcon";
import { Logo } from "@/src/components/ui/Logo";
import { Overlay } from "@/src/components/ui/Overlay";
import { handleFilter } from "@/src/helpers/filter";

import {
  supportDealList,
  SupportDealType,
} from "../../../constants/navigationBarConstant";
import {
  ProductGroupType,
  subCategory,
  subCategoryType,
} from "../../../constants/productCategoryMenu";
import { MenuSidebarItemTitle } from "./MenuSidebarItem";

interface Props {
  isOpenMenu: boolean;
  onClickExitMenu: () => void;
}

export const MenuSidebar = (props: Props) => {
  const { isOpenMenu, onClickExitMenu } = props;

  const [selectedSubList, setSelectedSubList] = useState<string[]>([]);

  useEffect(() => {
    if (isOpenMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isOpenMenu]);

  const handleActionMenuItem = (sub: subCategoryType) => {
    if (selectedSubList.includes(sub.id)) {
      const filter = handleFilter(selectedSubList, sub.id);

      setSelectedSubList(filter);
      return;
    }

    setSelectedSubList([...selectedSubList, sub.id]);
  };

  const renderMenuSidebarItem = (sub: subCategoryType) => {
    return (
      <Fragment key={sub.id}>
        <CollapsibleOptionList
          collapsibleItemTitle={
            <MenuSidebarItemTitle
              name={sub.name}
              onClick={() => onClickExitMenu()}
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
                      selectedSubList.includes(sub.id)
                        ? "-rotate-180"
                        : "rotate-0",
                    )}
                  />
                </div>
              }
            />
          }
          selectedOptions={selectedSubList}
          collapsibleOptionId={sub.id}
          collapsibleItemSub={
            <>
              {sub.productGroup.map(
                (productGroup: ProductGroupType, indexProductGroup: number) => {
                  return (
                    <Fragment key={productGroup.id}>
                      <MenuSidebarItemTitle
                        name={productGroup.name}
                        classNameText="!text-base !font-semibold"
                        suffixIcon={<></>}
                        onClick={() => {
                          onClickExitMenu();
                        }}
                      />
                      {sub.productGroup.length - 1 !== indexProductGroup && (
                        <Divider />
                      )}
                    </Fragment>
                  );
                },
              )}
            </>
          }
          classNameSubWrapper="mx-2 mb-2 rounded-lg bg-[#eaeffa]"
        />
      </Fragment>
    );
  };

  return (
    <>
      <div
        className={clsx(
          "fixed top-0 z-1024 h-screen overflow-y-auto",
          "transition-all duration-500",
          isOpenMenu ? "left-0" : "left-[-100%]",
          "bg-white",
        )}
      >
        <div className={clsx("w-full px-2 py-4", "flex flex-col gap-2")}>
          <div className="flex items-center justify-between">
            <Logo height={111} width={250} classNameWrapper="!justify-start" />

            <div
              className="flex h-10 w-10 items-center justify-center"
              onClick={onClickExitMenu}
            >
              <ExitIcon />
            </div>
          </div>

          <Divider className="my-2" />

          <div className="h-full w-full">
            <ul>
              {/* menu category list  */}
              {subCategory.map((sub: subCategoryType) =>
                renderMenuSidebarItem(sub),
              )}
            </ul>
          </div>

          <Divider className="my-5" />

          <div className="flex w-full flex-col items-center gap-4">
            {supportDealList.map((supportDeal: SupportDealType) => {
              return (
                <LabelledIcon
                  prefixIcon={<div>{supportDeal.icon}</div>}
                  textCustom={<p className="w-max">{supportDeal.name}</p>}
                  key={supportDeal.id}
                  className="text-md font-semibold"
                  isTrigger
                />
              );
            })}
          </div>
        </div>
      </div>

      {isOpenMenu && <Overlay />}
    </>
  );
};
