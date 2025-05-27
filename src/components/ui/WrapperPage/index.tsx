import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export const WrapperPage = (props: Props) => {
  const { children } = props;

  return (
    <div className={`w-full h-full lg:px-[60px] xl:px-[72px]`}>
      <div className="container mx-auto">{children}</div>
    </div>
  );
};
