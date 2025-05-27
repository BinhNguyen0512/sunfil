import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  backgroundColor?: string;
  classnameWrapper?: string;
}

export const WrapperPage = (props: Props) => {
  const { children, backgroundColor = "", classnameWrapper = "" } = props;

  return (
    <div className={`${backgroundColor} ${classnameWrapper} px-4 lg:px-0`}>
      <div className={`h-full w-full lg:px-[60px] xl:px-[72px]`}>
        <div className="container mx-auto">{children}</div>
      </div>
    </div>
  );
};
