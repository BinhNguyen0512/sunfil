import { CallIcon, SaleIcon, SmartPhoneIcon } from "@/public/icons";

import { LabelledIcon } from "../../LabelledIcon";
import { WrapperPage } from "../../WrapperPage";

const textStyle = "text-base font-normal text-white";

export const TopBar = () => {
  return (
    <div className="hidden bg-linear-to-r from-[#0D57C6] via-[#37CFFF] to-[#0F5ED6] lg:block">
      <WrapperPage>
        <div className="flex items-center justify-between py-2">
          <LabelledIcon
            textCustom={
              <p className={textStyle}>
                Nhập mã <span className="text-yellow-primary"> NEWBIE </span>
                giảm ngay 10% cho lần đầu mua hàng
              </p>
            }
            prefixIcon={<SaleIcon />}
          />
          <div className="flex gap-4">
            <LabelledIcon
              textCustom={
                <p className={textStyle}>
                  Hotline:{" "}
                  <span className="text-yellow-primary text-base font-medium">
                    0283 760 7607
                  </span>
                </p>
              }
              prefixIcon={<CallIcon />}
            />

            <LabelledIcon
              textCustom={<p className={textStyle}>Tải ứng dụng</p>}
              prefixIcon={<SmartPhoneIcon />}
            />
          </div>
        </div>
      </WrapperPage>
    </div>
  );
};
