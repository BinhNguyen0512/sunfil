import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  backgroundColor?: string;
  classnameWrapper?: string;
}

export const WrapperPage = (props: Props) => {
  const { children, backgroundColor = "", classnameWrapper = "" } = props;

  return (
    <div className={`${backgroundColor} ${classnameWrapper} lg:px-0 px-4`}>
      <div className={`w-full h-full lg:px-[60px] xl:px-[72px]`}>
        <div className="container mx-auto">{children}</div>
      </div>
    </div>
  );
};
