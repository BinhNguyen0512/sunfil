import clsx from "clsx";
import { ReactNode } from "react";

interface Props {
  prefixIcon?: ReactNode;
  textCustom: ReactNode;
  suffixIcon?: ReactNode;
  className?: string;
  isTrigger?: boolean;
  onClick?: () => void;
}

export const LabelledIcon = (props: Props) => {
  const {
    prefixIcon,
    textCustom = "",
    suffixIcon,
    className = "",
    isTrigger,
    onClick,
  } = props;
  return (
    <div
      className={clsx(
        "flex items-center gap-2",
        className,
        isTrigger &&
          "hover:text-brand-500 cursor-pointer font-semibold text-black transition-all duration-300",
      )}
      onClick={onClick}
    >
      {prefixIcon && <div className="">{prefixIcon}</div>}
      {textCustom}
      {suffixIcon && <div>{suffixIcon}</div>}
    </div>
  );
};
