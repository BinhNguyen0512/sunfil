import clsx from "clsx";

import { LanguageTranslate } from "@/src/components/clients/LanguageTranslate";

import { ImageCustom } from "../../../ImageCustom";

interface Props {
  classNameWrapper: string;
  classNameElement?: string;
}

export const Industry = (props: Props) => {
  const { classNameWrapper, classNameElement = "" } = props;
  return (
    <div className={clsx(classNameWrapper)}>
      <div className={clsx(classNameElement)}>
        <div>
          <ImageCustom
            src={"/images/bo-cong-thuong.png"}
            alt=""
            height={75}
            width={200}
          />
        </div>
        <div>
          <LanguageTranslate />
        </div>
      </div>
    </div>
  );
};
