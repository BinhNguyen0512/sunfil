import clsx from "clsx";

import { LabelledIcon } from "@/src/components/ui/LabelledIcon";

import { BenefitType } from "./constants";

interface Props {
  benefit: BenefitType;
}

export const BenefitItem = (props: Props) => {
  const { benefit } = props;
  return (
    <LabelledIcon
      textCustom={
        <div className="flex flex-col gap-2">
          <p className="text-md font-semibold text-black">{benefit.title}</p>
          <p className="text-secondary text-base font-medium">
            {benefit.description}
          </p>
        </div>
      }
      prefixIcon={benefit.icon}
      className={clsx(
        "transition-all duration-300 hover:scale-[1.05]",
        "cursor-pointer rounded-lg bg-white shadow-xl",
        "px-3 py-6",
      )}
    />
  );
};
