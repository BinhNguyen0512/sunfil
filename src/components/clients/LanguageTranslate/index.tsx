"use client";

import { ChevronDownIcon, VietNamIcon } from "@/public/icons";

export const LanguageTranslate = () => {
  const handleOnclick = () => {
    console.log();
  };

  return (
    <div
      className="flex cursor-pointer items-center gap-4"
      onClick={handleOnclick}
    >
      <div className="flex items-center gap-2">
        <div>
          <VietNamIcon />
        </div>
        <p className="text-xl font-medium">VI</p>
      </div>
      <div>
        <ChevronDownIcon className="stroke-black" />
      </div>
    </div>
  );
};
