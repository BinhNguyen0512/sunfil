"use client";

import { useState } from "react";

import { AccountIcon, MenuIcon } from "@/public/icons";

import { ImageCustom } from "../../../ImageCustom";
import { SearchBar } from "../HeaderMainDesktop/SearchBar";
import { MenuSidebar } from "./MenuSidebar";

export const HeaderMainMobile = () => {
  const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false);

  const handleOpenMenu = () => {
    setIsOpenMenu(!isOpenMenu);
  };

  return (
    <>
      <div className="fixed z-1024 block w-full lg:hidden">
        <div className="h-full w-full bg-white p-4 shadow-2xl">
          <div className="grid grid-cols-[40px_1fr_40px]">
            <div
              className="flex items-center justify-center"
              onClick={() => handleOpenMenu()}
            >
              <MenuIcon className="stroke-black" />
            </div>
            <div className="flex w-full items-center justify-center">
              <ImageCustom
                src="/images/logo.png"
                alt="logo"
                height={111}
                width={250}
                className="h-full max-w-24"
              />
            </div>

            <div>
              <AccountIcon />
            </div>
            <div className="col-span-full grid">
              <SearchBar />
            </div>
          </div>
        </div>
        <MenuSidebar isOpenMenu={isOpenMenu} />
      </div>
    </>
  );
};
