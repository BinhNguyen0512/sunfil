import clsx from "clsx";

import { BenefitItem } from "./BenefitItem";
import { benefitList, BenefitType } from "./constants";

const Benefits = () => {
  return (
    <div
      className={clsx(
        "h-full w-full py-8",
        "grid grid-cols-1 gap-4 md:grid-cols-2 lg:gap-8 xl:grid-cols-4",
      )}
    >
      {benefitList.map((benefit: BenefitType) => {
        return <BenefitItem key={benefit.id} benefit={benefit} />;
      })}
    </div>
  );
};

export default Benefits;
