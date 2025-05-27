import { LocationIcon, RoadRightIcon } from "@/public/icons";
import { ButtonCustom } from "@/src/components/form/ButtonCustom";

import { WrapperPage } from "../../WrapperPage";

export const StoreSystem = () => {
  return (
    <WrapperPage backgroundColor="bg-brand-50">
      <div className="flex lg:flex-row flex-col justify-between lg:items-center lg:gap-0 gap-4 lg:py-10 py-4">
        <div className="flex gap-4 items-center">
          <div>
            <LocationIcon />
          </div>
          <p className="text-base lg:text-3xl font-medium">
            Xem hệ thống 88 cửa hàng trên toàn quốc
          </p>
        </div>
        <div className="flex justify-center lg">
          <ButtonCustom className="px-6 py-4 rounded-full bg-white cursor-pointer">
            <div className="flex items-center justify-between gap-3">
              <p className="text-base lg:text-2xl text-brand-600 font-medium lg:font-semibold">
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
