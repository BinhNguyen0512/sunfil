import clsx from "clsx";

import { BreadcrumbCustom } from "../components/server/Breadcrumb";
import Benefits from "../components/server/HomePage/Benefits";
import { WrapperPage } from "../components/ui/WrapperPage";

export const breadCrumb = [
  {
    name: "Trang chủ",
    link: "/",
  },
  {
    name: "Sản phẩm",
  },
];

export default function Home() {
  return (
    <section className="bg-gray-200 pt-32">
      <WrapperPage>
        <div className={clsx("py-4 lg:py-6", "flex flex-col gap-8")}>
          <BreadcrumbCustom listBreadCrumb={breadCrumb} />

          <div>2</div>
          <div>3</div>
          <Benefits />
        </div>
      </WrapperPage>
    </section>
  );
}
