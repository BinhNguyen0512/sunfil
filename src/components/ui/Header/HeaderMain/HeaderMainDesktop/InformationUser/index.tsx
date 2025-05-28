"use client";

import { AccountIcon } from "@/public/icons";
import { LanguageTranslate } from "@/src/components/clients/LanguageTranslate";
import { LabelledIcon } from "@/src/components/ui/LabelledIcon";

import { Cart } from "../../../components/Cart";

export const InformationUser = () => {
  return (
    <div className="flex gap-8">
      <LanguageTranslate />

      <Cart isText onClick={() => console.log} />

      <LabelledIcon
        prefixIcon={<AccountIcon />}
        textCustom={<p className="text-md font-medium">Tài khoản</p>}
        isTrigger
      />
    </div>
  );
};
