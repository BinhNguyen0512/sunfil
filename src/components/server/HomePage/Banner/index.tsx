import clsx from "clsx";

import { ImageCustom } from "@/src/components/ui/ImageCustom";

const Banner = () => {
  return (
    <div
      className={clsx("bg-brand-600 h-full w-full rounded-xl", "flex flex-col")}
    >
      <div className="h-full w-full">
        <ImageCustom
          alt="banner"
          src="/images/banner.png"
          height={500}
          width={1440}
          className="h-auto w-full rounded-l-xl rounded-r-xl"
          priority
        />
      </div>
      <div className={clsx("p-12")}>2</div>
    </div>
  );
};

export default Banner;
