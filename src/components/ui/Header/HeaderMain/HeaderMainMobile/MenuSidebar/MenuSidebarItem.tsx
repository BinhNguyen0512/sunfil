"use client";

import clsx from "clsx";
import { ReactNode } from "react";

interface Props {
  name: string;
  suffixIcon: ReactNode;
  classNameWrapper?: string;
  classNameText?: string;
  onClick: () => void;
}

export const MenuSidebarItem = (props: Props) => {
  const { name, suffixIcon, classNameWrapper, classNameText, onClick } = props;
  return (
    <li
      className={clsx(
        "flex w-full items-center justify-between px-2 py-3",
        classNameWrapper,
      )}
      onClick={onClick}
    >
      <div className="w-full">
        <p className={clsx("text-md font-semibold text-black", classNameText)}>
          {name}
        </p>
      </div>
      {suffixIcon}
    </li>
  );
};
