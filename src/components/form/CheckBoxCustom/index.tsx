import { Input, InputProps } from "@headlessui/react";
import clsx from "clsx";

import { CheckedIcon } from "@/public/icons";

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface Props extends InputProps {}

export const CheckBox = (props: Props) => {
  const { ...rest } = props;

  return (
    <div className="relative h-5 w-5">
      <Input
        type="checkbox"
        className={clsx(
          "peer border-secondary-200 h-5 w-5 rounded-[5px] border-[1.5px] border-solid",
          "cursor-pointer appearance-none",
          "checked:border-brand-600 checked:bg-brand-600 transition-all duration-300",
        )}
        {...rest}
      />

      <div
        className={clsx(
          "pointer-events-none absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]",
          "opacity-0 transition-opacity duration-300 peer-checked:opacity-100",
        )}
      >
        <CheckedIcon className="h-3 w-3" />
      </div>
    </div>
  );
};
