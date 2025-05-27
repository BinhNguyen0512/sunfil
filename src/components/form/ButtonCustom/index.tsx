import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from "react";

interface Props
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children?: ReactNode;
}

export const ButtonCustom = (props: Props) => {
  const { children, ...rest } = props;

  return (
    <button className="cursor-pointer" {...rest}>
      {children}
    </button>
  );
};
