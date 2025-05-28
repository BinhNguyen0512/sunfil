"use client";

import clsx from "clsx";
import { ReactNode } from "react";

import { CollapsibleOptionItem } from "@/src/components/ui/CollapsibleOptionList/CollapsibleOptionItem";

interface Props {
  name: string;
  suffixIcon: ReactNode;
  classNameWrapper?: string;
  classNameText?: string;
  onClick: () => void;
}

export const MenuSidebarItemTitle = (props: Props) => {
  const { name, suffixIcon, classNameWrapper, classNameText, onClick } = props;
  return (
    <CollapsibleOptionItem
      classNameWrapper={clsx(
        "flex items-center justify-between ",
        classNameWrapper,
      )}
      title={name}
      classNameText={classNameText}
      suffix={suffixIcon}
      onClick={onClick}
    />
  );
};

export const MenuSidebarItemSub = (props: Props) => {
  const { name, classNameWrapper, onClick } = props;
  return (
    <CollapsibleOptionItem
      classNameWrapper={clsx(
        "flex items-center justify-between ",
        classNameWrapper,
      )}
      title={name}
      classNameText="!text-base !font-semibold"
      onClick={onClick}
    />
  );
};
