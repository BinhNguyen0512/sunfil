"use client";

import { useEffect, useState } from "react";

import { ChevronDownIcon } from "@/public/icons";

export const Sticky = () => {
  const [isShowScrollTop, setIsShowScrollTop] = useState<boolean>(false);

  const handleScrollVisibility = () => {
    if (window.scrollY > 100) {
      setIsShowScrollTop(true);
      return;
    }
    setIsShowScrollTop(false);
  };

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    if (window.scrollY > 100) {
      setIsShowScrollTop(true);
    }

    window.addEventListener("scroll", handleScrollVisibility);

    return () => {
      window.removeEventListener("scroll", handleScrollVisibility);
    };
  }, []);

  return (
    <>
      {isShowScrollTop && (
        <div className="fixed right-10 bottom-10 z-10 hidden lg:block">
          <div
            className="flex aspect-square h-full w-full cursor-pointer items-center justify-center rounded-full border-[1px] border-solid border-black p-4"
            onClick={handleScrollToTop}
          >
            <ChevronDownIcon className="-rotate-180 stroke-black" />
          </div>
        </div>
      )}
    </>
  );
};
