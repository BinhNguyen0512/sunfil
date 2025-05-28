"use client";
import clsx from "clsx";

import { CartIcon } from "@/public/icons";

import { LabelledIcon } from "../../../LabelledIcon";

interface Props {
  onClick: () => void;
  classNameWrapper?: string;
  isText?: boolean;
}

export const Cart = (props: Props) => {
  const { classNameWrapper = "", isText = false, onClick } = props;
  return (
    <LabelledIcon
      prefixIcon={
        <div className={clsx("relative", classNameWrapper)} onClick={onClick}>
          <CartIcon className="h-5 w-5 lg:h-7 lg:w-7" />
          <div
            className={clsx(
              "absolute -top-3 -right-3 lg:-top-4 lg:-right-4",
              "h-5 w-5 rounded-full p-1 lg:h-6 lg:w-6 lg:p-2",
              "bg-error-main",
              "flex items-center justify-center",
              "text-sm font-normal text-white",
            )}
          >
            12
          </div>
        </div>
      }
      textCustom={
        isText ? <p className="text-md font-medium">Giỏ hàng</p> : <></>
      }
      isTrigger
    />
  );
};
