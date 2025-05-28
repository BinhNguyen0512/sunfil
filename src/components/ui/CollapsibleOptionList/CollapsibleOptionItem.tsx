import clsx from "clsx";
import { ReactNode } from "react";

interface Props {
  title?: string;
  classNameText?: string;
  suffix?: ReactNode;
  prefix?: ReactNode;
  infix?: ReactNode;
  classNameWrapper?: string;
  onClick?: () => void;
}

export const CollapsibleOptionItem = (props: Props) => {
  const {
    onClick,
    prefix,
    suffix,
    infix,
    classNameWrapper,
    classNameText,
    title,
  } = props;
  return (
    <li
      className={clsx("w-full px-2 py-3", classNameWrapper)}
      onClick={onClick}
    >
      {prefix}

      {infix ? (
        infix
      ) : (
        <div className="w-full">
          <p
            className={clsx("text-md font-semibold text-black", classNameText)}
          >
            {title}
          </p>
        </div>
      )}

      {suffix}
    </li>
  );
};
