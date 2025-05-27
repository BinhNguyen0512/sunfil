import { LocationIcon, RoadRightIcon } from "@/public/icons";
import { ButtonCustom } from "@/src/components/form/ButtonCustom";

import { WrapperPage } from "../../WrapperPage";

export const StoreSystem = () => {
  return (
    <WrapperPage backgroundColor="bg-brand-50">
      <div className="flex flex-col justify-between gap-4 py-4 lg:flex-row lg:items-center lg:gap-0 lg:py-10">
        <div className="flex items-center gap-4">
          <div>
            <LocationIcon />
          </div>
          <p className="text-base font-medium lg:text-3xl">
            Xem hệ thống 88 cửa hàng trên toàn quốc
          </p>
        </div>
        <div className="lg flex justify-center">
          <ButtonCustom className="rounded-full bg-white px-6 py-4">
            <div className="flex items-center justify-between gap-3">
              <p className="text-brand-600 text-base font-medium lg:text-2xl lg:font-semibold">
                Xem ngay
              </p>
              <div>
                <RoadRightIcon />
              </div>
            </div>
          </ButtonCustom>
        </div>
      </div>
    </WrapperPage>
  );
};
