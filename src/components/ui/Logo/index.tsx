import clsx from "clsx";

import { ImageCustom } from "../ImageCustom";

interface Props {
  height: number;
  width: number;
  classNameWrapper?: string;
  classNameImage?: string;
}
export const Logo = (props: Props) => {
  const { height, width, classNameImage, classNameWrapper } = props;
  return (
    <div
      className={clsx(
        "flex w-full items-center justify-center",
        classNameWrapper,
      )}
    >
      <ImageCustom
        src="/images/logo.png"
        alt="logo"
        height={height}
        width={width}
        className={clsx("h-full max-w-24", classNameImage)}
      />
    </div>
  );
};
