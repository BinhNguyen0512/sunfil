"use client";

import { ReactNode } from "react";

import { AnimationScrollDown } from "../Animation/AnimationScrollDown";

export interface OptionType {
  id: string;
  alias: string;
  name: string;
}
interface Props {
  collapsibleOptionId: string;
  collapsibleItemTitle: ReactNode;
  collapsibleItemSub: ReactNode;
  classNameSubWrapper?: string;
  selectedOptions: string[];
}

export const CollapsibleOptionList = (props: Props) => {
  const {
    collapsibleOptionId,
    collapsibleItemTitle,
    collapsibleItemSub,
    selectedOptions,
    classNameSubWrapper,
  } = props;
  return (
    <>
      {collapsibleItemTitle}

      <li className={classNameSubWrapper}>
        <AnimationScrollDown
          isTrigger={selectedOptions.includes(collapsibleOptionId)}
        >
          {collapsibleItemSub}
        </AnimationScrollDown>
      </li>
    </>
  );
};
