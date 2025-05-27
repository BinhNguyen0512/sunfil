import clsx from "clsx";
import { useMemo } from "react";

import { ChevronDownIcon } from "@/public/icons";
import { ImageCustom } from "@/src/components/ui/ImageCustom";

import { subCategoryType } from "../constants";

interface Props {
  subCategory: subCategoryType;
  // eslint-disable-next-line no-unused-vars
  onClick: (subCategory: subCategoryType) => void;
  selectedSub: subCategoryType;
}

export const SubCategoryItem = (props: Props) => {
  const { subCategory, onClick, selectedSub } = props;

  const isTrigger = useMemo(
    () => selectedSub.id === subCategory.id,
    [selectedSub.id],
  );

  return (
    <div
      className={clsx(
        "flex items-center justify-between p-4",
        "transition-all duration-300",
        isTrigger ? "bg-gray-200" : "",
      )}
      onMouseEnter={() => onClick(subCategory)}
    >
      <div className="flex h-full w-full items-center gap-4">
        <div className="flex h-full w-10 items-center justify-between">
          <ImageCustom
            alt={subCategory.name}
            src={subCategory.srcImage}
            height={40}
            width={40}
            className="h-10 w-10"
          />
        </div>
        <p
          className={clsx(
            "text-md min-w-[160px] font-medium text-black capitalize",
            isTrigger ? "text-brand-600 transition-all duration-300" : "",
          )}
        >
          {subCategory.name}
        </p>
      </div>
      <div>
        <ChevronDownIcon
          className={clsx(
            "-rotate-90 stroke-black",
            isTrigger ? "-rotate-180 transition-all duration-300" : "",
          )}
        />
      </div>
    </div>
  );
};
