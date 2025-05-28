"use client";

import { MenuIcon } from "@/public/icons";

import { ImageCustom } from "../../../ImageCustom";
import { Cart } from "../../components/Cart";
import { SearchBar } from "../HeaderMainDesktop/SearchBar";

export const HeaderMainMobile = () => {
  return (
    <div className="fixed z-1024 block w-full lg:hidden">
      <div className="h-full w-full bg-white p-4 shadow-2xl">
        <div className="grid grid-cols-[40px_1fr_40px]">
          <div className="flex items-center justify-center">
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
          <Cart onClick={() => console.log} />
          <div className="col-span-full grid">
            <SearchBar />
          </div>
        </div>
      </div>
    </div>
  );
};
