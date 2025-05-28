import clsx from "clsx";

import { BreadcrumbCustom } from "../components/server/Breadcrumb";
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
    <section className="h-screen bg-gray-200">
      <WrapperPage>
        <div className={clsx("py-4 lg:py-6", "flex flex-col gap-8")}>
          <BreadcrumbCustom listBreadCrumb={breadCrumb} />

          <div>2</div>
          <div>3</div>
          <div>4</div>
        </div>
      </WrapperPage>
    </section>
  );
}
