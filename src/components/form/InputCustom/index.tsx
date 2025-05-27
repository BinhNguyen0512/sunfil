import { Input, InputProps } from "@headlessui/react";
import clsx from "clsx";
import React, { ReactNode } from "react";

interface Props extends InputProps {
  prefixIcon?: ReactNode;
  suffixIcon?: ReactNode;
  customText?: ReactNode;
}

export const InputCustom = (props: Props) => {
  const { customText, prefixIcon, suffixIcon, className, ...rest } = props;
  return (
    <div
      className={clsx(
        "relative flex w-full items-center gap-2",
        "rounded-full border-[2px] border-solid border-gray-400",
        "focus-within:border-brand-500 focus-within:shadow-lg",
        "transition-all duration-300",
        "px-4 py-2",
      )}
    >
      {prefixIcon}

      <Input
        {...rest}
        className={clsx("w-full outline-none", "bg-transparent", className)}
      />
      {customText}

      {suffixIcon}
    </div>
  );
};
