import { InputProps } from "@headlessui/react";
import { ReactNode } from "react";

import { LabelledIcon } from "@/src/components/ui/LabelledIcon";

import { CheckBox } from "..";

interface Props extends InputProps {
  textCustom: ReactNode;
  className?: string;
  onClickElement: () => void;
}

export const LabelledCheckBox = (props: Props) => {
  const { textCustom, onClickElement, className, ...rest } = props;
  return (
    <LabelledIcon
      className={className}
      textCustom={textCustom}
      prefixIcon={<CheckBox {...rest} />}
      onClick={onClickElement}
    />
  );
};
