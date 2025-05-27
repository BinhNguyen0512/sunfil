import Link from "next/link";

import { ImageCustom } from "../../../ImageCustom";
import { WrapperPage } from "../../../WrapperPage";
import { InformationUser } from "./InformationUser";
import { SearchBar } from "./SearchBar";

export const HeaderMainDesktop = () => {
  return (
    <WrapperPage classnameWrapper="py-6 lg:block hidden">
      <div className="flex items-center justify-between gap-12">
        <Link className="h-full cursor-pointer" href={"#"}>
          <ImageCustom
            alt="Logo Sunfil"
            src="/images/logo.png"
            height={111}
            width={250}
            priority
            loading={undefined}
          />
        </Link>

        <SearchBar />

        <InformationUser />
      </div>
    </WrapperPage>
  );
};
