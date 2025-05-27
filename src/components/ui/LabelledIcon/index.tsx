import clsx from "clsx";
import { ReactNode } from "react";

interface Props {
  prefixIcon?: ReactNode;
  textCustom: ReactNode;
  suffixIcon?: ReactNode;
  className?: string;
}

export const LabelledIcon = (props: Props) => {
  const { prefixIcon, textCustom = "", suffixIcon, className = "" } = props;
  return (
    <div className={clsx("flex items-center gap-2", className)}>
      {prefixIcon && <div className="">{prefixIcon}</div>}
      {textCustom}
      {suffixIcon && <div>{suffixIcon}</div>}
    </div>
  );
};
