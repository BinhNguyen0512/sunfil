import { LabelledIcon } from "../../LabelledIcon";
import { WrapperPage } from "../../WrapperPage";
import {
  aboutUsList,
  AboutUsType,
  supportDealList,
  SupportDealType,
} from "../constants/navigationBarConstant";
import { ProductCategory } from "./ProductCategory";

export const NavigationBar = () => {
  return (
    <WrapperPage>
      <div className="flex w-full items-center justify-between">
        <div className="flex w-full items-center gap-6">
          <ProductCategory />

          <div className="flex w-full items-center gap-4">
            {aboutUsList.map((aboutUs: AboutUsType) => {
              return (
                <a
                  key={aboutUs.id}
                  href={aboutUs.link}
                  className="text-md hover:text-brand-500 font-medium text-black transition-all duration-300"
                >
                  {aboutUs.name}
                </a>
              );
            })}
          </div>
        </div>

        <div className="flex w-full items-center gap-4">
          {supportDealList.map((supportDeal: SupportDealType) => {
            return (
              <LabelledIcon
                prefixIcon={<div>{supportDeal.icon}</div>}
                textCustom={<p className="w-max">{supportDeal.name}</p>}
                key={supportDeal.id}
                className="text-md font-semibold"
                isTrigger
              />
            );
          })}
        </div>
      </div>
    </WrapperPage>
  );
};
