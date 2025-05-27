import clsx from "clsx";

import { AccountIcon, CartIcon } from "@/public/icons";
import { LanguageTranslate } from "@/src/components/clients/LanguageTranslate";
import { LabelledIcon } from "@/src/components/ui/LabelledIcon";

export const InformationUser = () => {
  return (
    <div className="flex gap-8">
      <LanguageTranslate />

      <LabelledIcon
        prefixIcon={
          <div className="relative">
            <CartIcon />
            <div
              className={clsx(
                "absolute -top-4 -right-4",
                "h-6 w-6 rounded-full p-2",
                "bg-error-main",
                "flex items-center justify-center",
                "text-sm font-normal text-white",
              )}
            >
              12
            </div>
          </div>
        }
        textCustom={<p className="text-md font-medium text-black">Giỏ hàng</p>}
        cursorPointer
      />

      <LabelledIcon
        prefixIcon={<AccountIcon />}
        textCustom={<p className="text-md font-medium text-black">Tài khoản</p>}
        cursorPointer
      />
    </div>
  );
};
