import { WrapperPage } from "../../WrapperPage";
import { AboutUsList } from "../components/AboutUsList";
import { SupportDealList } from "../components/SupportDealList";
import { ProductCategory } from "./ProductCategory";

export const NavigationBar = () => {
  return (
    <WrapperPage classnameWrapper={"lg:block hidden"}>
      <div className="flex w-full items-center justify-between">
        <div className="flex w-full items-center gap-6">
          <ProductCategory />

          <AboutUsList classNameWrapper="xxl:block hidden" />
        </div>

        <SupportDealList />
      </div>
    </WrapperPage>
  );
};
