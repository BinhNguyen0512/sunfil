"use client";

import { useState } from "react";

import { AccountIcon, MenuIcon } from "@/public/icons";

import { Logo } from "../../../Logo";
import { SearchBar } from "../HeaderMainDesktop/SearchBar";
import { MenuSidebar } from "./MenuSidebar";

export const HeaderMainMobile = () => {
  const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false);

  const handleOpenMenu = () => {
    if (isOpenMenu) {
      setIsOpenMenu(false);
      return;
    }

    setIsOpenMenu(true);
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
            <Logo height={111} width={250} />

            <div>
              <AccountIcon />
            </div>
            <div className="col-span-full grid">
              <SearchBar />
            </div>
          </div>
        </div>
        <MenuSidebar
          isOpenMenu={isOpenMenu}
          onClickExitMenu={() => setIsOpenMenu(false)}
        />
      </div>
    </>
  );
};
