import clsx from "clsx";
import { ReactNode } from "react";

import { CollapsibleOptionItem } from "@/src/components/ui/CollapsibleOptionList/CollapsibleOptionItem";

interface Props {
  name: string;
  suffixIcon: ReactNode;
  onClick: () => void;
}

export const CollapsibleFilterItem = (props: Props) => {
  const { name, suffixIcon, onClick } = props;
  return (
    <CollapsibleOptionItem
      classNameWrapper={clsx(
        "flex items-center justify-between px-3 cursor-pointer",
      )}
      title={name}
      classNameText={clsx("text-xl font-semibold text-black")}
      suffix={suffixIcon}
      onClick={onClick}
    />
  );
};
