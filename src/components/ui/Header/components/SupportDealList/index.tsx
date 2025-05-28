import clsx from "clsx";

import { LabelledIcon } from "../../../LabelledIcon";
import {
  supportDealList,
  SupportDealType,
} from "../../constants/navigationBarConstant";

interface Props {
  classNameWrapper?: string;
}

export const SupportDealList = (props: Props) => {
  const { classNameWrapper } = props;
  return (
    <div className={clsx("flex w-full items-center gap-4", classNameWrapper)}>
      {supportDealList.map((supportDeal: SupportDealType) => {
        return (
          <LabelledIcon
            prefixIcon={<div>{supportDeal.icon}</div>}
            textCustom={<p className="w-max">{supportDeal.name}</p>}
            key={supportDeal.id}
            className="xl:text-md text-base font-semibold"
            isTrigger
          />
        );
      })}
    </div>
  );
};
